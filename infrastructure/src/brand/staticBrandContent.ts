import type { BrandContent } from '@greyo-frontend/entities';

/* ==========================================================================
   GREYO 브랜드 콘텐츠 — 정적 데이터소스.
   출처: 브랜딩소개서 v1(p1~p8), BRD v2.3(p3 문제 · p4 해법).
   재무·법무·리스크·로드맵 등 CONFIDENTIAL 섹션은 의도적으로 싣지 않는다.

   `**…**` 는 강조 구간 표기다. 무슨 색으로 그릴지는 presentation 이 정한다.
   섹션 제목·eyebrow 같은 화면 서술은 여기 없다 — presentation 의 view data 소관.
   ========================================================================== */

export const STATIC_BRAND_CONTENT: BrandContent = {
  amenities: [
    {
      key: 'lounge',
      name: '라운지 바',
      body: '집에 없던 거실. 커피 주 3잔 포함, 친구를 부를 수 있는 공간.',
      monthlyFee: 3800,
    },
    {
      key: 'fitness',
      name: '피트니스',
      body: '따로 끊지 않아도 되는 동네 안 헬스장.',
      monthlyFee: 18000,
    },
    {
      key: 'sauna',
      name: '사우나 · 욕조',
      body: '주 2회, 호텔급 욕실. 원룸이 포기했던 반신욕.',
      monthlyFee: 32000,
    },
    {
      key: 'office',
      name: '퍼블릭 오피스',
      body: '주 2회·월 10회. 침대가 사무실이 되지 않게.',
      monthlyFee: 58000,
    },
    {
      key: 'businessAddress',
      name: '사업자 주소지 · 우편물',
      body: '퍼블릭 오피스에 더해 사업자 등록까지.',
      monthlyFee: 15000,
    },
    {
      key: 'kitchen',
      name: '프리미엄 공유 키친',
      body: '초대형 싱크와 조리대. 배달이 기본값이 아니게.',
      monthlyFee: null,
      feeNote: '회당 · 월정액',
    },
    {
      key: 'guestLiving',
      name: '손님용 거실 렌트',
      body: '월 1회, 집을 넓혀 쓰는 날.',
      monthlyFee: 8000,
    },
    {
      key: 'guestRoom',
      name: '게스트룸 숙박권',
      body: '부모님이 오셔도 걱정 없는 방.',
      monthlyFee: null,
      feeNote: '75,000원/회',
    },
    {
      key: 'rooftop',
      name: '루프탑 BBQ',
      body: '해본 적 없는 라이프스타일.',
      monthlyFee: null,
      feeNote: '회당 과금',
    },
    {
      key: 'resort',
      name: '바닷가 휴양시설',
      body: '연 5회, 멤버라면 그냥 쓰는 곳.',
      monthlyFee: null,
      feeNote: '기본 포함',
    },
  ],

  rentalModules: [
    { key: 'sofa', name: '소파', monthlyFee: 8500 },
    { key: 'bed', name: '전동 베드', monthlyFee: 7000 },
    { key: 'purifier', name: '정수기', monthlyFee: 5000 },
  ],

  membershipPlans: [
    {
      key: 'minimal',
      label: '아무것도 쓰지 않으면',
      monthlyFee: 0,
      title: '그냥 좋은 원룸',
      body: '멤버십 0원으로도 거주할 수 있습니다. 강제 항목이 하나도 없다는 것이 상품의 전제입니다.',
      includes: ['주거 임대차만', '보증금 최소화'],
    },
    {
      key: 'standard',
      label: '가장 많이 고르는 조합',
      monthlyFee: 21800,
      title: '헬스장 하나 가격에 거실과 카페까지',
      body: '라운지와 피트니스만 더해도 집 밖에 거실 하나, 운동 공간 하나가 생깁니다.',
      includes: ['라운지 바', '피트니스'],
    },
    {
      key: 'full',
      label: '재택·프리랜서라면',
      monthlyFee: 108800,
      title: '사무실 임차료의 1/5로 일·삶·휴식을 전부',
      body: '오피스와 사업자 주소지까지 묶으면 별도 사무실을 얻을 이유가 없어집니다.',
      includes: ['라운지 바', '퍼블릭 오피스', '사업자 주소지', '사우나 · 욕조'],
    },
  ],

  vision: {
    title: '내 삶을 **디자인하다**',
    body: '집은 소유하는 자산이 아니라 경험하는 라이프스타일입니다. 그래요는 삶의 방식 그 자체를 설계합니다.',
  },

  expansion: [
    { title: '공간', body: '하나의 건물에서 시작' },
    { title: '타운', body: '단지 단위 멤버십' },
    { title: '동네', body: '생활권 전체를 연결' },
    { title: '도시', body: '라이프스타일 플랫폼' },
  ],

  housingGaps: [
    {
      key: 'livingRoom',
      title: '거실이 없다',
      body: '손님을 부를 수 없다. 소파를 놓으면 침대와 붙는다. 친구는 늘 밖에서 만난다.',
    },
    {
      key: 'bathtub',
      title: '욕조가 없다',
      body: '샤워부스가 전부. ‘반신욕’은 다른 계층의 단어가 됐다.',
    },
    {
      key: 'study',
      title: '서재가 없다',
      body: '침대가 곧 사무실. 재택·프리랜서에게 일과 삶의 분리는 불가능하다.',
    },
    {
      key: 'kitchen',
      title: '주방이 최소다',
      body: '1구 인덕션과 미니 싱크대. 요리 대신 배달이 기본값이 된다.',
    },
    {
      key: 'storage',
      title: '수납이 없다',
      body: '계절옷·캐리어 둘 곳이 없다. 공간이 삶의 크기를 제한한다.',
    },
    {
      key: 'community',
      title: '커뮤니티가 없다',
      body: '옆집 이름도 모른다. 관리도, 소속감도 없는 건물에 ‘산다’.',
    },
  ],

  marketStats: [
    { key: 'households', value: '804.5', unit: '만', caption: '국내 1인가구 · 전체 36.1%' },
    { key: 'monthlyRent', value: '56.5', unit: '%', caption: '전월세 계약 중 월세 비중' },
    { key: 'lowRise', value: '38.4', unit: '%', caption: '1인가구 연립·다세대 거주율' },
  ],

  livingScopes: [
    { key: 'room', label: 'My Room', title: '내 방 15m²', body: '주거 임대차 계약' },
    {
      key: 'home',
      label: 'My Home',
      title: '건물 전체, 그리고 동네',
      body: '필요한 공간을 멤버십으로 조립',
    },
  ],

  amenitySwaps: [
    { from: '거실이 없다', title: '손님용 라운지 · 거실 렌트', body: '친구를 부를 수 있는 집' },
    { from: '욕조가 없다', title: '프리미엄 사우나 · 스파', body: '주 2회, 호텔급 욕실' },
    { from: '서재가 없다', title: '퍼블릭 오피스', body: '사업자 주소지 등록까지' },
    { from: '주방이 좁다', title: '프리미엄 공유 키친', body: '초대형 싱크·조리대 대여' },
    { from: '손님방이 없다', title: '게스트룸 · 손님용 거실', body: '부모님이 와도 걱정 없는' },
    { from: '마당이 없다', title: '루프탑 BBQ · 휴양시설', body: '해본 적 없는 라이프스타일' },
  ],

  solutionPrinciples: [
    {
      key: 'alaCarte',
      title: '필요한 것만, 쓰는 만큼만',
      body: '멤버십은 전 항목 임의가입·즉시해지입니다. 아무것도 쓰지 않으면 그냥 좋은 원룸입니다.',
    },
    {
      key: 'walkableCluster',
      title: '건물이 아니라 동네 단위로',
      body: '어메니티는 코어 허브 하나가 도보 5분 내 모든 세대를 커버하도록 설계합니다.',
    },
    {
      key: 'participation',
      title: '입주민이 운영에 참여합니다',
      body: '관리에 참여하면 포인트로 보상받습니다. 관리비는 낮아지고, 커뮤니티는 생깁니다.',
    },
  ],

  services: [
    { key: 'homeService', name: '홈서비스', body: '홈 제어·청소·수리까지, 집에 필요한 모든 손길' },
    { key: 'groupMarket', name: '공구 마켓', body: '이웃과 함께 사면 저렴해지는 공동구매 마켓' },
    { key: 'moving', name: '이사', body: '계약부터 입주까지, 이동의 모든 과정을 한 번에' },
    { key: 'mobility', name: '모빌리티', body: '동네 안의 이동을 연결하는 생활 모빌리티' },
    { key: 'healthcare', name: '헬스케어', body: '일상 데이터로 관리하는 나와 가족의 건강' },
    { key: 'investment', name: '인베스트먼트', body: '주거와 자산을 잇는 생활 밀착 금융' },
    { key: 'fnb', name: '식음', body: '먹는 일상을 책임지는 F&B 큐레이션' },
    {
      key: 'entertainment',
      name: '엔터테인먼트',
      body: '노는 시간까지 설계하는 콘텐츠와 커뮤니티',
    },
  ],
};
