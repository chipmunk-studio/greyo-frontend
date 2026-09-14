import type { BrandContent } from '@greyo-frontend/entities';

/* ==========================================================================
   GREYO 브랜드 콘텐츠 — 정적 데이터소스.
   출처: 브랜딩소개서 v1(p1~p8), BRD v2.3(p3 문제 · p4 해법).
   재무·법무·리스크·로드맵 등 CONFIDENTIAL 섹션은 의도적으로 싣지 않는다.

   `**…**` 는 강조 구간 표기다. 무슨 색으로 그릴지는 presentation 이 정한다.
   섹션 제목·eyebrow 같은 화면 서술은 여기 없다 — presentation 의 view data 소관.
   ========================================================================== */

export const STATIC_BRAND_CONTENT: BrandContent = {
  pillars: [
    {
      key: 'everyday',
      label: 'EVERYDAY · 일상성',
      title: '매일, 누구나 쓰는 말',
      body: '배우지 않아도 이미 알고 있는 이름. 설명이 필요 없는 브랜드는 마케팅 비용의 절반을 언어가 대신합니다.',
    },
    {
      key: 'positive',
      label: 'POSITIVE · 긍정성',
      title: '무엇을 붙여도 긍정이 되는 말',
      body: '“그래요, 해보자고요.” 어떤 문장 앞에 놓여도 승낙과 시작의 뉘앙스를 만드는, 본질적으로 긍정적인 단어입니다.',
    },
    {
      key: 'expandable',
      label: 'EXPANDABLE · 확장성',
      title: '어떤 서비스와도 어울리는 말',
      body: '그래요 홈서비스, 그래요 모빌리티, 그래요 헬스케어 — 카테고리를 가리지 않고 자연스럽게 결합됩니다.',
    },
  ],

  tones: [
    { mark: '그래요', punctuation: '.', title: '수긍', body: '담담한 신뢰의 톤' },
    { mark: '그래요', punctuation: '?', title: '호기심', body: '대화를 여는 톤' },
    { mark: '그래요', punctuation: '!', title: '의지', body: '시작을 선언하는 톤' },
    { mark: '그래요', punctuation: '…', title: '여운', body: '위로와 공감의 톤' },
  ],

  namingMaster: {
    key: 'greyo',
    label: 'Master Brand',
    name: '그래요',
    roman: 'GREYO',
    body: '모든 서비스를 품는 마스터 브랜드. 기업이자 플랫폼이며, 고객이 부르는 단 하나의 이름입니다.',
    listLabel: 'Positioning',
    list: [
      '일상을 연결하는 어반 테크 기업',
      '하나의 앱, 하나의 멤버십',
      '모든 서브 브랜드의 모(母)',
    ],
    tag: '기업 · 플랫폼',
  },

  namingBranches: [
    {
      key: 'geuraeseo',
      label: 'Membership',
      name: '그래서',
      roman: '-ER',
      body: '그래요와 함께 사는 사람들. 멤버십 회원과 테넌트를 부르는 호칭입니다.',
      listLabel: 'Usage',
      list: ['“그래서” 등급 · 리워드', '멤버 전용 커뮤니티'],
      tag: '멤버 호칭',
    },
    {
      key: 'geurigo',
      label: 'Delivery · And',
      name: '그리고',
      roman: 'AND',
      body: '삶과 삶 사이를 잇는 배달·연결 서비스. ‘그리고’가 필요한 모든 순간에.',
      listLabel: 'Service',
      list: ['동네 배달 · 심부름', '이웃 간 물건 전달'],
      tag: '배달 서비스',
    },
    {
      key: 'geureomyeon',
      label: 'Tech · If',
      name: '그러면',
      roman: 'IF',
      body: '‘만약’을 현실로 만드는 기술 조직. 개발 법인의 이름입니다.',
      listLabel: 'Entity',
      list: ['앱 · 플랫폼 개발', '홈 IoT 디바이스'],
      tag: '테크 법인',
    },
    {
      key: 'geuraegeurae',
      label: 'Casual Line',
      name: '그래그래',
      roman: 'OK OK',
      body: '가볍고 유희적인 라이트 서비스 라인. 게임·포인트·이벤트에 어울립니다.',
      listLabel: 'Line-up',
      list: ['캐주얼 미니 게임', '출석 · 포인트 적립'],
      tag: '서브 서비스',
    },
  ],

  definition:
    'GREYO는 먹고, 자고, 사는 일상의 모든 문제를\n기술로 해결하는 **어반 테크 라이프스타일 기업**입니다.',

  positioningPillars: [
    {
      key: 'mission',
      label: 'Mission',
      title: '일상의 문제를\n기술로 해결한다',
      body: '공간·서비스·디바이스를 하나의 앱으로 연결해, 살아가는 데 필요한 모든 것을 한곳에서 해결합니다.',
    },
    {
      key: 'vision',
      label: 'Vision',
      title: '내 삶을 **디자인하다**',
      body: '집은 소유하는 자산이 아니라 경험하는 라이프스타일. GREYO는 삶의 방식 그 자체를 설계합니다.',
    },
    {
      key: 'businessModel',
      label: 'Business Model',
      title: '소유가 아닌,\n구독',
      body: '주거·어메니티·홈서비스를 멤버십으로 구독하는 모델. 타운과 동네 단위로 라이프스타일을 제공합니다.',
    },
  ],

  expansion: [
    { title: '공간', body: '하나의 건물에서 시작' },
    { title: '타운', body: '단지 단위 멤버십' },
    { title: '동네', body: '생활권 전체를 연결' },
    { title: '도시', body: '라이프스타일 플랫폼' },
  ],

  housingGaps: [
    {
      num: '01',
      title: '거실이 없다',
      body: '손님을 부를 수 없다. 소파를 놓으면 침대와 붙는다. 친구는 늘 밖에서 만난다.',
    },
    {
      num: '02',
      title: '욕조가 없다',
      body: '샤워부스가 전부. ‘반신욕’은 다른 계층의 단어가 됐다.',
    },
    {
      num: '03',
      title: '서재가 없다',
      body: '침대가 곧 사무실. 재택·프리랜서에게 일과 삶의 분리는 불가능하다.',
    },
    {
      num: '04',
      title: '주방이 최소다',
      body: '1구 인덕션과 미니 싱크대. 요리 대신 배달이 기본값이 된다.',
    },
    {
      num: '05',
      title: '수납이 없다',
      body: '계절옷·캐리어 둘 곳이 없다. 공간이 삶의 크기를 제한한다.',
    },
    {
      num: '06',
      title: '커뮤니티가 없다',
      body: '옆집 이름도 모른다. 관리도, 소속감도 없는 건물에 ‘산다’.',
    },
  ],

  marketStats: [
    { key: 'households', value: '804.5', unit: '만', caption: '국내 1인가구 · 전체 36.1%' },
    { key: 'monthlyRent', value: '56.5', unit: '%', caption: '전월세 계약 중 월세 비중' },
    { key: 'lowRise', value: '38.4', unit: '%', caption: '1인가구 연립·다세대 거주율' },
    {
      key: 'coliving',
      value: '90',
      unit: '%+',
      caption: '국내 코리빙 입주율 — 서비스 지불의사의 실증',
    },
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
      num: '01',
      label: 'À la carte',
      title: '모듈형 조립',
      body: '필요한 것만, 쓰는 만큼만. 멤버십 전 항목 임의가입·즉시해지. 아무것도 안 사면 그냥 좋은 원룸입니다.',
    },
    {
      num: '02',
      label: 'Walkable cluster',
      title: '도보권 클러스터',
      body: '어메니티는 건물이 아니라 동네 단위로 설계합니다. 코어 허브 하나가 도보 5분 내 모든 세대를 커버합니다.',
    },
    {
      num: '03',
      label: 'Participation',
      title: '참여형 운영',
      body: '입주민이 관리에 참여하고 포인트로 보상받습니다. 관리비는 낮아지고, 커뮤니티는 생깁니다.',
    },
  ],

  services: [
    {
      num: '01',
      name: '홈서비스',
      roman: 'Home Service',
      body: '홈 제어·청소·수리까지, 집에 필요한 모든 손길',
      tag: '생활 관리',
    },
    {
      num: '02',
      name: '공구 마켓',
      roman: 'Group Market',
      body: '이웃과 함께 사면 저렴해지는 공동구매 마켓',
      tag: '커머스',
    },
    {
      num: '03',
      name: '이사',
      roman: 'Moving',
      body: '계약부터 입주까지, 이동의 모든 과정을 한 번에',
      tag: '주거 이동',
    },
    {
      num: '04',
      name: '모빌리티',
      roman: 'Mobility',
      body: '동네 안의 이동을 연결하는 생활 모빌리티',
      tag: '이동',
    },
    {
      num: '05',
      name: '헬스케어',
      roman: 'Healthcare',
      body: '일상 데이터로 관리하는 나와 가족의 건강',
      tag: '건강',
    },
    {
      num: '06',
      name: '인베스트먼트',
      roman: 'Investment',
      body: '주거와 자산을 잇는 생활 밀착 금융',
      tag: '금융',
    },
    {
      num: '07',
      name: '식음',
      roman: 'F&B',
      body: '먹는 일상을 책임지는 F&B 큐레이션',
      tag: '푸드',
    },
    {
      num: '08',
      name: '엔터테인먼트',
      roman: 'Entertainment',
      body: '노는 시간까지 설계하는 콘텐츠와 커뮤니티',
      tag: '여가',
    },
  ],
};
