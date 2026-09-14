import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { BrandViewData } from '../viewData/brandPageViewData';

interface BrandSectionProps {
  view: BrandViewData;
}

/**
 * 브랜드 — 이름의 성질(3원칙)·어조·어족.
 * 덱에서는 네이밍 스토리·심사 기준·버벌 가이드까지 4장이었지만, 대외 페이지에는
 * "왜 이 이름인가" 와 "어떻게 확장되는가" 두 가지면 충분하다.
 */
export function BrandSection({ view }: BrandSectionProps) {
  return (
    <section id="brand" className="greyo-section">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <ul className="mt-14 grid gap-x-12 gap-y-8 border-t border-greyo-line pt-10 md:grid-cols-3">
            {view.pillars.map((pillar) => (
              <li key={pillar.key}>
                <p className="text-[11px] font-bold tracking-[0.12em] text-greyo-orange uppercase">
                  {pillar.label}
                </p>
                <p className="mt-3 text-[18px] font-bold text-greyo-body">{pillar.title}</p>
                <p className="mt-2 text-[14px] leading-[1.75] text-greyo-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </GreyoReveal>

        {/* 어조 — 문장부호 하나로 톤이 바뀐다는 걸 타이포로만 보여준다. */}
        <GreyoReveal>
          <div className="mt-16">
            <p className="greyo-block-label">{view.tonesLabel}</p>
            <div className="mt-5 flex flex-wrap gap-x-10 gap-y-6">
              {view.tones.map((tone) => (
                <p key={tone.punctuation} className="min-w-[7.5rem]">
                  <span className="text-[clamp(22px,2.2vw,28px)] font-extrabold text-greyo-body">
                    {tone.mark}
                    <span className="text-greyo-orange">{tone.punctuation}</span>
                  </span>
                  <span className="mt-1.5 block text-[13px] text-greyo-muted">
                    {tone.title} — {tone.body}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </GreyoReveal>

        {/* 어족 — 마스터에서 서브 브랜드가 뻗어 나가는 한 줄. */}
        <GreyoReveal>
          <div className="mt-16 rounded-panel bg-greyo-surface px-7 py-9 sm:px-10">
            <p className="greyo-block-label">{view.familyLabel}</p>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-3">
              <span className="text-[clamp(24px,2.6vw,32px)] font-extrabold tracking-[-0.02em] text-greyo-body">
                {view.master.name}
              </span>
              <span className="text-[12px] font-bold tracking-[0.1em] text-greyo-faint uppercase">
                {view.master.roman}
              </span>
              <span className="rounded-full bg-greyo-orange px-3 py-1 text-[12px] font-bold text-white">
                {view.master.tag}
              </span>
            </div>

            <ul className="greyo-rule-list mt-8 border-t border-greyo-line">
              {view.branches.map((branch) => (
                <li
                  key={branch.key}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="flex w-40 shrink-0 items-baseline gap-2">
                    <span className="text-[19px] font-extrabold text-greyo-body">
                      {branch.name}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.08em] text-greyo-faint">
                      {branch.roman}
                    </span>
                  </span>
                  <span className="flex-1 text-[14px] leading-[1.7] text-greyo-muted">
                    {branch.body}
                  </span>
                  <span className="shrink-0 text-[12px] font-bold text-greyo-orange-strong">
                    {branch.tag}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-[60ch] text-[14px] leading-[1.75] text-greyo-muted">
              {view.familyNote}
            </p>
          </div>
        </GreyoReveal>
      </GreyoShell>
    </section>
  );
}
