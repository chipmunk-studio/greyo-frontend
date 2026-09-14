import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { ServicesViewData } from '../viewData/brandPageViewData';

interface ServicesSectionProps {
  view: ServicesViewData;
}

/** 사업 확장 영역 — 훑어 읽는 목록이라 카드보다 행이 빠르다. */
export function ServicesSection({ view }: ServicesSectionProps) {
  return (
    <section id="services" className="greyo-on-dark greyo-section bg-greyo-ink">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <ul className="greyo-rule-list mt-14 border-t border-greyo-ink-line">
            {view.items.map((item) => (
              <li
                key={item.key}
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="greyo-item-name w-[11rem] shrink-0 text-white">{item.name}</span>
                <span className="greyo-text flex-1 text-white/60">{item.body}</span>
              </li>
            ))}
          </ul>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
