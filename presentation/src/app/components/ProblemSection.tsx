import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
} from '@greyo-frontend/design-system';
import type { ProblemContent } from '@greyo-frontend/entities';

interface ProblemSectionProps {
  content: ProblemContent;
}

/** 04 The Problem — 원룸 결핍 6종 + 공개 시장 통계 + 인사이트. */
export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="problem" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro intro={content.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.gaps.map((gap, i) => (
            <GreyoReveal key={gap.num} delay={i * 60}>
              {/* BRD p3 시안 — 번호가 제목 위에 크고 옅게 온다. */}
              <GreyoCard className="h-full">
                <p
                  className="text-[clamp(34px,3.4vw,44px)] leading-none font-extrabold tracking-[-0.03em] text-greyo-ghost"
                  aria-hidden
                >
                  {gap.num}
                </p>
                <h3 className="mt-5 text-[18px] font-bold text-greyo-body">{gap.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-greyo-muted">{gap.body}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>

        <GreyoReveal>
          <div className="mt-5 rounded-panel border-l-[3px] border-greyo-orange bg-greyo-orange-soft px-7 py-6">
            <p className="text-[clamp(14px,1.25vw,17px)] leading-[1.75] text-greyo-body">
              {content.insightBefore}
              <strong className="font-bold text-greyo-orange-strong">
                {content.insightAccent}
              </strong>
            </p>
          </div>
        </GreyoReveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, i) => (
            <GreyoReveal key={stat.caption} delay={i * 70}>
              <GreyoCard className="h-full">
                <p
                  className={`text-[clamp(28px,3.2vw,40px)] leading-none font-extrabold tracking-[-0.03em] ${
                    stat.emphasis ? 'text-greyo-orange' : 'text-greyo-body'
                  }`}
                >
                  {stat.value}
                  <span className="ml-0.5 text-[0.45em] font-bold">{stat.unit}</span>
                </p>
                <p className="mt-4 text-[13px] leading-[1.6] text-greyo-muted">{stat.caption}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
