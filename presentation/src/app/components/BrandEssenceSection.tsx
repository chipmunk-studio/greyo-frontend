import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { EssenceViewData } from '../viewData/brandPageViewData';

interface BrandEssenceSectionProps {
  view: EssenceViewData;
}

/** 01 Brand Essence — 3원칙 + 다크 배너 + 어조 4종. */
export function BrandEssenceSection({ view }: BrandEssenceSectionProps) {
  return (
    <section id="essence" className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {view.pillars.map((pillar, i) => (
            <GreyoReveal key={pillar.key} delay={i * 90}>
              <GreyoCard variant="filled" className="h-full">
                <p className="text-[12px] font-bold tracking-[0.1em] text-greyo-orange uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-3 text-[19px] font-bold text-greyo-body">{pillar.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-greyo-muted">{pillar.body}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>

        <GreyoReveal>
          <div className="mt-5 flex flex-col gap-3 rounded-panel bg-greyo-ink px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="text-[clamp(15px,1.5vw,19px)] font-bold text-white">
              {renderRichText(view.bannerText)}
            </p>
            <p className="shrink-0 text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">
              {view.bannerTag}
            </p>
          </div>
        </GreyoReveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {view.tones.map((tone, i) => (
            <GreyoReveal key={tone.punctuation} delay={i * 70}>
              <GreyoCard className="h-full">
                <p className="text-[22px] font-extrabold text-greyo-body">
                  {tone.mark}
                  <span className="text-greyo-orange">{tone.punctuation}</span>
                </p>
                <p className="mt-3 text-[13px] text-greyo-muted">
                  <span className="font-bold text-greyo-body">{tone.title}</span> — {tone.body}
                </p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
