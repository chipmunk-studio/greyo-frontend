/* ==========================================================================
   GREYO 브랜드 소개 콘텐츠 도메인 모델.
   출처 문서(브랜딩소개서 v1 · BRD v2.3)의 구조를 타입으로 고정한다.
   값은 infrastructure 가 공급한다 — 지금은 정적, 이후 CMS/API 로 교체 가능.
   ========================================================================== */

/** 앵커 내비게이션 항목. `id` 는 렌더된 <section> 의 id 와 1:1. */
export interface NavItem {
  id: string;
  label: string;
}

/** 섹션 공통 머리말 — eyebrow + 헤드라인(강조 어구 분리) + 리드 문단. */
export interface SectionIntro {
  /** 섹션 번호(01~08). 히어로·클로징은 없음. */
  index?: string;
  eyebrow: string;
  headingBefore: string;
  /** 브랜드 오렌지로 강조되는 핵심 어구. */
  headingAccent?: string;
  headingAfter?: string;
  lead?: string;
}

/** 오렌지 강조 어구 + 나머지로 나뉜 한 줄 카피. */
export interface AccentedLine {
  accent: string;
  rest: string;
}

/* ── 01. Hero ───────────────────────────────────────────────────────────── */

export interface HeroContent {
  eyebrow: string;
  /** 자간을 벌려 병기하는 한글 — `그 래 요`. */
  spaced: string;
  tagline: AccentedLine;
  description: string;
  scrollCue: string;
}

/* ── 02. Brand Essence ──────────────────────────────────────────────────── */

export interface BrandPillar {
  label: string;
  title: string;
  body: string;
}

/** `직방·다방처럼 …` 다크 배너. */
export interface EssenceBanner {
  before: string;
  accent: string;
  tag: string;
}

/** 그래요. / ? / ! / … 네 가지 어조. */
export interface BrandTone {
  mark: string;
  punctuation: string;
  title: string;
  body: string;
}

export interface EssenceContent {
  intro: SectionIntro;
  pillars: readonly BrandPillar[];
  banner: EssenceBanner;
  tones: readonly BrandTone[];
}

/* ── 03. Naming Story ───────────────────────────────────────────────────── */

export interface NamingPeer {
  name: string;
  scope: string;
  /** true 면 GREYO 자신 — 다크 카드로 강조한다. */
  isBrand?: boolean;
}

export interface NamingCriterion {
  label: string;
  title: string;
  body: string;
}

export interface NamingStoryContent {
  intro: SectionIntro;
  question: string;
  answer: string;
  peers: readonly NamingPeer[];
  criteria: readonly NamingCriterion[];
}

/* ── 04. Brand Positioning ──────────────────────────────────────────────── */

export interface PositioningPillar {
  label: string;
  title: string;
  /** 제목 뒤에 오렌지로 붙는 어구(VISION 카드에만 있음). */
  titleAccent?: string;
  body: string;
  /** true 면 피치 배경 카드. */
  highlight?: boolean;
}

export interface ExpansionStep {
  title: string;
  body: string;
}

export interface PositioningContent {
  intro: SectionIntro;
  definitionLabel: string;
  definitionBefore: string;
  definitionAccent: string;
  definitionAfter: string;
  pillars: readonly PositioningPillar[];
  expansion: readonly ExpansionStep[];
}

/* ── 05. Problem ────────────────────────────────────────────────────────── */

/** 원룸 결핍 6종. */
export interface HousingGap {
  num: string;
  title: string;
  body: string;
}

/** 공개 시장 통계 — 내부 재무 추정치는 도메인에 두지 않는다. */
export interface MarketStat {
  value: string;
  unit: string;
  caption: string;
  /** true 면 오렌지 강조 수치. */
  emphasis?: boolean;
}

export interface ProblemContent {
  intro: SectionIntro;
  gaps: readonly HousingGap[];
  stats: readonly MarketStat[];
  insightBefore: string;
  insightAccent: string;
}

/* ── 06. Solution ───────────────────────────────────────────────────────── */

/** 결핍 → 어메니티 치환 매핑. */
export interface AmenitySwap {
  from: string;
  title: string;
  body: string;
}

export interface SolutionPrinciple {
  num: string;
  label: string;
  title: string;
  body: string;
}

export interface SolutionContent {
  intro: SectionIntro;
  roomLabel: string;
  roomTitle: string;
  roomBody: string;
  homeLabel: string;
  homeTitle: string;
  homeBody: string;
  swaps: readonly AmenitySwap[];
  principles: readonly SolutionPrinciple[];
}

/* ── 07. Naming System ──────────────────────────────────────────────────── */

/** 어족(語族) 구성원 — 마스터(그래요)와 서브 브랜드가 같은 형태를 공유한다. */
export interface NamingBranch {
  label: string;
  name: string;
  /** 로마자·영문 병기 — GREYO, -ER, AND, IF, OK OK. */
  roman: string;
  body: string;
  listLabel: string;
  list: readonly string[];
  tag: string;
}

export interface NamingSystemContent {
  intro: SectionIntro;
  master: NamingBranch;
  branches: readonly NamingBranch[];
}

/* ── 08. Service Architecture ───────────────────────────────────────────── */

export interface ServiceLine {
  num: string;
  name: string;
  roman: string;
  body: string;
  tag: string;
}

export interface ServiceContent {
  intro: SectionIntro;
  items: readonly ServiceLine[];
}

/* ── 09. Verbal Identity ────────────────────────────────────────────────── */

export interface VerbalPrinciple {
  label: string;
  title: string;
  body: string;
  sample: AccentedLine;
}

export interface VerbalContent {
  intro: SectionIntro;
  principles: readonly VerbalPrinciple[];
  samplesLabel: string;
  /** `prefix` 는 “집 문제요? ” 처럼 강조 앞에 붙는 도입부. */
  samples: readonly (AccentedLine & { prefix?: string })[];
  samplesFootnote: string;
}

/* ── 10. Closing ────────────────────────────────────────────────────────── */

export interface ClosingContent {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  quote: string;
  subBefore: string;
  subStrong: string;
  subAccent: string;
}

export interface FooterContent {
  tagline: string;
  copyright: string;
}

/* ── Aggregate ──────────────────────────────────────────────────────────── */

/** 브랜드 소개 페이지 한 장을 그리는 데 필요한 콘텐츠 전량. */
export interface BrandContent {
  nav: readonly NavItem[];
  hero: HeroContent;
  essence: EssenceContent;
  namingStory: NamingStoryContent;
  positioning: PositioningContent;
  problem: ProblemContent;
  solution: SolutionContent;
  namingSystem: NamingSystemContent;
  service: ServiceContent;
  verbal: VerbalContent;
  closing: ClosingContent;
  footer: FooterContent;
}
