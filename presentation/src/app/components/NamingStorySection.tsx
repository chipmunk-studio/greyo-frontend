import {
  GreyoCard,
  GreyoReveal,
  GreyoSectionIntro,
  GreyoShell,
} from '@greyo-frontend/design-system';
import type { NamingStoryViewData } from '../viewData/brandPageViewData';

interface NamingStorySectionProps {
  view: NamingStoryViewData;
}

/** 02 Naming Story — 질문/답변 말풍선 + 일상어 브랜드 비교 + 네이밍 기준 4종. */
export function NamingStorySection({ view }: NamingStorySectionProps) {
  return (
    <section id="naming" className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro {...view.intro} />
        </GreyoReveal>

        <GreyoReveal>
          <div className="mt-14 rounded-panel bg-white p-8 sm:p-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              <p className="w-20 shrink-0 text-[11px] font-bold tracking-[0.14em] text-greyo-faint uppercase">
                {view.questionLabel}
              </p>
              <p className="rounded-2xl border border-greyo-line px-6 py-4 text-[clamp(15px,1.5vw,19px)] font-semibold text-greyo-body">
                {view.question}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              <p className="w-20 shrink-0 text-[11px] font-bold tracking-[0.14em] text-greyo-faint uppercase">
                {view.answerLabel}
              </p>
              <p className="rounded-2xl bg-greyo-orange px-6 py-4 text-[clamp(15px,1.5vw,19px)] font-bold text-white">
                {view.answer}
              </p>
            </div>
          </div>
        </GreyoReveal>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {view.peers.map((peer, i) => (
            <GreyoReveal key={peer.name} delay={i * 70}>
              <GreyoCard variant={peer.isBrand ? 'dark' : 'plain'} className="h-full text-center">
                <p
                  className={`text-[18px] font-extrabold ${peer.isBrand ? 'text-greyo-orange' : 'text-greyo-body'}`}
                >
                  {peer.name}
                </p>
                <p
                  className={`mt-2 text-[13px] ${peer.isBrand ? 'text-white/60' : 'text-greyo-muted'}`}
                >
                  {peer.scope}
                </p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {view.criteria.map((criterion, i) => (
            <GreyoReveal key={criterion.label} delay={i * 70}>
              <GreyoCard className="h-full">
                <p className="text-[11px] font-bold tracking-[0.12em] text-greyo-orange uppercase">
                  {criterion.label}
                </p>
                <h3 className="mt-3 text-[17px] font-bold text-greyo-body">{criterion.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-greyo-muted">{criterion.body}</p>
              </GreyoCard>
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
