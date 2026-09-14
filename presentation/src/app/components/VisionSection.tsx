import { ArrowRightIcon } from '@greyo-frontend/assets';
import {
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { VisionViewData } from '../viewData/brandPageViewData';

interface VisionSectionProps {
  view: VisionViewData;
}

/** 비전 — 확장 단계와 브랜드 선언으로 페이지를 닫는다. */
export function VisionSection({ view }: VisionSectionProps) {
  return (
    <section id="vision" className="greyo-on-dark greyo-section bg-greyo-ink">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-panel bg-greyo-ink-line sm:grid-cols-4">
            {view.expansion.map((step, i) => (
              <li key={step.title} className="bg-greyo-ink px-6 py-8">
                <div className="flex items-center gap-2">
                  <span className="text-[clamp(20px,2.1vw,26px)] font-extrabold text-white">
                    {step.title}
                  </span>
                  {i < view.expansion.length - 1 && (
                    <ArrowRightIcon className="text-white/25 sm:hidden" />
                  )}
                </div>
                <p className="mt-2 text-[13px] leading-[1.6] text-white/50">{step.body}</p>
              </li>
            ))}
          </ol>
        </GreyoReveal>

        <GreyoReveal>
          {/* 섹션 eyebrow 가 이미 Vision 이라 라벨을 다시 쓰지 않는다. */}
          <div className="mt-16 border-t border-greyo-ink-line pt-14">
            <p className="text-[clamp(28px,4.2vw,54px)] leading-[1.3] font-extrabold tracking-[-0.03em] text-white">
              {renderRichText(view.statement.title)}
            </p>
            <p className="mt-5 max-w-[58ch] text-[clamp(14px,1.3vw,17px)] leading-[1.75] text-white/55">
              {view.statement.body}
            </p>
          </div>
        </GreyoReveal>

        <GreyoReveal>
          <div className="mt-20">
            <p className="text-[clamp(15px,1.4vw,19px)] text-white/50">{view.closingLine}</p>
            <p className="mt-3 text-[clamp(40px,7vw,96px)] leading-none font-extrabold tracking-[-0.04em] text-greyo-orange">
              {view.closingQuote}
            </p>
          </div>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
