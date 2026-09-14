import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { ServicesViewData } from '../viewData/brandPageViewData';

interface ServicesSectionProps {
  view: ServicesViewData;
}

/**
 * 서비스 라인 — 덱의 8장 카드 그리드를 편집형 리스트로 바꿨다.
 * 사업 영역 목록은 훑어 읽는 정보라 카드보다 행이 빠르다.
 */
export function ServicesSection({ view }: ServicesSectionProps) {
  return (
    <section id="services" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <ul className="greyo-rule-list mt-14 border-t border-greyo-line">
            {view.items.map((item) => (
              <li
                key={item.num}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-2 py-7 sm:grid-cols-[auto_minmax(0,15rem)_1fr_auto] sm:gap-x-8"
              >
                <span className="text-[13px] font-bold text-greyo-faint tabular-nums">
                  {item.num}
                </span>

                <span className="flex flex-wrap items-baseline gap-x-2.5">
                  <span className="text-[13px] text-greyo-muted">{view.brandPrefix}</span>
                  <span className="text-[clamp(19px,1.9vw,24px)] font-extrabold tracking-[-0.02em] text-greyo-body">
                    {item.name}
                    <span className="text-greyo-orange">.</span>
                  </span>
                </span>

                <span className="col-span-2 text-[14px] leading-[1.7] text-greyo-muted sm:col-span-1">
                  {item.body}
                </span>

                <span className="col-start-2 w-fit rounded-full bg-greyo-orange-soft px-3 py-1 text-[12px] font-bold text-greyo-orange-strong sm:col-start-auto">
                  {item.tag}
                </span>
              </li>
            ))}
          </ul>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
