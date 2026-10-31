// GET /api/news            → 지금 수집한 실시간 뉴스
// GET /api/news?date=YYYY-MM-DD → 해당 날짜(한국시간)에 보관된 뉴스
import { fetchLive, summarize, archive, loadDay, kst, key } from "./lib.mjs";

const json = (obj, ttl) => new Response(JSON.stringify(obj), { headers: {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=60",
  "Netlify-CDN-Cache-Control": `public, s-maxage=${ttl}, stale-while-revalidate=900`,
} });

export default async (req) => {
  const q = new URL(req.url).searchParams.get("date");
  const today = kst(Date.now());
  const date = q && /^\d{4}-\d{2}-\d{2}$/.test(q) ? q : null;

  if (date && date !== today) {                     // 지난 날짜: 보관본만 (실시간 수집 안 함)
    const items = await loadDay(date).catch(() => []);
    return json(summarize(items), 3600);
  }
  const live = await fetchLive();
  if (!live.is_sample) await archive(live.items).catch(() => {});
  if (date && !live.is_sample) {                    // 오늘: 보관본 + 방금 수집분 합치기
    const old = await loadDay(date).catch(() => []);
    const seen = new Set(old.map(key));
    const items = old.concat(live.items.filter((x) => x.date === date && !seen.has(key(x))));
    return json(summarize(items, live), 300);
  }
  return json(summarize(live.items, live), 300);
};

export const config = { path: "/api/news" };
