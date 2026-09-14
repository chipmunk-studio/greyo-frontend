import { GreyoEyebrow, GreyoReveal, GreyoShell } from '@greyo-frontend/design-system';
import type { ClosingContent } from '@greyo-frontend/entities';

interface ClosingSectionProps {
  content: ClosingContent;
}

/** 09 Closing — 브랜딩소개서 마지막 장. 다크 배경 + 대형 인용. */
export function ClosingSection({ content }: ClosingSectionProps) {
  return (
    <section className="greyo-on-dark greyo-section bg-greyo-ink">
      <GreyoShell>
        <GreyoReveal>
          <GreyoEyebrow label={content.eyebrow} />

          <p className="mt-10 text-[clamp(30px,5.2vw,72px)] leading-[1.22] font-extrabold tracking-[-0.03em] text-white">
            {content.headingLine1}
            <br />
            {content.headingLine2}
            <br />
            <span className="text-greyo-orange">{content.quote}</span>
          </p>

          <p className="mt-10 text-[clamp(14px,1.4vw,19px)] text-white/55">
            {content.subBefore}
            <strong className="font-bold text-white">{content.subStrong}</strong>
            <span className="font-bold text-greyo-orange">{content.subAccent}</span>
          </p>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
