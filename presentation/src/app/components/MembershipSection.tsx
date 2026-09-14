import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { MembershipViewData } from '../viewData/brandPageViewData';

interface MembershipSectionProps {
  view: MembershipViewData;
}

/**
 * 멤버십 조합 — 페이지에서 카드를 쓰는 유일한 곳.
 * 나란히 놓고 금액을 비교하는 화면이라 카드 경계가 실제로 일을 한다.
 */
export function MembershipSection({ view }: MembershipSectionProps) {
  return (
    <section id="membership" className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3">
          {view.plans.map((plan, i) => (
            <GreyoReveal key={plan.key} delay={i * 90} className="h-full">
              <div
                className={`greyo-lift flex h-full flex-col rounded-panel p-8 ${
                  plan.featured
                    ? 'greyo-lift--dark border border-greyo-ink-line bg-greyo-ink text-white'
                    : 'border border-greyo-line bg-greyo-surface'
                }`}
              >
                <p
                  className={`greyo-label ${
                    plan.featured ? 'text-greyo-orange' : 'text-greyo-faint'
                  }`}
                >
                  {plan.label}
                </p>

                <p className="mt-5 flex items-baseline gap-1">
                  {plan.isFree ? (
                    <span
                      className={`text-[clamp(22px,2.2vw,28px)] font-extrabold tracking-[-0.02em] ${
                        plan.featured ? 'text-white' : 'text-greyo-body'
                      }`}
                    >
                      {plan.fee}
                    </span>
                  ) : (
                    <>
                      <span
                        className={`text-[15px] font-bold ${
                          plan.featured ? 'text-white/50' : 'text-greyo-muted'
                        }`}
                      >
                        {view.feePrefix}
                      </span>
                      <span
                        className={`text-[clamp(30px,3.2vw,42px)] leading-none font-extrabold tracking-[-0.03em] tabular-nums ${
                          plan.featured ? 'text-greyo-orange' : 'text-greyo-body'
                        }`}
                      >
                        {plan.fee}
                      </span>
                      <span
                        className={`text-[15px] font-bold ${
                          plan.featured ? 'text-white/50' : 'text-greyo-muted'
                        }`}
                      >
                        {view.feeUnit}
                      </span>
                    </>
                  )}
                </p>

                <p
                  className={`greyo-item-title mt-6 leading-[1.45] ${
                    plan.featured ? 'text-white' : 'text-greyo-body'
                  }`}
                >
                  {plan.title}
                </p>
                <p
                  className={`greyo-text mt-3 ${
                    plan.featured ? 'text-white/60' : 'text-greyo-muted'
                  }`}
                >
                  {plan.body}
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${
                    plan.featured ? 'border-greyo-ink-line' : 'border-greyo-line'
                  }`}
                >
                  <p
                    className={`text-[12px] font-bold tracking-[0.06em] ${
                      plan.featured ? 'text-white/40' : 'text-greyo-faint'
                    }`}
                  >
                    {view.includesLabel}
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className={`greyo-text flex gap-2 ${
                          plan.featured ? 'text-white/80' : 'text-greyo-body'
                        }`}
                      >
                        <span className="text-greyo-orange" aria-hidden>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GreyoReveal>
          ))}
        </div>

        {/* 집 안 렌탈 — 집 밖 어메니티와 함께 '이사 초기비용 0' 을 만드는 축. */}
        <GreyoReveal>
          <div className="mt-14 border-t border-greyo-line pt-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="greyo-label text-greyo-muted">{view.rentalLabel}</p>
              <p className="greyo-caption text-greyo-muted">{view.rentalNote}</p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-12 gap-y-5">
              {view.rentals.map((module) => (
                <li key={module.key} className="flex items-baseline gap-3">
                  <span className="greyo-item-title text-greyo-body">{module.name}</span>
                  <span className="text-[clamp(19px,1.7vw,22px)] font-extrabold text-greyo-body tabular-nums">
                    {module.fee}
                  </span>
                  <span className="text-[13px] font-bold text-greyo-muted">
                    {view.feeUnit} / 월
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
