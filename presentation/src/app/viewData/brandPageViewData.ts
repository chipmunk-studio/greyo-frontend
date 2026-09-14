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
  NamingCriterion,
  NamingPeer,
  PositioningPillar,
  ServiceLine,
  SolutionPrinciple,
  VerbalPrinciple,
} from '@greyo-frontend/entities';
import * as copy from './pageCopy';

/* ==========================================================================
   브랜드 소개 페이지 view data.

   콘텐츠(entities)와 서술 카피(pageCopy)를 합쳐 "화면이 그대로 그리면 되는 형태"로
   만든다. 강조색·카드 톤 같은 시각 결정은 전부 여기서 끝나고, 섹션 컴포넌트는
   판단 없이 렌더만 한다.

   이름이 ViewData 인 이유 — 상태를 들고 있는 MVVM 의 ViewModel 이 아니라,
   렌더 시점에 만들어지는 순수 데이터다.
   ========================================================================== */

export interface NavItemViewData {
  id: string;
  label: string;
}

/** 섹션 도입부 — GreyoSectionIntro 에 그대로 전달된다. */
export interface SectionIntroViewData {
  index?: string;
  eyebrow: string;
  heading: string;
  lead?: string;
}

export interface HeroViewData {
  eyebrow: string;
  spaced: string;
  tagline: string;
  description: string;
  scrollCue: string;
}

export interface EssenceViewData {
  intro: SectionIntroViewData;
  pillars: readonly BrandPillar[];
  bannerText: string;
  bannerTag: string;
  tones: readonly BrandTone[];
}

/** 비교군 카드 — `isBrand` 는 콘텐츠가 아니라 "다크 카드로 그린다"는 화면 결정. */
export interface NamingPeerViewData extends NamingPeer {
  isBrand: boolean;
}

export interface NamingStoryViewData {
  intro: SectionIntroViewData;
  questionLabel: string;
  question: string;
  answerLabel: string;
  answer: string;
  peers: readonly NamingPeerViewData[];
  criteria: readonly NamingCriterion[];
}

/** `highlight` 는 피치 배경 카드로 그린다는 화면 결정. */
export interface PositioningPillarViewData extends PositioningPillar {
  highlight: boolean;
}

export interface PositioningViewData {
  intro: SectionIntroViewData;
  definitionLabel: string;
  definition: string;
  pillars: readonly PositioningPillarViewData[];
  expansionLabel: string;
  expansion: readonly ExpansionStep[];
}

/** `emphasis` 는 오렌지로 그린다는 화면 결정. */
export interface MarketStatViewData extends MarketStat {
  emphasis: boolean;
}

export interface ProblemViewData {
  intro: SectionIntroViewData;
  gaps: readonly HousingGap[];
  stats: readonly MarketStatViewData[];
  insight: string;
}

export interface SolutionViewData {
  intro: SectionIntroViewData;
  room: LivingScope;
  home: LivingScope;
  /** 중앙 패널 좌우로 나눠 배치할 치환 카드. 분배는 화면 결정이다. */
  leftSwaps: readonly AmenitySwap[];
  rightSwaps: readonly AmenitySwap[];
  principles: readonly SolutionPrinciple[];
}

export interface NamingSystemViewData {
  intro: SectionIntroViewData;
  master: NamingBranch;
  branches: readonly NamingBranch[];
}

export interface ServiceViewData {
  intro: SectionIntroViewData;
  /** 카드마다 서비스명 앞에 붙는 마스터 브랜드 표기. */
  brandPrefix: string;
  items: readonly ServiceLine[];
}

export interface VerbalViewData {
  intro: SectionIntroViewData;
  principles: readonly VerbalPrinciple[];
  samplesLabel: string;
  samples: readonly string[];
  samplesFootnote: string;
}

export interface ClosingViewData {
  eyebrow: string;
  heading: string;
  quote: string;
  sub: string;
}

export interface FooterViewData {
  tagline: string;
  copyright: string;
}

export interface BrandPageViewData {
  nav: readonly NavItemViewData[];
  hero: HeroViewData;
  essence: EssenceViewData;
  namingStory: NamingStoryViewData;
  positioning: PositioningViewData;
  problem: ProblemViewData;
  solution: SolutionViewData;
  namingSystem: NamingSystemViewData;
  service: ServiceViewData;
  verbal: VerbalViewData;
  closing: ClosingViewData;
  footer: FooterViewData;
}

/** 중앙 패널 기준으로 치환 카드를 좌우로 가르는 지점. */
const SWAP_SPLIT = 3;

