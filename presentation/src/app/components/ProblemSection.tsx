import {
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { ProblemViewData } from '../viewData/brandPageViewData';

interface ProblemSectionProps {
  view: ProblemViewData;
}

/**
 * 왜 이 사업을 하는가 — 결핍 6종과 시장 수치.
 * 덱에서는 카드 6장 + 카드 4장이었지만, 여기서는 구분선 리스트와 수치 스트립으로 편다.
 */
export function ProblemSection({ view }: ProblemSectionProps) {
  return (
    <section className="greyo-section">
      <GreyoShell>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <GreyoReveal>
            <GreyoSectionIntro {...view.intro} />
          </GreyoReveal>

          <GreyoReveal delay={120}>
            <p className="greyo-block-label">{view.gapsLabel}</p>
            <ul className="greyo-rule-list mt-5">
              {view.gaps.map((gap) => (
                <li key={gap.num} className="flex gap-5 py-5">
                  <span className="w-6 shrink-0 pt-0.5 text-[13px] font-bold text-greyo-faint tabular-nums">
                    {gap.num}
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold text-greyo-body">{gap.title}</span>
                    <span className="mt-1.5 block text-[14px] leading-[1.7] text-greyo-muted">
                      {gap.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </GreyoReveal>
        </div>

        <GreyoReveal>
          <p className="mt-16 max-w-[68ch] border-l-[3px] border-greyo-orange pl-6 text-[clamp(16px,1.5vw,21px)] leading-[1.7] font-semibold text-greyo-body">
            {renderRichText(view.insight)}
          </p>
        </GreyoReveal>

        <GreyoReveal>
          <div className="greyo-stat-strip mt-16 grid border-t border-greyo-line pt-10 sm:grid-cols-3">
            {view.stats.map((stat) => (
              <div key={stat.key} className="py-6 sm:px-8 sm:py-0 sm:first:pl-0">
                <p
                  className={`text-[clamp(32px,3.6vw,46px)] leading-none font-extrabold tracking-[-0.03em] ${
                    stat.emphasis ? 'text-greyo-orange' : 'text-greyo-body'
                  }`}
                >
                  {stat.value}
                  <span className="ml-0.5 text-[0.42em] font-bold">{stat.unit}</span>
                </p>
                <p className="mt-3 text-[13px] leading-[1.6] text-greyo-muted">{stat.caption}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[12px] text-greyo-faint">{view.statsLabel}</p>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
