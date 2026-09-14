import { BRAND_TAGLINE, COMPANY_INFO, formatWon } from '@greyo-frontend/core';
import type {
  AmenitySwap,
  BrandContent,
  ExpansionStep,
  HousingGap,
  LivingScope,
  MarketStat,
  ServiceLine,
  SolutionPrinciple,
  VisionStatement,
} from '@greyo-frontend/entities';
import * as copy from './pageCopy';

/* ==========================================================================
   기업 페이지 view data.

   콘텐츠(entities)와 서술 카피(pageCopy)를 합쳐 "화면이 그대로 그리면 되는 형태"로
   만든다. 금액 포맷·강조·순서·분배 같은 표시 결정은 전부 여기서 끝나고,
   섹션 컴포넌트는 판단 없이 렌더만 한다.

   이름이 ViewData 인 이유 — 상태를 들고 있는 MVVM 의 ViewModel 이 아니라,
   렌더 시점에 만들어지는 순수 데이터다.
   ========================================================================== */

export interface LinkViewData {
  label: string;
  href: string;
}

export interface NavItemViewData {
  id: string;
  label: string;
}

export interface SectionIntroViewData {
  eyebrow: string;
  heading: string;
  lead?: string;
}

export interface HeroViewData {
  eyebrow: string;
  heading: string;
  lead: string;
  primaryCta: LinkViewData;
  secondaryCta: LinkViewData;
  scrollCue: string;
}

/** 홈 수치 스트립 — 카드가 아니라 구분선으로 나뉜 한 줄. */
export interface StatViewData extends MarketStat {
  emphasis: boolean;
}

export interface ProblemViewData {
  intro: SectionIntroViewData;
  gapsLabel: string;
  gaps: readonly HousingGap[];
  insight: string;
  statsLabel: string;
  stats: readonly StatViewData[];
}

export interface BusinessViewData {
  intro: SectionIntroViewData;
  room: LivingScope;
  home: LivingScope;
  swapsLabel: string;
  swaps: readonly AmenitySwap[];
  principlesLabel: string;
  principles: readonly SolutionPrinciple[];
}

/** 어메니티 한 줄 — 금액 포맷은 여기서 끝낸다. */
export interface AmenityItemViewData {
  key: string;
  name: string;
  body: string;
  /** 월정액이면 '3,800' + 단위, 아니면 '75,000원/회' 같은 표기를 그대로 쓴다. */
  fee: string;
  isMonthly: boolean;
}

export interface AmenityViewData {
  intro: SectionIntroViewData;
  items: readonly AmenityItemViewData[];
  feeUnit: string;
  note: string;
}

export interface MembershipPlanViewData {
  key: string;
  label: string;
  title: string;
  body: string;
  includes: readonly string[];
  fee: string;
  /** 0원 조합은 금액 대신 '추가 요금 없음' 을 쓴다. */
  isFree: boolean;
  /** 가운데 조합만 강조 — 가장 많이 고르는 구성이라는 화면 결정. */
  featured: boolean;
}

export interface RentalModuleViewData {
  key: string;
  name: string;
  fee: string;
}

export interface MembershipViewData {
  intro: SectionIntroViewData;
  plans: readonly MembershipPlanViewData[];
  feePrefix: string;
  feeUnit: string;
  includesLabel: string;
  rentalLabel: string;
  rentalNote: string;
  rentals: readonly RentalModuleViewData[];
}

export interface ServicesViewData {
  intro: SectionIntroViewData;
  items: readonly ServiceLine[];
}

export interface VisionViewData {
  intro: SectionIntroViewData;
  statement: VisionStatement;
  expansion: readonly ExpansionStep[];
  closingQuote: string;
  closingLine: string;
}

export interface ContactViewData {
  eyebrow: string;
  heading: string;
  lead: string;
  email: string;
  emailLabel: string;
}

/** 푸터 법인 정보 — 사업자등록증 기준. 법인등록번호는 공개하지 않는다. */
export interface CompanyViewData {
  legalName: string;
  representativeLabel: string;
  representative: string;
  businessNumberLabel: string;
  businessNumber: string;
  address: string;
}

export interface FooterViewData {
  tagline: string;
  company: CompanyViewData;
  copyright: string;
}

export interface BrandPageViewData {
  nav: readonly NavItemViewData[];
  headerCta: LinkViewData;
  hero: HeroViewData;
  problem: ProblemViewData;
  business: BusinessViewData;
  amenity: AmenityViewData;
  membership: MembershipViewData;
  services: ServicesViewData;
  vision: VisionViewData;
  contact: ContactViewData;
  footer: FooterViewData;
}

function findRequired<T>(items: readonly T[], predicate: (item: T) => boolean, label: string): T {
  const found = items.find(predicate);
  if (!found) throw new Error(`${label} 콘텐츠가 없습니다.`);
  return found;
}