/** 콘텐츠 + 서술 카피 → 화면이 그대로 그릴 수 있는 데이터. */
export function buildBrandPageViewData(content: BrandContent): BrandPageViewData {
  const room = content.livingScopes.find((scope) => scope.key === 'room');
  const home = content.livingScopes.find((scope) => scope.key === 'home');
  if (!room || !home) {
    throw new Error('livingScopes 에 room·home 이 모두 있어야 합니다.');
  }

  return {
    nav: copy.NAV_COPY.map((item) => ({ id: item.id, label: item.label })),

    hero: { ...copy.HERO_COPY },

    essence: {
      intro: {
        index: copy.ESSENCE_COPY.index,
        eyebrow: copy.ESSENCE_COPY.eyebrow,
        heading: copy.ESSENCE_COPY.heading,
        lead: copy.ESSENCE_COPY.lead,
      },
      pillars: content.pillars,
      bannerText: copy.ESSENCE_COPY.bannerText,
      bannerTag: copy.ESSENCE_COPY.bannerTag,
      tones: content.tones,
    },

    namingStory: {
      intro: {
        index: copy.NAMING_STORY_COPY.index,
        eyebrow: copy.NAMING_STORY_COPY.eyebrow,
        heading: copy.NAMING_STORY_COPY.heading,
        lead: copy.NAMING_STORY_COPY.lead,
      },
      questionLabel: copy.NAMING_STORY_COPY.questionLabel,
      question: content.namingQuestion,
      answerLabel: copy.NAMING_STORY_COPY.answerLabel,
      answer: content.namingAnswer,
      // 비교군 중 자기 자신만 다크 카드로 세운다.
      peers: content.namingPeers.map((peer) => ({ ...peer, isBrand: peer.name === BRAND_NAME_KO })),
      criteria: content.namingCriteria,
    },

    positioning: {
      intro: {
        index: copy.POSITIONING_COPY.index,
        eyebrow: copy.POSITIONING_COPY.eyebrow,
        heading: copy.POSITIONING_COPY.heading,
      },
      definitionLabel: copy.POSITIONING_COPY.definitionLabel,
      definition: content.definition,
      pillars: content.positioningPillars.map((pillar) => ({
        ...pillar,
        highlight: pillar.key === 'vision',
      })),
      expansionLabel: copy.POSITIONING_COPY.expansionLabel,
      expansion: content.expansion,
    },

    problem: {
      intro: {
        index: copy.PROBLEM_COPY.index,
        eyebrow: copy.PROBLEM_COPY.eyebrow,
        heading: copy.PROBLEM_COPY.heading,
        lead: copy.PROBLEM_COPY.lead,
      },
      gaps: content.housingGaps,
      stats: content.marketStats.map((stat) => ({
        ...stat,
        emphasis: stat.key === copy.PROBLEM_COPY.emphasizedStatKey,
      })),
      insight: copy.PROBLEM_COPY.insight,
    },

    solution: {
      intro: {
        index: copy.SOLUTION_COPY.index,
        eyebrow: copy.SOLUTION_COPY.eyebrow,
        heading: copy.SOLUTION_COPY.heading,
        lead: copy.SOLUTION_COPY.lead,
      },
      room,
      home,
      leftSwaps: content.amenitySwaps.slice(0, SWAP_SPLIT),
      rightSwaps: content.amenitySwaps.slice(SWAP_SPLIT),
      principles: content.solutionPrinciples,
    },

    namingSystem: {
      intro: {
        index: copy.NAMING_SYSTEM_COPY.index,
        eyebrow: copy.NAMING_SYSTEM_COPY.eyebrow,
        heading: copy.NAMING_SYSTEM_COPY.heading,
        lead: copy.NAMING_SYSTEM_COPY.lead,
      },
      master: content.namingMaster,
      branches: content.namingBranches,
    },

    service: {
      intro: {
        index: copy.SERVICE_COPY.index,
        eyebrow: copy.SERVICE_COPY.eyebrow,
        heading: copy.SERVICE_COPY.heading,
        lead: copy.SERVICE_COPY.lead,
      },
      brandPrefix: BRAND_NAME_KO,
      items: content.services,
    },

    verbal: {
      intro: {
        index: copy.VERBAL_COPY.index,
        eyebrow: copy.VERBAL_COPY.eyebrow,
        heading: copy.VERBAL_COPY.heading,
      },
      principles: content.verbalPrinciples,
      samplesLabel: copy.VERBAL_COPY.samplesLabel,
      samples: content.copySamples,
      samplesFootnote: copy.VERBAL_COPY.samplesFootnote,
    },

    closing: { ...copy.CLOSING_COPY },

    footer: {
      tagline: BRAND_TAGLINE,
      copyright: copy.FOOTER_COPY.copyright,
    },
  };
}
