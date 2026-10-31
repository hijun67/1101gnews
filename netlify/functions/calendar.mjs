// GET /api/calendar?month=YYYY-MM → 날짜별 {n, bull, bear}
import { loadMonth } from "./lib.mjs";

export default async (req) => {
  const month = new URL(req.url).searchParams.get("month") || "";
  const ok = /^\d{4}-\d{2}$/.test(month);
  let days = {};
  if (ok) try { days = await loadMonth(month); } catch {}
  return new Response(JSON.stringify({ month, days }), { status: ok ? 200 : 400, headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "public, max-age=60",
    "Netlify-CDN-Cache-Control": "public, s-maxage=120, stale-while-revalidate=600",
  } });
};

export const config = { path: "/api/calendar" };
