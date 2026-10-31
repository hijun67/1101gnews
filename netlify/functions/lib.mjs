// Netlify Function: GET /api/news  (RSS 수집 → 분류 → 영향 분석 JSON)
import { getStore } from "@netlify/blobs";
import D from "./data.mjs";

export const kst = (ms) => new Date(ms).toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" }); // YYYY-MM-DD (한국시간)

const rx = (p) => new RegExp(p, "i");
const TH = Object.entries(D.THEMES).map(([k, p]) => [k, rx(p)]);
const AC = Object.entries(D.ACTORS).map(([k, p]) => [k, rx(p)]);
const BULL = new RegExp(D.BULL, "gi"), BEAR = new RegExp(D.BEAR, "gi"), TK = new RegExp(D.TICKERS);
const SIGN = { Bullish: 1, Bearish: -1, Neutral: 0 };

const decode = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&amp;/g, "&");
const tag = (x, t) => { const m = x.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i")); return m ? decode(m[1]).trim() : ""; };

function classify(title, summary = "") {
  const t = `${title} ${summary}`.toLowerCase();
  const theme = (TH.find(([, r]) => r.test(t)) || ["기타"])[0];
  let actors = AC.filter(([, r]) => r.test(t)).map(([k]) => k);
  if (!actors.length) actors = ["빅테크·기업"];
  const b = (t.match(BULL) || []).length, r = (t.match(BEAR) || []).length;
  const sentiment = b > r ? "Bullish" : r > b ? "Bearish" : "Neutral";
  const m = title.match(TK);
  const ticker = m ? m[1] : (Object.entries(D.NAMES).find(([k]) => t.includes(k)) || [])[1] || "MARKET";
  const impact = Math.min(10, Math.round((5 + 1.2 * (b + r) + (actors.length > 1 ? 1 : 0)) * 10) / 10);
  return { theme, actors, sentiment, ticker, impact };
}

async function fetchFeed(id) {
  const url = D.SOURCES[id].url;
  if (!url) return [];
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 5000);
  try {
    const res = await fetch(url, { signal: ctl.signal, headers: { "User-Agent": "Mozilla/5.0 (compatible; USStockWire/1.0)" } });
    if (!res.ok) throw new Error(res.status);
    const xml = await res.text();
    return (xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || []).slice(0, 12).map((x) => {
      const title = tag(x, "title");
      const summary = tag(x, "description").replace(/<[^>]+>/g, "").slice(0, 220);
      const p = Date.parse(tag(x, "pubDate")), ts = Number.isFinite(p) ? Math.min(p, Date.now()) : Date.now();
      return title && { source: id, ...classify(title, summary), title_en: title, title_ko: null, summary, why: null,
        ts, date: kst(ts), ago: Math.floor((Date.now() - ts) / 60000), url: tag(x, "link") || "#" };
    }).filter(Boolean);
  } finally { clearTimeout(timer); }
}

export async function fetchLive() {
  const ids = Object.keys(D.SOURCES);
  const results = await Promise.allSettled(ids.map(fetchFeed));
  let items = [], failed = [];
  results.forEach((r, i) => r.status === "fulfilled" ? items.push(...r.value) : failed.push(ids[i]));
  const is_sample = items.length < 5;
  if (is_sample) items = D.SAMPLES.map((s, i) => { const ago = (i * 7) % 90, ts = Date.now() - ago * 60000;
    return { ...s, summary: "", ts, date: kst(ts), ago, url: "#" }; });
  return { items, failed, is_sample };
}

export function summarize(items, { is_sample = false, failed = [] } = {}) {
  const ids = Object.keys(D.SOURCES);
  items = [...items].sort((a, b) => a.ago - b.ago || b.impact - a.impact);

  const actors = Object.fromEntries(Object.keys(D.ACTORS).map((k) => [k, { name: k, net: 0, tot: 0, n: 0, bull: 0, bear: 0 }]));
  const themes = {}, srcs = Object.fromEntries(ids.map((k) => { const s = D.SOURCES[k];
    return [k, { id: k, name: s.name, speed: s.speed, region: s.region, flag: s.flag, n: 0, bull: 0, bear: 0 }]; }));
  for (const x of items) {
    const sg = SIGN[x.sentiment];
    for (const a of x.actors) { const d = actors[a]; d.net += sg * x.impact; d.tot += x.impact; d.n++; d.bull += sg > 0; d.bear += sg < 0; }
    const t = (themes[x.theme] ||= { name: x.theme, n: 0, net: 0 }); t.n++; t.net += sg;
    const s = srcs[x.source]; s.n++; s.bull += sg > 0; s.bear += sg < 0;
  }
  const al = Object.values(actors).map((d) => ({ ...d, score: d.tot ? Math.round((100 * d.net) / d.tot) : 0 }));
  return { status: "success", is_sample, failed,
    updated: new Date().toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul", hour12: false }),
    items, actors: al.sort((a, b) => Math.abs(b.score) - Math.abs(a.score)),
    themes: Object.values(themes).sort((a, b) => b.n - a.n), sources: Object.values(srcs) };
}

// ───────── 날짜별 보관 (Netlify Blobs) ─────────
let store = null;
const st = () => (store ||= getStore("news-archive"));
export const key = (x) => (x.url && x.url !== "#" ? x.url : x.title_en);
const tally = (l) => ({ n: l.length, bull: l.filter((x) => x.sentiment === "Bullish").length, bear: l.filter((x) => x.sentiment === "Bearish").length });

// 수집한 기사를 발행일(한국시간)별로 저장. 중복은 제외하고 하루 최대 400건 유지. (샘플은 호출하지 않음)
export async function archive(items) {
  const by = {};
  for (const x of items) (by[x.date] ||= []).push(x);
  await Promise.all(Object.entries(by).map(async ([date, list]) => {
    const old = (await st().get(`day/${date}`, { type: "json" })) || [];
    const seen = new Set(old.map(key));
    const add = list.filter((x) => !seen.has(key(x)));
    if (!add.length) return;
    const merged = old.concat(add).slice(-400);
    await st().setJSON(`day/${date}`, merged);
    await st().setJSON(`sum/${date}`, tally(merged));
  }));
}

export async function loadDay(date) {
  const l = (await st().get(`day/${date}`, { type: "json" })) || [];
  const now = Date.now();
  return l.map((x) => ({ ...x, ago: Math.max(0, Math.floor((now - x.ts) / 60000)) }));
}

export async function loadMonth(month) {
  const { blobs } = await st().list({ prefix: `sum/${month}` });
  const days = {};
  await Promise.all(blobs.map(async (b) => { days[b.key.slice(4)] = await st().get(b.key, { type: "json" }); }));
  return days;
}