/** 콘텐츠 + 서술 카피 → 화면이 그대로 그릴 수 있는 데이터. */
export function buildBrandPageViewData(content: BrandContent): BrandPageViewData {
  const room = findRequired(
    content.livingScopes,
    (scope) => scope.key === 'room',
    'livingScopes.room',
  );
  const home = findRequired(
    content.livingScopes,
    (scope) => scope.key === 'home',
    'livingScopes.home',
  );

  return {
    nav: copy.NAV_COPY.map((item) => ({ id: item.id, label: item.label })),
    headerCta: { ...copy.HEADER_CTA },

    hero: {
      eyebrow: copy.HERO_COPY.eyebrow,
      heading: copy.HERO_COPY.heading,
      lead: copy.HERO_COPY.lead,
      primaryCta: { ...copy.HERO_COPY.primaryCta },
      secondaryCta: { ...copy.HERO_COPY.secondaryCta },
      scrollCue: copy.HERO_COPY.scrollCue,
    },

    problem: {
      intro: {
        eyebrow: copy.PROBLEM_COPY.eyebrow,
        heading: copy.PROBLEM_COPY.heading,
        lead: copy.PROBLEM_COPY.lead,
      },
      gapsLabel: copy.PROBLEM_COPY.gapsLabel,
      gaps: content.housingGaps,
      insight: copy.PROBLEM_COPY.insight,
      statsLabel: copy.PROBLEM_COPY.statsNote,
      // 첫 수치만 오렌지 — 나머지는 같은 무게로 둔다.
      stats: content.marketStats.map((stat, i) => ({ ...stat, emphasis: i === 0 })),
    },

    business: {
      intro: {
        eyebrow: copy.BUSINESS_COPY.eyebrow,
        heading: copy.BUSINESS_COPY.heading,
        lead: copy.BUSINESS_COPY.lead,
      },
      room,
      home,
      swapsLabel: copy.BUSINESS_COPY.swapsLabel,
      swaps: content.amenitySwaps,
      principlesLabel: copy.BUSINESS_COPY.principlesLabel,
      principles: content.solutionPrinciples,
    },

    amenity: {
      intro: {
        eyebrow: copy.AMENITY_COPY.eyebrow,
        heading: copy.AMENITY_COPY.heading,
        lead: copy.AMENITY_COPY.lead,
      },
      items: content.amenities.map((item) => ({
        key: item.key,
        name: item.name,
        body: item.body,
        fee: item.monthlyFee !== null ? formatWon(item.monthlyFee) : (item.feeNote ?? ''),
        isMonthly: item.monthlyFee !== null,
      })),
      feeUnit: copy.AMENITY_COPY.feeUnit,
      note: copy.AMENITY_COPY.note,
    },

    membership: {
      intro: {
        eyebrow: copy.MEMBERSHIP_COPY.eyebrow,
        heading: copy.MEMBERSHIP_COPY.heading,
        lead: copy.MEMBERSHIP_COPY.lead,
      },
      plans: content.membershipPlans.map((plan) => ({
        key: plan.key,
        label: plan.label,
        title: plan.title,
        body: plan.body,
        includes: plan.includes,
        fee: plan.monthlyFee === 0 ? copy.MEMBERSHIP_COPY.freeLabel : formatWon(plan.monthlyFee),
        isFree: plan.monthlyFee === 0,
        featured: plan.key === 'standard',
      })),
      feePrefix: copy.MEMBERSHIP_COPY.feePrefix,
      feeUnit: copy.MEMBERSHIP_COPY.feeUnit,
      includesLabel: copy.MEMBERSHIP_COPY.includesLabel,
      rentalLabel: copy.MEMBERSHIP_COPY.rentalLabel,
      rentalNote: copy.MEMBERSHIP_COPY.rentalNote,
      rentals: content.rentalModules.map((module) => ({
        key: module.key,
        name: module.name,
        fee: formatWon(module.monthlyFee),
      })),
    },

    services: {
      intro: {
        eyebrow: copy.SERVICES_COPY.eyebrow,
        heading: copy.SERVICES_COPY.heading,
        lead: copy.SERVICES_COPY.lead,
      },
      items: content.services,
    },

    vision: {
      intro: {
        eyebrow: copy.VISION_COPY.eyebrow,
        heading: copy.VISION_COPY.heading,
      },
      statement: content.vision,
      expansion: content.expansion,
      closingQuote: copy.VISION_COPY.closingQuote,
      closingLine: copy.VISION_COPY.closingLine,
    },

    contact: { ...copy.CONTACT_COPY },

    footer: {
      tagline: BRAND_TAGLINE,
      company: {
        legalName: COMPANY_INFO.legalName,
        representativeLabel: copy.FOOTER_COPY.representativeLabel,
        representative: COMPANY_INFO.representative,
        businessNumberLabel: copy.FOOTER_COPY.businessNumberLabel,
        businessNumber: COMPANY_INFO.businessNumber,
        address: COMPANY_INFO.address,
      },
      copyright: copy.FOOTER_COPY.copyright,
    },
  };
}
