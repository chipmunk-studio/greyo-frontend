import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
} from '@greyo-frontend/design-system';
import type { ServiceContent } from '@greyo-frontend/entities';

interface ServiceArchitectureSectionProps {
  content: ServiceContent;
}

/** 07 Service Architecture — 서비스 8종 맵. */
export function ServiceArchitectureSection({ content }: ServiceArchitectureSectionProps) {
  return (
    <section id="service" className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro intro={content.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item, i) => (
            <GreyoReveal key={item.num} delay={i * 60} className="h-full">
              <GreyoCard variant="filled" className="relative h-full overflow-hidden">
                <span className="greyo-ghost-num" aria-hidden>
                  {item.num}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[13px] font-semibold text-greyo-muted">그래요</span>
                    <span className="text-[10px] font-bold tracking-[0.1em] text-greyo-faint uppercase">
                      {item.roman}
                    </span>
                  </div>

                  <h3 className="mt-2 text-[22px] font-extrabold tracking-[-0.02em] text-greyo-body">
                    {item.name}
                    <span className="text-greyo-orange">.</span>
                  </h3>

                  <p className="mt-3 max-w-[24ch] text-[14px] leading-[1.65] text-greyo-muted">
                    {item.body}
                  </p>

                  <span className="mt-8 w-fit rounded-full bg-greyo-orange-soft px-3.5 py-1.5 text-[12px] font-bold text-greyo-orange-strong">
                    {item.tag}
                  </span>
                </div>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
