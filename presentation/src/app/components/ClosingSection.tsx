import {
  GreyoEyebrow,
  GreyoReveal,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { ClosingViewData } from '../viewData/brandPageViewData';

interface ClosingSectionProps {
  view: ClosingViewData;
}

/** 09 Closing — 브랜딩소개서 마지막 장. 다크 배경 + 대형 인용. */
export function ClosingSection({ view }: ClosingSectionProps) {
  return (
    <section className="greyo-on-dark greyo-section bg-greyo-ink">
      <GreyoShell>
        <GreyoReveal>
          <GreyoEyebrow label={view.eyebrow} />

          <p className="mt-10 text-[clamp(30px,5.2vw,72px)] leading-[1.22] font-extrabold tracking-[-0.03em] text-white">
            {renderRichText(view.heading)}
            <br />
            <span className="text-greyo-orange">{view.quote}</span>
          </p>

          <p className="mt-10 text-[clamp(14px,1.4vw,19px)] text-white/55">
            {renderRichText(view.sub)}
          </p>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
