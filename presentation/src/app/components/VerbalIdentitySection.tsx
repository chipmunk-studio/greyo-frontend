import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
} from '@greyo-frontend/design-system';
import type { VerbalContent } from '@greyo-frontend/entities';

interface VerbalIdentitySectionProps {
  content: VerbalContent;
}

/** 08 Verbal Identity — 말투 3원칙 + 다크 카피 샘플 패널. */
export function VerbalIdentitySection({ content }: VerbalIdentitySectionProps) {
  return (
    <section className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro intro={content.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {content.principles.map((principle, i) => (
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
                    <span className="text-greyo-orange">{principle.sample.accent}</span>
                    {principle.sample.rest}
                  </p>
                </GreyoCard>
              </GreyoReveal>
            ))}
          </div>

          <GreyoReveal delay={120} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-panel bg-greyo-ink px-8 py-12 sm:px-10">
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">
                {content.samplesLabel}
              </p>

              <div className="mt-8 flex flex-col gap-7">
                {content.samples.map((sample) => (
                  <p
                    key={sample.accent + sample.rest}
                    className="text-[clamp(18px,2.1vw,28px)] font-bold tracking-[-0.02em] text-white"
                  >
                    <span className="text-white/70">{sample.prefix}</span>
                    <span className="text-greyo-orange">{sample.accent}</span>
                    {sample.rest}
                  </p>
                ))}
              </div>

              <p className="mt-10 text-[13px] leading-[1.7] text-white/45">
                {content.samplesFootnote}
              </p>
            </div>
          </GreyoReveal>
        </div>
      </GreyoShell>
    </section>
  );
}
