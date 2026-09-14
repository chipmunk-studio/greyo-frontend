import { GreyoShell, renderRichText } from '@greyo-frontend/design-system';
import type { HeroViewData } from '../viewData/brandPageViewData';

interface HeroSectionProps {
  view: HeroViewData;
}

/** 히어로 — 회사가 무엇을 하는지 한 문장으로 말하고 다음 행동을 준다. */
export function HeroSection({ view }: HeroSectionProps) {
  return (
    <section id="top" className="greyo-on-dark relative flex min-h-svh items-center bg-greyo-ink">
      <GreyoShell>
        <div className="greyo-enter max-w-[54ch] py-32">
          <p className="greyo-eyebrow">{view.eyebrow}</p>

          <h1 className="mt-7 text-[clamp(36px,6.4vw,84px)] leading-[1.14] font-extrabold tracking-[-0.035em] text-white">
            {renderRichText(view.heading)}
          </h1>

          <p className="mt-8 text-[clamp(15px,1.35vw,19px)] leading-[1.75] whitespace-pre-line text-white/60">
            {view.lead}
          </p>

          <div className="mt-11 flex flex-wrap gap-3">
            <a href={view.primaryCta.href} className="greyo-btn greyo-btn--primary">
              {view.primaryCta.label}
            </a>
            <a href={view.secondaryCta.href} className="greyo-btn greyo-btn--ghost">
              {view.secondaryCta.label}
            </a>
          </div>
        </div>
      </GreyoShell>

      <div
        className="absolute inset-x-0 bottom-9 hidden justify-center text-[11px] font-bold tracking-[0.24em] text-white/30 uppercase sm:flex"
        aria-hidden
      >
        {view.scrollCue}
      </div>
    </section>
  );
}
