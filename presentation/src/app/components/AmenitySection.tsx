import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { AmenityViewData } from '../viewData/brandPageViewData';

interface AmenitySectionProps {
  view: AmenityViewData;
}

/**
 * 어메니티 라인업 — 카드 그리드.
 * 요금이 붙은 '고를 수 있는 항목' 이라 카드가 맞다. 좁은 화면에서도 항목 경계가
 * 유지돼야 해서 행 리스트에서 카드로 바꿨다.
 */
export function AmenitySection({ view }: AmenitySectionProps) {
  return (
    <section id="amenity" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {view.items.map((item, i) => (
            <GreyoReveal key={item.key} delay={i * 55} className="h-full">
              <article className="greyo-lift flex h-full flex-col rounded-card border border-greyo-line bg-white p-7">
                <h3 className="greyo-item-title text-greyo-body">{item.name}</h3>
                <p className="greyo-text mt-2.5 text-greyo-muted">{item.body}</p>

                <p className="mt-auto pt-7">
                  {item.isMonthly ? (
                    <>
                      <span className="text-[clamp(24px,2.2vw,30px)] font-extrabold tracking-[-0.03em] text-greyo-body tabular-nums">
                        {item.fee}
                      </span>
                      <span className="ml-1.5 text-[13px] font-bold text-greyo-muted">
                        {view.feeUnit}
                      </span>
                    </>
                  ) : (
                    <span className="inline-block rounded-full bg-greyo-orange-soft px-3.5 py-1.5 text-[13px] font-bold text-greyo-orange-strong">
                      {item.fee}
                    </span>
                  )}
                </p>
              </article>
            </GreyoReveal>
          ))}
        </div>

        <GreyoReveal>
          <p className="greyo-caption mt-8 text-greyo-faint">{view.note}</p>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
