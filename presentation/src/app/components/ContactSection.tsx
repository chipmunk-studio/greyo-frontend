import { GreyoEyebrow, GreyoReveal, GreyoShell } from '@greyo-frontend/design-system';
import type { ContactViewData } from '../viewData/brandPageViewData';

interface ContactSectionProps {
  view: ContactViewData;
}

/** 문의 — 기업 페이지가 반드시 줘야 할 다음 행동. */
export function ContactSection({ view }: ContactSectionProps) {
  return (
    <section id="contact" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <GreyoEyebrow label={view.eyebrow} />
              <h2 className="mt-5 text-[clamp(28px,3.6vw,46px)] leading-[1.25] font-extrabold tracking-[-0.03em] text-greyo-body">
                {view.heading}
              </h2>
              <p className="greyo-text mt-4 text-greyo-muted">{view.lead}</p>
            </div>

            <a href={`mailto:${view.email}`} className="greyo-btn greyo-btn--primary shrink-0">
              {view.emailLabel}
            </a>
          </div>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
