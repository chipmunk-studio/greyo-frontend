import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { VerbalViewData } from '../viewData/brandPageViewData';

interface VerbalIdentitySectionProps {
  view: VerbalViewData;
}

/** 08 Verbal Identity — 말투 3원칙 + 다크 카피 샘플 패널. */
export function VerbalIdentitySection({ view }: VerbalIdentitySectionProps) {
  return (
    <section className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {view.principles.map((principle, i) => (
              <GreyoReveal key={principle.label} delay={i * 80}>
                <GreyoCard>
                  <p className="text-[11px] font-bold tracking-[0.12em] text-greyo-orange uppercase">
                    {principle.label}
                  </p>
                  <h3 className="mt-3 text-[19px] font-bold text-greyo-body">{principle.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-greyo-muted">
                    {principle.body}
                  </p>
                  <p className="mt-4 w-fit rounded-xl bg-greyo-surface px-4 py-2.5 text-[14px] font-semibold text-greyo-body">
                    {renderRichText(principle.sample)}
                  </p>
                </GreyoCard>
              </GreyoReveal>
            ))}
          </div>

          <GreyoReveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-panel bg-greyo-ink px-8 py-12 sm:px-10">
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">
                {view.samplesLabel}
              </p>

              <div className="mt-8 flex flex-col gap-7">
                {view.samples.map((sample) => (
                  <p
                    key={sample}
                    className="text-[clamp(18px,2.1vw,28px)] font-bold tracking-[-0.02em] text-white"
                  >
                    {renderRichText(sample)}
                  </p>
                ))}
              </div>

              <p className="mt-10 text-[13px] leading-[1.7] text-white/45">
                {view.samplesFootnote}
              </p>
            </div>
          </GreyoReveal>
        </div>
      </GreyoShell>
    </section>
  );
}
