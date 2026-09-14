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
  { id: 'amenity', label: '어메니티' },
  { id: 'membership', label: '멤버십' },
  { id: 'services', label: '서비스' },
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
  heading: '주거에서 시작해\n**일상 전체를 맡습니다**',
  lead: '멤버십으로 검증한 생활 데이터 위에 서비스를 하나씩 올립니다. 전부 같은 앱, 같은 계정 안에 있습니다.',
} as const;

export const AMENITY_COPY = {
  eyebrow: 'Amenity',
  heading: '원룸에 없던 공간을,\n**도보 5분 안에 둡니다**',
  lead: '라운지부터 사우나·퍼블릭 오피스까지 클러스터 단위로 짓습니다. 한 건물이 아니라 동네가 집이 되는 구조입니다.',
  feeUnit: '원 / 월',
  note: '요금은 파일럿 기준이며 클러스터별로 달라질 수 있습니다.',
} as const;

export const MEMBERSHIP_COPY = {
  eyebrow: 'Membership',
  heading: '등급이 아니라 **조합입니다**',
  lead: '전 항목 임의가입·즉시해지. 정해진 플랜을 고르는 게 아니라 필요한 것만 담습니다. 아래는 조합 예시입니다.',
  feePrefix: '월 +',
  feeUnit: '원',
  freeLabel: '추가 요금 없음',
  includesLabel: '담은 항목',
  rentalLabel: '집 안 렌탈 모듈',
  rentalNote: '가구·가전도 월정액으로 — 이사 초기비용을 0 으로 만듭니다.',
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
  copyright: '© 2026 GREYO Corp. All rights reserved.',
  representativeLabel: '대표',
  businessNumberLabel: '사업자등록번호',
} as const;
