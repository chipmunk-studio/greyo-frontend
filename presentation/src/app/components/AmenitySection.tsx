import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { AmenityViewData } from '../viewData/brandPageViewData';

interface AmenitySectionProps {
  view: AmenityViewData;
}

/** 어메니티 라인업 — 이름·설명·요금. 가격표라 행으로 읽히는 게 가장 빠르다. */
export function AmenitySection({ view }: AmenitySectionProps) {
  return (
    <section id="amenity" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <ul className="greyo-rule-list mt-14 border-t border-greyo-line">
            {view.items.map((item) => (
              <li
                key={item.key}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="greyo-item-title w-[13rem] shrink-0 text-greyo-body">
                  {item.name}
                </span>

                <span className="greyo-text flex-1 text-greyo-muted">{item.body}</span>

                <span className="shrink-0 sm:w-40 sm:text-right">
                  {item.isMonthly ? (
                    <>
                      <span className="text-[clamp(20px,1.9vw,25px)] font-extrabold tracking-[-0.02em] text-greyo-body tabular-nums">
                        {item.fee}
                      </span>
                      <span className="ml-1 text-[13px] font-bold text-greyo-muted">
                        {view.feeUnit}
                      </span>
                    </>
                  ) : (
                    <span className="greyo-caption font-bold text-greyo-orange-strong">
                      {item.fee}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <p className="greyo-caption mt-6 text-greyo-faint">{view.note}</p>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
