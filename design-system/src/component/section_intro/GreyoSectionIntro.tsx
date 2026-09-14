import type { SectionIntro } from '@greyo-frontend/entities';
import { GreyoEyebrow } from '../eyebrow/GreyoEyebrow';
import { GreyoHeading } from '../heading/GreyoHeading';

export interface GreyoSectionIntroProps {
  intro: SectionIntro;
  as?: 'h1' | 'h2';
  className?: string;
}

/** eyebrow + 헤드라인 + 리드 묶음 — 모든 섹션이 같은 도입부 리듬을 갖게 한다. */
export function GreyoSectionIntro({ intro, as, className = '' }: GreyoSectionIntroProps) {
  return (
    <header className={className}>
      <GreyoEyebrow index={intro.index} label={intro.eyebrow} />
      <GreyoHeading
        before={intro.headingBefore}
        accent={intro.headingAccent}
        after={intro.headingAfter}
        as={as}
      />
      {intro.lead && <p className="greyo-lead">{intro.lead}</p>}
    </header>
  );
}
