/* ==========================================================================
   기업 페이지의 '서술' 카피.

   콘텐츠(무엇을 말하는가)는 entities·infrastructure 가 갖고, 여기에는 그 콘텐츠를
   페이지가 어떻게 감싸 보여주는가 — eyebrow, 섹션 헤드라인, 리드, 라벨, CTA — 만 둔다.

   원본 소개 자료는 슬라이드 덱이지만 이 사이트는 덱이 아니다. 섹션 번호·심사 기준·
   내부 가이드처럼 덱에서만 의미 있는 장치는 싣지 않는다.

   `**…**` 는 강조 구간 표기, `\n` 은 줄바꿈이다.
   ========================================================================== */

export const NAV_COPY = [
  { id: 'business', label: '사업' },
  { id: 'services', label: '서비스' },
  { id: 'brand', label: '브랜드' },
  { id: 'vision', label: '비전' },
] as const;

export const HEADER_CTA = { label: '문의하기', href: '#contact' } as const;

export const HERO_COPY = {
  eyebrow: 'Urban Tech Lifestyle',
  heading: '집 문제요?\n**그래요, 저희가 할게요.**',
  lead: '먹고, 자고, 사는 일상의 모든 문제를 기술로 해결합니다.\n하나의 앱, 하나의 멤버십으로 공간과 서비스를 연결하는 어반 테크 기업.',
  primaryCta: { label: '사업 알아보기', href: '#business' },
  secondaryCta: { label: '문의하기', href: '#contact' },
  scrollCue: 'Scroll',
} as const;

export const PROBLEM_COPY = {
  eyebrow: 'Why',
  heading: '원룸은 ‘사는 곳’이 아니라 **‘자는 곳’**이 됐습니다',
  lead: '1인가구의 다수가 사는 연립·다세대 원룸은 20년째 같은 상품입니다. 방 하나에 결핍 여섯, 그리고 그 결핍의 유일한 탈출구는 ‘더 큰 집’뿐이었습니다.',
  gapsLabel: '원룸에 없는 것',
  insight:
    '여섯 결핍은 전부 ‘공간’의 문제이고, 전부 ‘가끔’만 필요합니다. 매일 쓰지 않는 공간을 소유로 풀면 비용이 되고, **구독으로 풀면 서비스가 됩니다.**',
  statsNote: '시장 데이터 — 공개 통계·업계 리포트 기준',
} as const;

export const BUSINESS_COPY = {
  eyebrow: 'What we do',
  heading: '집을 늘리지 말고,\n**필요할 때 빌려 씁니다**',
  lead: '결핍된 공간을 도보권 안에 짓고 멤버십으로 연결합니다. 방은 15m² 그대로지만, 집은 건물 전체가 됩니다.',
  swapsLabel: '없던 공간을 멤버십으로',
  principlesLabel: '설계 원칙',
} as const;

export const SERVICES_COPY = {
  eyebrow: 'Services',
  heading: '‘그래요’ 뒤에 무엇이 와도,\n**서비스가 됩니다**',
  lead: '주거를 중심으로 일상의 전 영역으로 확장합니다. 모두 하나의 앱, 하나의 멤버십 아래에 있습니다.',
} as const;

export const BRAND_COPY = {
  eyebrow: 'Brand',
  heading: '한국인이 하루에 가장 많이 쓰는 말,\n그 위에 브랜드를 **세웁니다**',
  lead: '‘그래요’는 대화를 여는 말이자 무언가를 시작하겠다는 긍정의 언어입니다. 설명이 필요 없는 이름은 마케팅 비용의 절반을 대신합니다.',
  tonesLabel: '하나의 단어, 네 가지 어조',
  familyLabel: '하나의 어족(語族)',
  familyNote:
    '한국어 접속사 패밀리 전체가 브랜드 자산이 됩니다. 새 서비스의 이름을 고민할 필요가 없습니다.',
} as const;

export const VISION_COPY = {
  eyebrow: 'Vision',
  heading: '공간에서 시작해,\n**도시로 확장합니다**',
  closingQuote: '“그래요.”',
  closingLine: '삶의 모든 질문에, 우리는 이렇게 답합니다.',
} as const;

export const CONTACT_COPY = {
  eyebrow: 'Contact',
  heading: '함께할 분을 찾습니다',
  lead: '제휴·투자·입주 문의를 기다립니다.',
  /** TODO: 법인 메일 확정 시 교체. */
  email: 'hello@greyo.co.kr',
  emailLabel: '이메일 문의',
} as const;

export const FOOTER_COPY = {
  copyright: '© 2026 GREYO. All rights reserved.',
  /** TODO: 법인명·주소·사업자등록번호 확정 시 추가. */
  legalNote: '법인 정보 준비 중',
} as const;
