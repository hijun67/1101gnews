// 30분마다 자동 실행: 접속자가 없어도 뉴스를 수집해 날짜별로 쌓아 둡니다. (배포된 production 사이트에서만 동작)
import { fetchLive, archive, translate } from "./lib.mjs";

export default async () => {
  const live = await fetchLive();
  if (!live.is_sample) {
    await translate(live.items, { ms: 22000, max: 200 });   // 여유 시간이 있는 예약 실행에서 밀린 번역을 모두 처리
    await archive(live.items);
  }
  return new Response("ok");
};

export const config = { schedule: "*/30 * * * *" };
