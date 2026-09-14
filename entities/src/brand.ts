/* ==========================================================================
   GREYO 브랜드 콘텐츠 모델.

   여기 있는 건 "브랜드가 무엇으로 이루어져 있는가" 뿐이다 — 항목과 그 문구.
   화면이 그걸 어떻게 서술하는지(eyebrow·헤드라인·강조색·카드 톤·배치)는
   presentation 의 view data 가 소유한다. 이 레이어에 스타일 플래그를 두지 않는다.

   필드는 화면이 실제로 그리는 것만 둔다. 원본 덱에 있던 항목 번호·영문 라벨·
   분류 태그는 화면에서 정보를 더하지 않아 싣지 않는다.

   문구 안의 `**…**` 는 "이 구간이 강조다"라는 의미 표기일 뿐, 무슨 색인지는
   presentation 이 정한다.
   ========================================================================== */

/* ── Membership ─────────────────────────────────────────────────────────── */

/** 집 밖 어메니티 — 멤버십으로 골라 쓰는 공간. */
export interface AmenityItem {
  key: string;
  name: string;
  body: string;
  /** 월 요금(원). 회당 과금·기본 포함처럼 월정액이 아닌 항목은 null. */
  monthlyFee: number | null;
  /** 월정액이 아닐 때의 요금 표기 — '75,000원/회', '기본 포함' 등. */
  feeNote?: string;
}

/** 집 안 렌탈 모듈 — 가구·가전 월정액. 이사·초기비용을 0 으로 만드는 축. */
export interface RentalModule {
  key: string;
  name: string;
  monthlyFee: number;
}

/**
 * 멤버십 조합 예시.
 * 정해진 등급이 아니라 "이렇게 조립하면 이 금액" 이라는 예시다 —
 * 전 항목 임의가입이라 등급제가 아니라는 점이 상품의 핵심이다.
 */
export interface MembershipPlan {
  key: 'minimal' | 'standard' | 'full';
  label: string;
  /** 주거 임대료에 더해지는 월 추가액(원). */
  monthlyFee: number;
  title: string;
  body: string;
  includes: readonly string[];
}

/* ── Vision ─────────────────────────────────────────────────────────────── */

/** 회사가 지향하는 상태. `title` 에 `**…**` 강조가 올 수 있다. */
export interface VisionStatement {
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
  key: string;
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

/** 해법 설계 3원칙. */
export interface SolutionPrinciple {
  key: string;
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

/** `그래요 ○○` 서비스 라인. */
export interface ServiceLine {
  key: string;
  name: string;
  body: string;
}

/* ── Aggregate ──────────────────────────────────────────────────────────── */

/** 브랜드를 이루는 콘텐츠 전량. 화면 구성과 무관하게 이것만으로 성립한다. */
export interface BrandContent {
  amenities: readonly AmenityItem[];
  rentalModules: readonly RentalModule[];
  membershipPlans: readonly MembershipPlan[];
  vision: VisionStatement;
  expansion: readonly ExpansionStep[];
  housingGaps: readonly HousingGap[];
  marketStats: readonly MarketStat[];
  livingScopes: readonly LivingScope[];
  amenitySwaps: readonly AmenitySwap[];
  solutionPrinciples: readonly SolutionPrinciple[];
  services: readonly ServiceLine[];
}
