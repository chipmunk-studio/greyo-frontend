import { BRAND_NAME_KO, BRAND_TAGLINE } from '@greyo-frontend/core';
import type {
  AmenitySwap,
  BrandContent,
  BrandPillar,
  BrandTone,
  ExpansionStep,
  HousingGap,
  LivingScope,
  MarketStat,
  NamingBranch,
  PositioningPillar,
  ServiceLine,
  SolutionPrinciple,
} from '@greyo-frontend/entities';
import * as copy from './pageCopy';

/* ==========================================================================
   기업 페이지 view data.

   콘텐츠(entities)와 서술 카피(pageCopy)를 합쳐 "화면이 그대로 그리면 되는 형태"로
   만든다. 강조·순서·분배 같은 시각 결정은 전부 여기서 끝나고, 섹션 컴포넌트는
   판단 없이 렌더만 한다.

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

export interface ServicesViewData {
  intro: SectionIntroViewData;
  brandPrefix: string;
  items: readonly ServiceLine[];
}

export interface BrandViewData {
  intro: SectionIntroViewData;
  pillars: readonly BrandPillar[];
  tonesLabel: string;
  tones: readonly BrandTone[];
  familyLabel: string;
  familyNote: string;
  master: NamingBranch;
  branches: readonly NamingBranch[];
}

export interface VisionViewData {
  intro: SectionIntroViewData;
  /** 미션·비전·BM 중 비전 한 장만 쓴다 — 기업 페이지엔 세 장이 다 필요 없다. */
  statement: PositioningPillar;
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

export interface FooterViewData {
  tagline: string;
  legalNote: string;
  copyright: string;
}

export interface BrandPageViewData {
  nav: readonly NavItemViewData[];
  headerCta: LinkViewData;
  hero: HeroViewData;
  problem: ProblemViewData;
  business: BusinessViewData;
  services: ServicesViewData;
  brand: BrandViewData;
  vision: VisionViewData;
  contact: ContactViewData;
  footer: FooterViewData;
}

/** 홈에 노출할 수치 개수 — 4개는 스트립이 빽빽해 3개로 줄인다. */
const STAT_LIMIT = 3;

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
  const vision = findRequired(
    content.positioningPillars,
    (pillar) => pillar.key === 'vision',
    'positioningPillars.vision',
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
      stats: content.marketStats
        .slice(0, STAT_LIMIT)
        .map((stat, i) => ({ ...stat, emphasis: i === 0 })),
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

    services: {
      intro: {
        eyebrow: copy.SERVICES_COPY.eyebrow,
        heading: copy.SERVICES_COPY.heading,
        lead: copy.SERVICES_COPY.lead,
      },
      brandPrefix: BRAND_NAME_KO,
      items: content.services,
    },

    brand: {
      intro: {
        eyebrow: copy.BRAND_COPY.eyebrow,
        heading: copy.BRAND_COPY.heading,
        lead: copy.BRAND_COPY.lead,
      },
      pillars: content.pillars,
      tonesLabel: copy.BRAND_COPY.tonesLabel,
      tones: content.tones,
      familyLabel: copy.BRAND_COPY.familyLabel,
      familyNote: copy.BRAND_COPY.familyNote,
      master: content.namingMaster,
      branches: content.namingBranches,
    },

    vision: {
      intro: {
        eyebrow: copy.VISION_COPY.eyebrow,
        heading: copy.VISION_COPY.heading,
      },
      statement: vision,
      expansion: content.expansion,
      closingQuote: copy.VISION_COPY.closingQuote,
      closingLine: copy.VISION_COPY.closingLine,
    },

    contact: { ...copy.CONTACT_COPY },

    footer: {
      tagline: BRAND_TAGLINE,
      legalNote: copy.FOOTER_COPY.legalNote,
      copyright: copy.FOOTER_COPY.copyright,
    },
  };
}
