// 자동 생성된 설정/샘플 데이터 (언론사·키워드 규칙·샘플 기사)
export default {
 "SOURCES": {
  "bloomberg": {
   "name": "Bloomberg",
   "url": "https://feeds.bloomberg.com/markets/news.rss",
   "speed": 9.9,
   "region": "us",
   "flag": "🇺🇸"
  },
  "wsj": {
   "name": "WSJ",
   "url": "https://feeds.content.dowjones.io/public/rss/RSSMarketsMain",
   "speed": 9.3,
   "region": "us",
   "flag": "🇺🇸"
  },
  "cnbc": {
   "name": "CNBC",
   "url": "https://www.cnbc.com/id/100003114/device/rss/rss.html",
   "speed": 9.5,
   "region": "us",
   "flag": "🇺🇸"
  },
  "marketwatch": {
   "name": "MarketWatch",
   "url": "https://feeds.content.dowjones.io/public/rss/mw_topstories",
   "speed": 9.4,
   "region": "us",
   "flag": "🇺🇸"
  },
  "yahoo": {
   "name": "Yahoo Finance",
   "url": "https://finance.yahoo.com/news/rssindex",
   "speed": 9.0,
   "region": "us",
   "flag": "🇺🇸"
  },
  "seekingalpha": {
   "name": "Seeking Alpha",
   "url": "https://seekingalpha.com/market_currents.xml",
   "speed": 9.0,
   "region": "us",
   "flag": "🇺🇸"
  },
  "reuters": {
   "name": "Reuters",
   "url": "",
   "speed": 9.8,
   "region": "us",
   "flag": "🇺🇸"
  },
  "cna": {
   "name": "CNA 아시아",
   "url": "https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6511",
   "speed": null,
   "region": "asia",
   "flag": "🇸🇬"
  },
  "chinadaily": {
   "name": "China Daily 중국",
   "url": "https://www.chinadaily.com.cn/rss/business_rss.xml",
   "speed": null,
   "region": "asia",
   "flag": "🇨🇳"
  },
  "scmp": {
   "name": "SCMP 홍콩",
   "url": "https://www.scmp.com/rss/92/feed",
   "speed": null,
   "region": "asia",
   "flag": "🇭🇰"
  },
  "nikkei": {
   "name": "Nikkei Asia 일본",
   "url": "https://asia.nikkei.com/rss/feed/nar",
   "speed": null,
   "region": "asia",
   "flag": "🇯🇵"
  },
  "bbc": {
   "name": "BBC 영국",
   "url": "https://feeds.bbci.co.uk/news/business/rss.xml",
   "speed": null,
   "region": "eu",
   "flag": "🇬🇧"
  },
  "france24": {
   "name": "France 24 프랑스",
   "url": "https://www.france24.com/en/business/rss",
   "speed": null,
   "region": "eu",
   "flag": "🇫🇷"
  },
  "dw": {
   "name": "DW 독일",
   "url": "https://rss.dw.com/xml/rss-en-bus",
   "speed": null,
   "region": "eu",
   "flag": "🇩🇪"
  },
  "elpais": {
   "name": "El País 스페인",
   "url": "https://feeds.elpais.com/mrss-s/pages/ep/site/english.elpais.com/portada",
   "speed": null,
   "region": "eu",
   "flag": "🇪🇸"
  },
  "ansa": {
   "name": "ANSA 이탈리아",
   "url": "https://www.ansa.it/english/news/english_nr_rss.xml",
   "speed": null,
   "region": "eu",
   "flag": "🇮🇹"
  },
  "arabnews": {
   "name": "Arab News 사우디",
   "url": "https://www.arabnews.com/rss.xml",
   "speed": null,
   "region": "me",
   "flag": "🇸🇦"
  },
  "aljazeera": {
   "name": "Al Jazeera 카타르",
   "url": "https://www.aljazeera.com/xml/rss/all.xml",
   "speed": null,
   "region": "me",
   "flag": "🇶🇦"
  },
  "thenational": {
   "name": "The National UAE",
   "url": "https://www.thenationalnews.com/arc/outboundfeeds/rss/category/business/?outputType=xml",
   "speed": null,
   "region": "me",
   "flag": "🇦🇪"
  }
 },
 "THEMES": {
  "AI·반도체": "\\bai\\b|nvidia|chip|semiconductor|amd|openai|data ?center|gpu|tsmc",
  "연준·금리": "\\bfed\\b|federal reserve|rate (cut|hike)|fomc|powell|inflation|cpi|pce|treasury|yield",
  "실적": "earnings|revenue|guidance|profit|eps|quarter|forecast",
  "에너지·원자재": "oil|crude|opec|gas|lng|aramco|adnoc|gold|copper|commodit",
  "지정학·무역": "tariff|china|sanction|war|trade|geopolit|russia|middle east",
  "전기차·모빌리티": "tesla|\\bev\\b|electric vehicle|robotaxi|autonomous|ford|gm\\b",
  "금융·은행": "bank|jpmorgan|goldman|credit|loan|lender",
  "바이오·헬스": "pharma|drug|fda|biotech|health|vaccine"
 },
 "ACTORS": {
  "연준(Fed)": "\\bfed\\b|federal reserve|powell|fomc",
  "미 정부·정책": "white house|trump|congress|treasury dept|tariff|regulator|sec\\b|ftc|doj",
  "빅테크·기업": "apple|microsoft|nvidia|amazon|google|alphabet|meta\\b|tesla|amd|earnings",
  "월가 기관·애널": "analyst|upgrade|downgrade|price target|goldman|morgan stanley|jpmorgan|hedge fund",
  "해외 중앙은행": "ecb|boj|bank of japan|bank of england|bundesbank|pboc|bank of korea|central bank",
  "중국·지정학": "china|beijing|hong kong|hang seng|yuan|taiwan|russia|ukraine|middle east|gaza|iran|sanction",
  "원유·원자재": "oil|crude|opec|gold|copper|aramco|adnoc|lng",
  "개인·ETF 자금": "retail investor|etf|fund flow|inflow|outflow|options"
 },
 "BULL": "surge|rally|beat|record|raise|upgrade|jump|gain|soar|approve|cut rates|rate cut|strong|rebound|top",
 "BEAR": "fall|plunge|miss|downgrade|slump|drop|warn|probe|lawsuit|ban|tariff|recession|cut forecast|weak|selloff|sink|fear",
 "TICKERS": "\\b(NVDA|AAPL|MSFT|TSLA|AMZN|GOOGL?|META|AMD|JPM|XOM|INTC|AVGO)\\b",
 "NAMES": {
  "nvidia": "NVDA",
  "apple": "AAPL",
  "microsoft": "MSFT",
  "tesla": "TSLA",
  "amazon": "AMZN",
  "alphabet": "GOOGL",
  "google": "GOOGL",
  "meta": "META",
  "amd": "AMD",
  "jpmorgan": "JPM",
  "exxon": "XOM",
  "intel": "INTC",
  "broadcom": "AVGO"
 },
 "SAMPLES": [
  {
   "source": "bloomberg",
   "ticker": "NVDA",
   "theme": "AI·반도체",
   "sentiment": "Bullish",
   "impact": 9.6,
   "actors": [
    "빅테크·기업",
    "월가 기관·애널"
   ],
   "title_en": "Chipmaker raises data-center outlook on surging AI GPU orders",
   "title_ko": "AI 칩 업체, GPU 주문 급증에 데이터센터 전망 상향",
   "why": "AI 인프라 투자 지속 기대 → 반도체·전력주 동반 강세 요인"
  },
  {
   "source": "bloomberg",
   "ticker": "MACRO",
   "theme": "연준·금리",
   "sentiment": "Bullish",
   "impact": 9.0,
   "actors": [
    "연준(Fed)",
    "원유·원자재"
   ],
   "title_en": "Treasury yields slip as traders price deeper rate cuts",
   "title_ko": "금리 인하 폭 확대 베팅에 美 국채금리 하락",
   "why": "성장주·소형주 밸류에이션 부담 완화"
  },
  {
   "source": "reuters",
   "ticker": "AAPL",
   "theme": "AI·반도체",
   "sentiment": "Neutral",
   "impact": 7.4,
   "actors": [
    "빅테크·기업",
    "중국·지정학"
   ],
   "title_en": "Apple suppliers expand output in India and Southeast Asia",
   "title_ko": "애플 협력사, 인도·동남아 생산 확대",
   "why": "공급망 다변화는 중장기 호재, 단기 비용 부담"
  },
  {
   "source": "reuters",
   "ticker": "MACRO",
   "theme": "지정학·무역",
   "sentiment": "Bearish",
   "impact": 8.3,
   "actors": [
    "미 정부·정책",
    "중국·지정학"
   ],
   "title_en": "New tariff threat on imports rattles global supply chains",
   "title_ko": "신규 관세 위협에 글로벌 공급망 불안",
   "why": "수입 의존 소비재·제조업 마진 압박, 변동성 확대"
  },
  {
   "source": "wsj",
   "ticker": "MACRO",
   "theme": "연준·금리",
   "sentiment": "Neutral",
   "impact": 8.8,
   "actors": [
    "연준(Fed)"
   ],
   "title_en": "Fed officials split over pace of further easing",
   "title_ko": "연준 인사들, 추가 완화 속도 놓고 의견 갈려",
   "why": "금리 경로 불확실성 → 지수 횡보 가능"
  },
  {
   "source": "wsj",
   "ticker": "JPM",
   "theme": "금융·은행",
   "sentiment": "Bullish",
   "impact": 7.6,
   "actors": [
    "월가 기관·애널",
    "개인·ETF 자금"
   ],
   "title_en": "Big banks report stronger trading and lending income",
   "title_ko": "대형은행, 트레이딩·대출 수익 개선",
   "why": "금융 섹터 순환매 유입 요인"
  },
  {
   "source": "cnbc",
   "ticker": "TSLA",
   "theme": "전기차·모빌리티",
   "sentiment": "Bullish",
   "impact": 8.7,
   "actors": [
    "미 정부·정책",
    "빅테크·기업"
   ],
   "title_en": "Robotaxi pilot gets regulatory green light, shares jump",
   "title_ko": "로보택시 시범운행 허가, 주가 급등",
   "why": "자율주행 모멘텀, 단 규제 변수 상존"
  },
  {
   "source": "cnbc",
   "ticker": "XOM",
   "theme": "에너지·원자재",
   "sentiment": "Bearish",
   "impact": 7.9,
   "actors": [
    "원유·원자재",
    "해외 중앙은행"
   ],
   "title_en": "Oil slumps as demand worries and supply outlook weigh",
   "title_ko": "수요 우려·공급 전망에 유가 급락",
   "why": "에너지주 약세, 인플레 압력 완화로 금리엔 호재"
  },
  {
   "source": "marketwatch",
   "ticker": "AMZN",
   "theme": "실적",
   "sentiment": "Bullish",
   "impact": 8.1,
   "actors": [
    "빅테크·기업",
    "월가 기관·애널"
   ],
   "title_en": "AWS growth tops estimates on enterprise AI workloads",
   "title_ko": "AWS 성장률 예상 상회, 기업 AI 수요",
   "why": "클라우드 3사 동반 상향 기대"
  },
  {
   "source": "marketwatch",
   "ticker": "MARKET",
   "theme": "실적",
   "sentiment": "Bearish",
   "impact": 7.2,
   "actors": [
    "빅테크·기업",
    "개인·ETF 자금"
   ],
   "title_en": "Retailers warn on holiday demand as consumers pull back",
   "title_ko": "소매업체, 연말 수요 둔화 경고",
   "why": "소비 둔화 우려 → 경기민감 소비재 하락"
  },
  {
   "source": "yahoo",
   "ticker": "MSFT",
   "theme": "AI·반도체",
   "sentiment": "Bullish",
   "impact": 8.0,
   "actors": [
    "빅테크·기업"
   ],
   "title_en": "Microsoft expands AI datacenter capacity with new partners",
   "title_ko": "MS, 신규 파트너와 AI 데이터센터 증설",
   "why": "Azure 성장 가속 기대"
  },
  {
   "source": "yahoo",
   "ticker": "META",
   "theme": "바이오·헬스",
   "sentiment": "Neutral",
   "impact": 5.8,
   "actors": [
    "미 정부·정책"
   ],
   "title_en": "Regulators open review of drug pricing proposals",
   "title_ko": "규제당국, 약가 정책안 검토 착수",
   "why": "제약·바이오 정책 불확실성"
  },
  {
   "source": "seekingalpha",
   "ticker": "AMD",
   "theme": "AI·반도체",
   "sentiment": "Bullish",
   "impact": 8.2,
   "actors": [
    "월가 기관·애널"
   ],
   "title_en": "AMD accelerator benchmarks beat expectations in tests",
   "title_ko": "AMD 가속기, 벤치마크서 기대치 상회",
   "why": "엔비디아 독점 완화 기대"
  },
  {
   "source": "seekingalpha",
   "ticker": "INTC",
   "theme": "AI·반도체",
   "sentiment": "Bearish",
   "impact": 7.0,
   "actors": [
    "월가 기관·애널"
   ],
   "title_en": "Analyst downgrades chipmaker on weak foundry outlook",
   "title_ko": "애널리스트, 파운드리 부진에 투자의견 하향",
   "why": "반도체 내 종목 차별화 심화"
  },
  {
   "source": "reuters",
   "ticker": "MARKET",
   "theme": "지정학·무역",
   "sentiment": "Bearish",
   "impact": 8.0,
   "actors": [
    "중국·지정학",
    "원유·원자재"
   ],
   "title_en": "Middle East tensions lift safe-haven demand, stocks slip",
   "title_ko": "중동 긴장에 안전자산 선호, 증시 약세",
   "why": "방산·금·달러 강세, 위험자산 약세"
  },
  {
   "source": "wsj",
   "ticker": "MARKET",
   "theme": "연준·금리",
   "sentiment": "Bullish",
   "impact": 7.5,
   "actors": [
    "해외 중앙은행",
    "개인·ETF 자금"
   ],
   "title_en": "Global central banks signal easing; equity ETFs see inflows",
   "title_ko": "주요 중앙은행 완화 시그널, 주식 ETF 자금 유입",
   "why": "글로벌 유동성 개선 기대"
  },
  {
   "source": "cna",
   "ticker": "STI",
   "theme": "지정학·무역",
   "sentiment": "Neutral",
   "impact": 6.5,
   "actors": [
    "해외 중앙은행"
   ],
   "title_en": "Asian markets mixed as investors await regional central bank signals",
   "title_ko": "아시아 증시, 지역 중앙은행 신호 앞두고 혼조",
   "why": "금리 경로 확인 전까지 관망세"
  },
  {
   "source": "chinadaily",
   "ticker": "SHCOMP",
   "theme": "지정학·무역",
   "sentiment": "Bullish",
   "impact": 7.3,
   "actors": [
    "중국·지정학",
    "미 정부·정책"
   ],
   "title_en": "Stimulus hopes lift China consumer and tech shares",
   "title_ko": "경기부양 기대에 중국 소비·기술주 강세",
   "why": "중국 노출 큰 미 기업(애플·테슬라)에 간접 호재"
  },
  {
   "source": "scmp",
   "ticker": "HSI",
   "theme": "금융·은행",
   "sentiment": "Bearish",
   "impact": 7.1,
   "actors": [
    "중국·지정학",
    "개인·ETF 자금"
   ],
   "title_en": "Hong Kong stocks slip on property-sector worries",
   "title_ko": "홍콩 증시, 부동산 업황 우려에 하락",
   "why": "중화권 위험 회피 → 아시아 신흥국 변동성 확대"
  },
  {
   "source": "nikkei",
   "ticker": "N225",
   "theme": "AI·반도체",
   "sentiment": "Bullish",
   "impact": 7.8,
   "actors": [
    "월가 기관·애널",
    "해외 중앙은행"
   ],
   "title_en": "Japan chip-equipment makers rally on strong AI demand",
   "title_ko": "일본 반도체 장비주, AI 수요에 강세",
   "why": "AI 반도체 공급망 전반 호재"
  },
  {
   "source": "bbc",
   "ticker": "FTSE",
   "theme": "연준·금리",
   "sentiment": "Neutral",
   "impact": 6.8,
   "actors": [
    "해외 중앙은행"
   ],
   "title_en": "UK inflation steadies, easing path stays uncertain",
   "title_ko": "영국 물가 안정세, 완화 경로는 불확실",
   "why": "유럽 금리 기대 변화는 달러·미 국채에 영향"
  },
  {
   "source": "france24",
   "ticker": "CAC",
   "theme": "실적",
   "sentiment": "Bullish",
   "impact": 6.9,
   "actors": [
    "빅테크·기업"
   ],
   "title_en": "French luxury and aerospace names post solid results",
   "title_ko": "프랑스 명품·항공우주 기업 견조한 실적",
   "why": "유럽 소비·산업 회복 신호"
  },
  {
   "source": "dw",
   "ticker": "DAX",
   "theme": "에너지·원자재",
   "sentiment": "Bearish",
   "impact": 7.4,
   "actors": [
    "원유·원자재",
    "해외 중앙은행"
   ],
   "title_en": "German industry warns on energy costs and weak orders",
   "title_ko": "독일 산업계, 에너지 비용·수주 부진 경고",
   "why": "유럽 제조업 둔화 → 글로벌 경기 우려"
  },
  {
   "source": "elpais",
   "ticker": "IBEX",
   "theme": "금융·은행",
   "sentiment": "Bullish",
   "impact": 6.4,
   "actors": [
    "월가 기관·애널"
   ],
   "title_en": "Spanish banks lead gains on higher lending margins",
   "title_ko": "스페인 은행주, 대출 마진 개선에 상승",
   "why": "유럽 금융 섹터 강세 흐름"
  },
  {
   "source": "ansa",
   "ticker": "FTSEMIB",
   "theme": "금융·은행",
   "sentiment": "Neutral",
   "impact": 6.0,
   "actors": [
    "해외 중앙은행",
    "미 정부·정책"
   ],
   "title_en": "Italy markets steady ahead of budget and ECB commentary",
   "title_ko": "이탈리아 증시, 예산안·ECB 발언 앞두고 보합",
   "why": "국채 스프레드가 변수"
  },
  {
   "source": "arabnews",
   "ticker": "TASI",
   "theme": "에너지·원자재",
   "sentiment": "Bearish",
   "impact": 7.7,
   "actors": [
    "원유·원자재"
   ],
   "title_en": "Saudi market eases as crude prices soften",
   "title_ko": "사우디 증시, 유가 약세에 하락",
   "why": "산유국 재정·에너지주 약세, 인플레엔 호재"
  },
  {
   "source": "aljazeera",
   "ticker": "QE",
   "theme": "에너지·원자재",
   "sentiment": "Bullish",
   "impact": 7.2,
   "actors": [
    "원유·원자재",
    "개인·ETF 자금"
   ],
   "title_en": "Qatar LNG demand outlook supports regional equities",
   "title_ko": "카타르 LNG 수요 전망, 지역 증시 지지",
   "why": "LNG 가격 상승은 글로벌 에너지 비용 요인"
  },
  {
   "source": "thenational",
   "ticker": "ADX",
   "theme": "지정학·무역",
   "sentiment": "Neutral",
   "impact": 6.6,
   "actors": [
    "중국·지정학",
    "원유·원자재"
   ],
   "title_en": "Gulf markets watch regional tensions and oil prices",
   "title_ko": "걸프 증시, 지정학 긴장과 유가 주시",
   "why": "중동 리스크는 유가·안전자산 수요로 전이"
  }
 ]
};
