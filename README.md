# 미국 증시 한눈에 — Netlify 배포판

Flask 서버 대신 **정적 페이지(public/) + Netlify Function(/api/news)** 구조입니다. 서버 관리가 필요 없습니다.

## 배포 방법 A: GitHub 연결 (추천, 이후 push할 때마다 자동 배포)
1. 이 폴더를 GitHub 저장소에 올립니다.
2. app.netlify.com → **Add new site → Import an existing project** → 저장소 선택.
3. 설정은 `netlify.toml`을 자동 인식합니다 (Build command 비워두기, Publish directory = `public`). **Deploy**.
4. `https://<이름>.netlify.app` 접속. 데이터 확인: `/api/news`.

## 배포 방법 B: CLI
```
npm i -g netlify-cli
netlify login
netlify deploy --prod
```
(폴더를 끌어다 놓는 Drop 방식은 Function이 빠질 수 있어 권장하지 않습니다.)

## 로컬 테스트
```
netlify dev      # http://localhost:8888
```

## 구조
- `public/index.html` — 화면
- `netlify/functions/lib.mjs` — RSS 수집·분류·영향 분석·날짜별 보관 로직
- `netlify/functions/news.mjs`, `calendar.mjs` — API / `collect.mjs` — 매시간 수집
- `netlify/functions/data.mjs` — 언론사 목록, 키워드 규칙, 샘플 기사 (여기서 RSS 주소·규칙 수정)

## 날짜별 뉴스 / 달력 (📅 탭)
- 수집한 기사는 **발행일(한국시간)별로 Netlify Blobs에 저장**됩니다. 사이트 접속 시, 그리고 `collect.mjs`가 **매시간 자동으로** 쌓습니다.
- `GET /api/calendar?month=2026-11` → 날짜별 기사 수·호재/악재 건수, `GET /api/news?date=2026-11-01` → 그날 뉴스.
- **저장은 배포 이후부터** 쌓입니다. 과거 날짜는 RSS로 되돌려 가져올 수 없어요(RSS는 최근 기사만 제공).
- Blobs와 예약 실행(Scheduled Functions)은 Netlify 배포 환경에서 동작하며, 로컬 `netlify dev`에서도 Blobs는 로컬 저장소로 동작합니다. 예약 실행은 production 배포에서만 돕니다.
- 샘플 모드(RSS 수집 실패)일 때는 저장하지 않습니다.

## 알아둘 점
- 결과는 Netlify CDN이 5분 캐시합니다. 갱신 주기를 바꾸려면 `news.mjs`의 `s-maxage=300`을 수정하세요.
- 함수 실행 제한은 기본 10초라, 언론사별 대기를 5초로 제한하고 병렬 수집합니다. 응답이 늦은 언론사는 건너뜁니다.
- 수집 기사가 5건 미만이면 샘플 데이터로 전환되고 화면에 경고가 뜹니다. 실패한 언론사는 `/api/news`의 `failed`에서 확인하세요.
- 무료 플랜에는 월 함수 호출 한도가 있지만, CDN 캐시 덕분에 일반적인 트래픽에서는 여유가 큽니다.
- 헤드라인 공개 서비스는 각 언론사 이용약관을 확인하세요.
