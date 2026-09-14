import { ArrowRightIcon } from '@greyo-frontend/assets';
import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderWithBreaks,
} from '@greyo-frontend/design-system';
import type { PositioningContent } from '@greyo-frontend/entities';

interface PositioningSectionProps {
  content: PositioningContent;
}

/** 03 Brand Positioning — 정의 다크 패널 + 미션/비전/BM + 확장 단계. */
export function PositioningSection({ content }: PositioningSectionProps) {
  return (
    <section id="positioning" className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro intro={content.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <div className="mt-12 rounded-panel bg-greyo-ink px-8 py-10 sm:px-12 sm:py-14">
            <p className="text-[11px] font-bold tracking-[0.14em] text-greyo-orange uppercase">
              {content.definitionLabel}
            </p>
            <p className="mt-5 text-[clamp(20px,2.6vw,34px)] leading-[1.45] font-bold tracking-[-0.02em] text-white">
              {renderWithBreaks(content.definitionBefore)}
              <span className="text-greyo-orange">{content.definitionAccent}</span>
              {content.definitionAfter}
            </p>
          </div>
        </GreyoReveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {content.pillars.map((pillar, i) => (
            <GreyoReveal key={pillar.label} delay={i * 90}>
              <GreyoCard variant={pillar.highlight ? 'accent' : 'plain'} className="h-full">
                <p className="text-[11px] font-bold tracking-[0.14em] text-greyo-faint uppercase">
                  {pillar.label}
                </p>
                <h3 className="mt-4 text-[21px] leading-[1.4] font-bold text-greyo-body">
                  {renderWithBreaks(pillar.title)}
                  {pillar.titleAccent && (
                    <span className="text-greyo-orange">{pillar.titleAccent}</span>
                  )}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-greyo-muted">{pillar.body}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>

        <GreyoReveal>
          <div className="mt-5 rounded-panel bg-greyo-surface px-7 py-8">
            <p className="text-[11px] font-bold tracking-[0.14em] text-greyo-orange uppercase">
              Expansion
            </p>
            <ol className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {content.expansion.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-center gap-4 sm:flex-1 sm:flex-col sm:gap-0 sm:text-center"
                >
                  <div className="sm:w-full">
                    <p className="text-[19px] font-extrabold text-greyo-body">{step.title}</p>
                    <p className="mt-1 text-[13px] text-greyo-muted">{step.body}</p>
                  </div>
                  {i < content.expansion.length - 1 && (
                    <ArrowRightIcon className="shrink-0 text-greyo-faint sm:hidden" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
