import {
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
  renderRichText,
} from '@greyo-frontend/design-system';
import type { BusinessViewData } from '../viewData/brandPageViewData';

interface BusinessSectionProps {
  view: BusinessViewData;
}

/**
 * 사업 — 주거 멤버십 모델.
 * 중앙에 카드를 놓는 덱 레이아웃 대신, '방 → 집' 전환을 큰 타이포 한 번으로 보여주고
 * 치환 목록은 from → to 두 열 리스트로 편다.
 */
export function BusinessSection({ view }: BusinessSectionProps) {
  return (
    <section id="business" className="greyo-on-dark greyo-section bg-greyo-ink">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        {/* 방은 그대로, 집이 커진다 — 사업 모델의 핵심 한 컷. */}
        <GreyoReveal>
          <div className="mt-16 grid items-center gap-8 border-y border-greyo-ink-line py-12 sm:grid-cols-[auto_1fr] sm:gap-14">
            <div>
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">
                {view.room.label}
              </p>
              <p className="mt-3 text-[clamp(26px,3.2vw,40px)] font-extrabold tracking-[-0.02em] text-white">
                {view.room.title}
              </p>
              <p className="mt-2 text-[13px] text-white/50">{view.room.body}</p>
            </div>

            <div className="border-t border-greyo-ink-line pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-14">
              <p className="text-[11px] font-bold tracking-[0.14em] text-greyo-orange uppercase">
                {view.home.label}
              </p>
              <p className="mt-3 text-[clamp(26px,3.2vw,40px)] font-extrabold tracking-[-0.02em] text-white">
                {view.home.title}
              </p>
              <p className="mt-2 text-[13px] text-white/50">{view.home.body}</p>
            </div>
          </div>
        </GreyoReveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <GreyoReveal>
            <p className="greyo-block-label text-white/40">{view.swapsLabel}</p>
            <ul className="greyo-rule-list mt-5">
              {view.swaps.map((swap) => (
                <li
                  key={swap.from}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-[8.5rem] shrink-0 text-[13px] text-white/40 line-through">
                    {swap.from}
                  </span>
                  <span>
                    <span className="block text-[16px] font-bold text-greyo-orange">
                      {swap.title}
                    </span>
                    <span className="mt-1 block text-[13px] text-white/50">{swap.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </GreyoReveal>

          <GreyoReveal delay={120}>
            <p className="greyo-block-label text-white/40">{view.principlesLabel}</p>
            <ul className="greyo-rule-list mt-5">
              {view.principles.map((principle) => (
                <li key={principle.key} className="py-6">
                  <p className="text-[18px] font-bold text-white">{principle.title}</p>
                  <p className="mt-2 text-[14px] leading-[1.75] text-white/55">
                    {renderRichText(principle.body)}
                  </p>
                </li>
              ))}
            </ul>
          </GreyoReveal>
        </div>
      </GreyoShell>
    </section>
  );
}
