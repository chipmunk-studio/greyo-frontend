import { GreyoReveal, GreyoSectionIntro, GreyoShell } from '@greyo-frontend/design-system';
import type { NamingBranch, NamingSystemContent } from '@greyo-frontend/entities';

interface NamingSystemSectionProps {
  content: NamingSystemContent;
}

interface BranchCardProps {
  branch: NamingBranch;
  /** 마스터 브랜드(그래요)는 다크 카드로 강조한다. */
  master?: boolean;
}

/** 어족 카드 — 마스터와 서브 브랜드가 같은 골격을 공유하고 톤만 다르다. */
function BranchCard({ branch, master = false }: BranchCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-panel p-7 ${
        master ? 'bg-greyo-ink' : 'border border-greyo-line bg-white'
      }`}
    >
      <p className="text-[11px] font-bold tracking-[0.14em] text-greyo-orange uppercase">
        {branch.label}
      </p>

      <p className="mt-4 flex items-baseline gap-2">
        <span
          className={`text-[26px] font-extrabold tracking-[-0.02em] ${master ? 'text-white' : 'text-greyo-body'}`}
        >
          {branch.name}
        </span>
        <span
          className={`text-[12px] font-bold tracking-[0.08em] ${master ? 'text-white/45' : 'text-greyo-faint'}`}
        >
          {branch.roman}
        </span>
      </p>

      <p
        className={`mt-3 text-[14px] leading-[1.7] ${master ? 'text-white/65' : 'text-greyo-muted'}`}
      >
        {branch.body}
      </p>

      <div className={`my-5 h-px ${master ? 'bg-greyo-ink-line' : 'bg-greyo-line'}`} />

      <p
        className={`text-[11px] font-bold tracking-[0.12em] uppercase ${
          master ? 'text-white/40' : 'text-greyo-faint'
        }`}
      >
        {branch.listLabel}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {branch.list.map((item) => (
          <li
            key={item}
            className={`flex gap-2 text-[14px] ${master ? 'text-white/80' : 'text-greyo-body'}`}
          >
            <span className="text-greyo-orange" aria-hidden>
              •
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-8">
        <span
          className={`inline-block rounded-full px-3.5 py-1.5 text-[12px] font-bold ${
            master
              ? 'bg-greyo-orange/15 text-greyo-orange'
              : 'bg-greyo-orange-soft text-greyo-orange-strong'
          }`}
        >
          {branch.tag}
        </span>
      </p>
    </div>
  );
}

/** 06 Naming System — 어족(語族) 마스터 + 서브 브랜드 4종. */
export function NamingSystemSection({ content }: NamingSystemSectionProps) {
  return (
    <section className="greyo-section bg-greyo-surface">
      <GreyoShell>
        <GreyoReveal>
          <GreyoSectionIntro intro={content.intro} />
        </GreyoReveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.25fr_repeat(4,1fr)]">
          <GreyoReveal className="h-full">
            <BranchCard branch={content.master} master />
          </GreyoReveal>
          {content.branches.map((branch, i) => (
            <GreyoReveal key={branch.name} delay={(i + 1) * 80} className="h-full">
              <BranchCard branch={branch} />
            </GreyoReveal>
          ))}
        </div>
      </GreyoShell>
    </section>
  );
}
