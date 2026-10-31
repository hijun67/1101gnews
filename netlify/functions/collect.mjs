// 매시간 자동 실행: 접속자가 없어도 뉴스를 수집해 날짜별로 쌓아 둡니다. (배포된 production 사이트에서만 동작)
import { fetchLive, archive } from "./lib.mjs";

export default async () => {
  const live = await fetchLive();
  if (!live.is_sample) await archive(live.items);
  return new Response("ok");
};

export const config = { schedule: "@hourly" };
