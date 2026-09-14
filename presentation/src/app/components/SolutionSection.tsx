import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
} from '@greyo-frontend/design-system';
import type { AmenitySwap, LivingScope } from '@greyo-frontend/entities';
import type { SolutionViewData } from '../viewData/brandPageViewData';

interface SolutionSectionProps {
  view: SolutionViewData;
}

/** 결핍 → 어메니티 치환 카드. 좌우 컬럼이 같은 모양을 공유한다. */
function SwapCard({ swap }: { swap: AmenitySwap }) {
  return (
    <GreyoCard variant="accent" className="h-full">
      <p className="text-[12px] font-semibold text-greyo-muted">{swap.from} →</p>
      <h3 className="mt-2 text-[17px] font-bold text-greyo-orange-strong">{swap.title}</h3>
      <p className="mt-1.5 text-[13px] text-greyo-muted">{swap.body}</p>
    </GreyoCard>
  );
}

/** 중앙 다크 패널의 한 축(내 방 / 내 집). */
function ScopeBlock({ scope, accent }: { scope: LivingScope; accent?: boolean }) {
  return (
    <>
      <p
        className={`text-[11px] font-bold tracking-[0.14em] uppercase ${
          accent ? 'text-greyo-orange' : 'text-white/45'
        }`}
      >
        {scope.label}
      </p>
      <p
        className={`mt-3 font-extrabold tracking-[-0.02em] text-white ${
          accent ? 'text-[clamp(20px,2.3vw,29px)]' : 'text-[clamp(26px,3vw,38px)]'
        }`}
      >
        {scope.title}
      </p>
      <p className="mt-2 text-[13px] text-white/55">{scope.body}</p>
    </>
  );
}

/** 05 The Solution — 내 방/내 집 중앙 패널 + 어메니티 치환 6종 + 설계 3원칙. */
export function SolutionSection({ view }: SolutionSectionProps) {
  return (
    <section className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_1.15fr_1fr]">
          <div className="grid gap-4">
            {view.leftSwaps.map((swap, i) => (
              <GreyoReveal key={swap.from} delay={i * 80}>
                <SwapCard swap={swap} />
              </GreyoReveal>
            ))}
          </div>

          <GreyoReveal delay={60} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-panel bg-greyo-ink px-8 py-12 text-center">
              <ScopeBlock scope={view.room} />
              <div className="my-8 h-px bg-greyo-ink-line" />
              <ScopeBlock scope={view.home} accent />
            </div>
          </GreyoReveal>

          <div className="grid gap-4">
            {view.rightSwaps.map((swap, i) => (
              <GreyoReveal key={swap.from} delay={i * 80}>
                <SwapCard swap={swap} />
              </GreyoReveal>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {view.principles.map((principle, i) => (
            <GreyoReveal key={principle.num} delay={i * 90}>
              <GreyoCard variant="filled" className="h-full">
                <p className="text-[11px] font-bold tracking-[0.12em] text-greyo-orange uppercase">
                  {principle.num} — {principle.label}
                </p>
                <h3 className="mt-3 text-[19px] font-bold text-greyo-body">{principle.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-greyo-muted">{principle.body}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
