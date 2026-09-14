import { GreyoEyebrow, GreyoShell, renderRichText } from '@greyo-frontend/design-system';
import type { HeroViewData } from '../viewData/brandPageViewData';

interface HeroSectionProps {
  view: HeroViewData;
}

/** 히어로 — 브랜딩소개서 표지 그대로. 다크 배경 + 초대형 워드마크 + 태그라인. */
export function HeroSection({ view }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="greyo-on-dark relative flex min-h-[92svh] items-center bg-greyo-ink"
    >
      <GreyoShell>
        <div className="py-24">
          <GreyoEyebrow label={view.eyebrow} />

          {/* 히어로에서만 초대형이라 GreyoWordmark 대신 직접 조판한다. */}
          <h1 className="mt-10 flex items-baseline text-[clamp(64px,13vw,184px)] leading-none font-extrabold tracking-[-0.03em] text-white">
            GREYO
            <i
              className="ml-[0.05em] inline-block rounded-full bg-greyo-orange"
              style={{ width: '0.17em', height: '0.17em' }}
              aria-hidden
            />
          </h1>

          <p className="greyo-spaced mt-6 text-[clamp(13px,1.4vw,18px)] font-medium text-white/55">
            {view.spaced}
          </p>

          <p className="mt-12 text-[clamp(22px,2.9vw,40px)] font-bold tracking-[-0.02em] text-white">
            {renderRichText(view.tagline)}
          </p>

          <p className="mt-5 max-w-[52ch] text-[clamp(14px,1.15vw,17px)] leading-relaxed text-white/60">
            {view.description}
          </p>
        </div>
      </GreyoShell>

      <div
        className="absolute inset-x-0 bottom-8 flex justify-center text-[11px] font-bold tracking-[0.24em] text-white/35"
        aria-hidden
      >
        {view.scrollCue}
      </div>
    </section>
  );
}
