/* ==========================================================================
   GREYO 브랜드 콘텐츠 모델.

   여기 있는 건 "브랜드가 무엇으로 이루어져 있는가" 뿐이다 — 항목과 그 문구.
   화면이 그걸 어떻게 서술하는지(eyebrow·헤드라인·강조색·카드 톤·배치)는
   presentation 의 뷰모델이 소유한다. 이 레이어에 스타일 플래그를 두지 않는다.

   문구 안의 `**…**` 는 "이 구간이 강조다"라는 의미 표기일 뿐, 무슨 색인지는
   presentation 이 정한다.
   ========================================================================== */

/* ── Brand Essence ──────────────────────────────────────────────────────── */

/** 브랜드 본질 3원칙 — 일상성·긍정성·확장성. */
export interface BrandPillar {
  key: 'everyday' | 'positive' | 'expandable';
  label: string;
  title: string;
  body: string;
}

/** `그래요` 뒤에 붙는 문장부호별 어조. */
export interface BrandTone {
  mark: string;
  punctuation: string;
  title: string;
  body: string;
}

/* ── Naming ─────────────────────────────────────────────────────────────── */

/** 일상어에서 태어난 브랜드 비교군 — 네이버·카카오·당근, 그리고 그래요. */
export interface NamingPeer {
  name: string;
  scope: string;
}

/** 네이밍 채택 기준 4종. */
export interface NamingCriterion {
  label: string;
  title: string;
  body: string;
}

/** 어족(語族) 구성원 — 마스터(그래요)와 서브 브랜드가 같은 형태를 공유한다. */
export interface NamingBranch {
  key: string;
  label: string;
  name: string;
  /** 로마자·영문 병기 — GREYO, -ER, AND, IF, OK OK. */
  roman: string;
  body: string;
  listLabel: string;
  list: readonly string[];
  tag: string;
}

/* ── Positioning ────────────────────────────────────────────────────────── */

/** 미션·비전·비즈니스 모델. `title` 에 `**…**` 강조가 올 수 있다. */
export interface PositioningPillar {
  key: 'mission' | 'vision' | 'businessModel';
  label: string;
  title: string;
  body: string;
}

/** 공간 → 타운 → 동네 → 도시 확장 단계. */
export interface ExpansionStep {
  title: string;
  body: string;
}

/* ── Problem ────────────────────────────────────────────────────────────── */

/** 원룸 결핍 6종. */
export interface HousingGap {
  num: string;
  title: string;
  body: string;
}

/** 공개 시장 통계. 내부 재무 추정치는 이 레이어에 두지 않는다. */
export interface MarketStat {
  key: string;
  value: string;
  unit: string;
  caption: string;
}

/* ── Solution ───────────────────────────────────────────────────────────── */

/** 결핍 → 어메니티 치환 매핑. */
export interface AmenitySwap {
  from: string;
  title: string;
  body: string;
}

/** 해법 설계 3원칙 — à la carte · 도보권 클러스터 · 참여형 운영. */
export interface SolutionPrinciple {
  num: string;
  label: string;
  title: string;
  body: string;
}

/** 주거 계약(내 방)과 멤버십(내 집)의 두 축. */
export interface LivingScope {
  key: 'room' | 'home';
  label: string;
  title: string;
  body: string;
}

/* ── Service ────────────────────────────────────────────────────────────── */

/** `그래요 ○○` 서비스 라인 8종. */
export interface ServiceLine {
  num: string;
  name: string;
  roman: string;
  body: string;
  tag: string;
}

/* ── Verbal Identity ────────────────────────────────────────────────────── */

/** 말투 3원칙. `sample` 에 `**…**` 강조가 온다. */
export interface VerbalPrinciple {
  label: string;
  title: string;
  body: string;
  sample: string;
}

/* ── Aggregate ──────────────────────────────────────────────────────────── */

/** 브랜드를 이루는 콘텐츠 전량. 화면 구성과 무관하게 이것만으로 성립한다. */
export interface BrandContent {
  pillars: readonly BrandPillar[];
  tones: readonly BrandTone[];
  namingQuestion: string;
  namingAnswer: string;
  namingPeers: readonly NamingPeer[];
  namingCriteria: readonly NamingCriterion[];
  namingMaster: NamingBranch;
  namingBranches: readonly NamingBranch[];
  definition: string;
  positioningPillars: readonly PositioningPillar[];
  expansion: readonly ExpansionStep[];
  housingGaps: readonly HousingGap[];
  marketStats: readonly MarketStat[];
  livingScopes: readonly LivingScope[];
  amenitySwaps: readonly AmenitySwap[];
  solutionPrinciples: readonly SolutionPrinciple[];
  services: readonly ServiceLine[];
  verbalPrinciples: readonly VerbalPrinciple[];
  copySamples: readonly string[];
}
