import type { BrandContent } from '@greyo-frontend/entities';

/* ==========================================================================
   GREYO 브랜드 소개 콘텐츠 — 정적 데이터소스.
   출처: 브랜딩소개서 v1(p1~p8), BRD v2.3(p3 문제 · p4 해법).
   재무·법무·리스크·로드맵 등 CONFIDENTIAL 섹션은 의도적으로 싣지 않는다.
   CMS/API 도입 시 이 파일이 원격 응답으로 대체된다.
   ========================================================================== */

export const STATIC_BRAND_CONTENT: BrandContent = {
  nav: [
    { id: 'essence', label: '브랜드' },
    { id: 'naming', label: '네이밍' },
    { id: 'positioning', label: '포지셔닝' },
    { id: 'problem', label: '문제·해법' },
    { id: 'service', label: '서비스' },
  ],

  hero: {
    eyebrow: 'Brand Identity',
    spaced: '그 래 요',
    tagline: { accent: '그래요,', rest: ' 그냥 그렇다고요.' },
    description:
      '먹고, 자고, 사는 일상의 모든 문제를 기술로 해결하는 어반 테크 라이프스타일 기업입니다.',
    scrollCue: 'SCROLL',
  },

  essence: {
    intro: {
      index: '01',
      eyebrow: 'Brand Essence',
      headingBefore: '한국인이 하루에 가장 많이 쓰는 말,\n그 위에 브랜드를 ',
      headingAccent: '세웁니다.',
      lead: '‘그래요’는 대화를 여는 말이자, 무언가를 시작하겠다는 긍정 의지의 언어입니다. 네이버·카카오·당근이 증명했듯 위대한 브랜드는 일상의 단어에서 태어납니다. GREYO는 검색창이 아니라, 사람들의 입에서 하루에도 수십 번 재생되는 브랜드입니다.',
    },
    pillars: [
      {
        label: 'EVERYDAY · 일상성',
        title: '매일, 누구나 쓰는 말',
        body: '배우지 않아도 이미 알고 있는 이름. 설명이 필요 없는 브랜드는 마케팅 비용의 절반을 언어가 대신합니다.',
      },
      {
        label: 'POSITIVE · 긍정성',
        title: '무엇을 붙여도 긍정이 되는 말',
        body: '“그래요, 해보자고요.” 어떤 문장 앞에 놓여도 승낙과 시작의 뉘앙스를 만드는, 본질적으로 긍정적인 단어입니다.',
      },
      {
        label: 'EXPANDABLE · 확장성',
        title: '어떤 서비스와도 어울리는 말',
        body: '그래요 홈서비스, 그래요 모빌리티, 그래요 헬스케어 — 카테고리를 가리지 않고 자연스럽게 결합됩니다.',
      },
    ],
    banner: {
      before: '직방·다방처럼 기능을 말하지 않습니다. ',
      accent: '카카오처럼 일상을 차지합니다.',
      tag: 'Daily-word Branding',
    },
    tones: [
      { mark: '그래요', punctuation: '.', title: '수긍', body: '담담한 신뢰의 톤' },
      { mark: '그래요', punctuation: '?', title: '호기심', body: '대화를 여는 톤' },
      { mark: '그래요', punctuation: '!', title: '의지', body: '시작을 선언하는 톤' },
      { mark: '그래요', punctuation: '…', title: '여운', body: '위로와 공감의 톤' },
    ],
  },

  namingStory: {
    intro: {
      index: '02',
      eyebrow: 'Naming Story',
      headingBefore: '이 이름은 한 번의 대화에서 ',
      headingAccent: '태어났습니다.',
      lead: '기억하기 쉽고, 발음이 좋고, 차분하면서 고급스러운 이름. 카카오의 13년 성장을 연구한 끝에 도달한 답은 가장 먼 곳이 아니라, 가장 가까운 일상의 말이었습니다.',
    },
    question: '“그러니까, 뭘 그렇다는 거냐고요?”',
    answer: '“그래요. 그냥, 그렇다고요.”',
    peers: [
      { name: '네이버', scope: '일상의 검색' },
      { name: '카카오', scope: '일상의 대화' },
      { name: '당근', scope: '일상의 동네' },
      { name: '그래요', scope: '일상의 삶, 그 전부', isBrand: true },
    ],
    criteria: [
      {
        label: 'Criteria 01',
        title: '부르기 쉬운 발음',
        body: 'GREYO — 해외에서도 그대로 통하는 사운드',
      },
      {
        label: 'Criteria 02',
        title: '한 번에 기억되는 이름',
        body: '배우지 않아도 이미 알고 있는 세 글자',
      },
      {
        label: 'Criteria 03',
        title: '무한한 확장성',
        body: '어떤 서비스명과 결합해도 자연스러운 구조',
      },
      {
        label: 'Criteria 04',
        title: '차분한 고급감',
        body: '기능을 외치지 않는, 절제된 브랜드 톤',
      },
    ],
  },

  positioning: {
    intro: {
      index: '03',
      eyebrow: 'Brand Positioning',
      headingBefore: '집을 파는 회사가 아니라, ',
      headingAccent: '삶을 해결하는 회사',
    },
    definitionLabel: 'Definition',
    definitionBefore: 'GREYO는 먹고, 자고, 사는 일상의 모든 문제를\n기술로 해결하는 ',
    definitionAccent: '어반 테크 라이프스타일 기업',
    definitionAfter: '입니다.',
    pillars: [
      {
        label: 'Mission',
        title: '일상의 문제를\n기술로 해결한다',
        body: '공간·서비스·디바이스를 하나의 앱으로 연결해, 살아가는 데 필요한 모든 것을 한곳에서 해결합니다.',
      },
      {
        label: 'Vision',
        title: '내 삶을 ',
        titleAccent: '디자인하다',
        body: '집은 소유하는 자산이 아니라 경험하는 라이프스타일. GREYO는 삶의 방식 그 자체를 설계합니다.',
        highlight: true,
      },
      {
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
  },

  problem: {
    intro: {
      index: '04',
      eyebrow: 'The Problem',
      headingBefore: '원룸은 ‘사는 곳’이 아니라 ',
      headingAccent: '‘자는 곳’',
      headingAfter: '이 됐습니다',
      lead: '1인가구의 주거 형태는 연립·다세대(38.4%)가 아파트(30.7%)를 추월했습니다. 그런데 이 시장의 상품은 20년째 같습니다 — 방 하나, 결핍 여섯.',
    },
    gaps: [
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
    stats: [
      { value: '804.5', unit: '만', caption: '국내 1인가구 · 전체 36.1%', emphasis: true },
      { value: '56.5', unit: '%', caption: '전월세 계약 중 월세 비중' },
      { value: '38.4', unit: '%', caption: '1인가구 연립·다세대 거주율' },
      { value: '90', unit: '%+', caption: '국내 코리빙 입주율 — 서비스 지불의사의 실증' },
    ],
    insightBefore:
      '여섯 결핍의 공통점 — 전부 ‘공간’의 문제이고, 전부 ‘가끔’만 필요합니다. 매일 쓰지 않는 공간을 소유(더 큰 집)로 풀면 비용이 되고, ',
    insightAccent: '구독으로 풀면 서비스가 됩니다.',
  },

  solution: {
    intro: {
      index: '05',
      eyebrow: 'The Solution',
      headingBefore: '집을 늘리지 말고, ',
      headingAccent: '필요할 때 빌려 씁니다',
      lead: '“집이라는 게 고정적인 게 아니라, 서비스로 확장될 수 있다” — 그래요의 출발점이 된 문장입니다. 결핍된 공간을 도보권 안에 짓고, 멤버십으로 연결합니다.',
    },
    roomLabel: 'My Room',
    roomTitle: '내 방 15m²',
    roomBody: '주거 임대차 계약',
    homeLabel: 'My Home',
    homeTitle: '건물 전체, 그리고 동네',
    homeBody: '필요한 공간을 멤버십으로 조립',
    swaps: [
      { from: '거실이 없다', title: '손님용 라운지 · 거실 렌트', body: '친구를 부를 수 있는 집' },
      { from: '욕조가 없다', title: '프리미엄 사우나 · 스파', body: '주 2회, 호텔급 욕실' },
      { from: '서재가 없다', title: '퍼블릭 오피스', body: '사업자 주소지 등록까지' },
      { from: '주방이 좁다', title: '프리미엄 공유 키친', body: '초대형 싱크·조리대 대여' },
      { from: '손님방이 없다', title: '게스트룸 · 손님용 거실', body: '부모님이 와도 걱정 없는' },
      { from: '마당이 없다', title: '루프탑 BBQ · 휴양시설', body: '해본 적 없는 라이프스타일' },
    ],
    principles: [
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
  },

  namingSystem: {
    intro: {
      index: '06',
      eyebrow: 'Naming System',
      headingBefore: '하나의 단어가 아니라, ',
      headingAccent: '하나의 어족(語族)',
      headingAfter: '입니다.',
      lead: '‘그래요’는 한국어 접속사 패밀리 전체를 브랜드 자산으로 만듭니다. 새 서비스가 태어날 때마다 이름을 고민할 필요가 없는, 무한히 확장되는 네이밍 시스템입니다.',
    },
    master: {
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
    branches: [
      {
        label: 'Membership',
        name: '그래서',
        roman: '-ER',
        body: '그래요와 함께 사는 사람들. 멤버십 회원과 테넌트를 부르는 호칭입니다.',
        listLabel: 'Usage',
        list: ['“그래서” 등급 · 리워드', '멤버 전용 커뮤니티'],
        tag: '멤버 호칭',
      },
      {
        label: 'Delivery · And',
        name: '그리고',
        roman: 'AND',
        body: '삶과 삶 사이를 잇는 배달·연결 서비스. ‘그리고’가 필요한 모든 순간에.',
        listLabel: 'Service',
        list: ['동네 배달 · 심부름', '이웃 간 물건 전달'],
        tag: '배달 서비스',
      },
      {
        label: 'Tech · If',
        name: '그러면',
        roman: 'IF',
        body: '‘만약’을 현실로 만드는 기술 조직. 개발 법인의 이름입니다.',
        listLabel: 'Entity',
        list: ['앱 · 플랫폼 개발', '홈 IoT 디바이스'],
        tag: '테크 법인',
      },
      {
        label: 'Casual Line',
        name: '그래그래',
        roman: 'OK OK',
        body: '가볍고 유희적인 라이트 서비스 라인. 게임·포인트·이벤트에 어울립니다.',
        listLabel: 'Line-up',
        list: ['캐주얼 미니 게임', '출석 · 포인트 적립'],
        tag: '서브 서비스',
      },
    ],
  },

  service: {
    intro: {
      index: '07',
      eyebrow: 'Service Architecture',
      headingBefore: '‘그래요’ 뒤에 무엇이 와도, ',
      headingAccent: '서비스가 됩니다.',
      lead: '하나의 앱, 하나의 멤버십 아래에서 주거를 중심으로 일상의 전 영역으로 확장하는 서비스 맵입니다.',
    },
    items: [
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
  },

  verbal: {
    intro: {
      index: '08',
      eyebrow: 'Verbal Identity',
      headingBefore: '힘을 뺀 말투가, ',
      headingAccent: '가장 오래 남습니다.',
    },
    principles: [
      {
        label: 'Principle 01',
        title: '차분하게 말합니다',
        body: '소리치지 않습니다. 낮은 톤의 담담한 말이 오히려 신뢰와 고급스러움을 만듭니다.',
        sample: { accent: '그래요.', rest: ' 저희가 할게요.' },
      },
      {
        label: 'Principle 02',
        title: '유희적으로 비틉니다',
        body: '‘하찮은 감성’의 여유. 느슨한 연대를 살아가는 세대의 화법으로 가볍게 웃게 만듭니다.',
        sample: { accent: '그래요?', rest: ' 그래그래.' },
      },
      {
        label: 'Principle 03',
        title: '긍정으로 끝맺습니다',
        body: '모든 문장은 결국 ‘그래요’로 수렴합니다. 승낙, 시작, 함께 살아가겠다는 의지로.',
        sample: { accent: '그래요,', rest: ' 해보자고요.' },
      },
    ],
    samplesLabel: 'Copy Samples',
    samples: [
      { accent: '그래요,', rest: ' 해보자고요.' },
      { prefix: '집 문제요? ', accent: '그래요,', rest: ' 저희가 할게요.' },
      { accent: '그래요…', rest: ' 오늘도 살아가 보겠다고요.' },
    ],
    samplesFootnote:
      '일상의 대사가 그대로 광고가 되는 언어 — 그것이 GREYO 버벌 아이덴티티의 힘입니다.',
  },

  closing: {
    eyebrow: 'Closing',
    headingLine1: '삶의 모든 질문에,',
    headingLine2: '우리는 이렇게 답합니다.',
    quote: '“그래요.”',
    subBefore: '그냥, 그렇다고요. — ',
    subStrong: '일상을 연결하는 어반 테크 기업, ',
    subAccent: '그래요.',
  },

  footer: {
    tagline: '일상을 연결하는 어반 테크 기업',
    copyright: '© 2026 GREYO. All rights reserved.',
  },
};
