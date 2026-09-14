/* ==========================================================================
   브랜드 소개 페이지의 '서술' 카피.

   콘텐츠(무엇을 말하는가)는 entities·infrastructure 가 갖고, 여기에는 그 콘텐츠를
   페이지가 어떻게 감싸 보여주는가 — eyebrow, 섹션 헤드라인, 리드 문단, 각종 라벨 —
   만 둔다. 화면 구성이 바뀌면 이 파일만 바뀌고 콘텐츠는 그대로다.

   `**…**` 는 강조 구간 표기, `\n` 은 줄바꿈이다.
   ========================================================================== */

export const NAV_COPY = [
  { id: 'essence', label: '브랜드' },
  { id: 'naming', label: '네이밍' },
  { id: 'positioning', label: '포지셔닝' },
  { id: 'problem', label: '문제·해법' },
  { id: 'service', label: '서비스' },
] as const;

export const HERO_COPY = {
  eyebrow: 'Brand Identity',
  spaced: '그 래 요',
  tagline: '**그래요,** 그냥 그렇다고요.',
  description:
    '먹고, 자고, 사는 일상의 모든 문제를 기술로 해결하는 어반 테크 라이프스타일 기업입니다.',
  scrollCue: 'SCROLL',
} as const;

export const ESSENCE_COPY = {
  index: '01',
  eyebrow: 'Brand Essence',
  heading: '한국인이 하루에 가장 많이 쓰는 말,\n그 위에 브랜드를 **세웁니다.**',
  lead: '‘그래요’는 대화를 여는 말이자, 무언가를 시작하겠다는 긍정 의지의 언어입니다. 네이버·카카오·당근이 증명했듯 위대한 브랜드는 일상의 단어에서 태어납니다. GREYO는 검색창이 아니라, 사람들의 입에서 하루에도 수십 번 재생되는 브랜드입니다.',
  bannerText: '직방·다방처럼 기능을 말하지 않습니다. **카카오처럼 일상을 차지합니다.**',
  bannerTag: 'Daily-word Branding',
} as const;

export const NAMING_STORY_COPY = {
  index: '02',
  eyebrow: 'Naming Story',
  heading: '이 이름은 한 번의 대화에서 **태어났습니다.**',
  lead: '기억하기 쉽고, 발음이 좋고, 차분하면서 고급스러운 이름. 카카오의 13년 성장을 연구한 끝에 도달한 답은 가장 먼 곳이 아니라, 가장 가까운 일상의 말이었습니다.',
  questionLabel: 'Question',
  answerLabel: 'Answer',
} as const;

export const POSITIONING_COPY = {
  index: '03',
  eyebrow: 'Brand Positioning',
  heading: '집을 파는 회사가 아니라, **삶을 해결하는 회사**',
  definitionLabel: 'Definition',
  expansionLabel: 'Expansion',
} as const;

export const PROBLEM_COPY = {
  index: '04',
  eyebrow: 'The Problem',
  heading: '원룸은 ‘사는 곳’이 아니라 **‘자는 곳’**이 됐습니다',
  lead: '1인가구의 주거 형태는 연립·다세대(38.4%)가 아파트(30.7%)를 추월했습니다. 그런데 이 시장의 상품은 20년째 같습니다 — 방 하나, 결핍 여섯.',
  insight:
    '여섯 결핍의 공통점 — 전부 ‘공간’의 문제이고, 전부 ‘가끔’만 필요합니다. 매일 쓰지 않는 공간을 소유(더 큰 집)로 풀면 비용이 되고, **구독으로 풀면 서비스가 됩니다.**',
  /** 오렌지로 강조할 통계 — 콘텐츠가 아니라 화면 강조 결정이라 여기 둔다. */
  emphasizedStatKey: 'households',
} as const;

export const SOLUTION_COPY = {
  index: '05',
  eyebrow: 'The Solution',
  heading: '집을 늘리지 말고, **필요할 때 빌려 씁니다**',
  lead: '“집이라는 게 고정적인 게 아니라, 서비스로 확장될 수 있다” — 그래요의 출발점이 된 문장입니다. 결핍된 공간을 도보권 안에 짓고, 멤버십으로 연결합니다.',
} as const;

export const NAMING_SYSTEM_COPY = {
  index: '06',
  eyebrow: 'Naming System',
  heading: '하나의 단어가 아니라, **하나의 어족(語族)**입니다.',
  lead: '‘그래요’는 한국어 접속사 패밀리 전체를 브랜드 자산으로 만듭니다. 새 서비스가 태어날 때마다 이름을 고민할 필요가 없는, 무한히 확장되는 네이밍 시스템입니다.',
} as const;

export const SERVICE_COPY = {
  index: '07',
  eyebrow: 'Service Architecture',
  heading: '‘그래요’ 뒤에 무엇이 와도, **서비스가 됩니다.**',
  lead: '하나의 앱, 하나의 멤버십 아래에서 주거를 중심으로 일상의 전 영역으로 확장하는 서비스 맵입니다.',
} as const;

export const VERBAL_COPY = {
  index: '08',
  eyebrow: 'Verbal Identity',
  heading: '힘을 뺀 말투가, **가장 오래 남습니다.**',
  samplesLabel: 'Copy Samples',
  samplesFootnote:
    '일상의 대사가 그대로 광고가 되는 언어 — 그것이 GREYO 버벌 아이덴티티의 힘입니다.',
} as const;

export const CLOSING_COPY = {
  eyebrow: 'Closing',
  heading: '삶의 모든 질문에,\n우리는 이렇게 답합니다.',
  quote: '“그래요.”',
  sub: '그냥, 그렇다고요. — 일상을 연결하는 어반 테크 기업, **그래요.**',
} as const;

export const FOOTER_COPY = {
  copyright: '© 2026 GREYO. All rights reserved.',
} as const;
