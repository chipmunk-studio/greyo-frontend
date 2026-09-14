import { GreyoEyebrow } from '../eyebrow/GreyoEyebrow';
import { GreyoHeading } from '../heading/GreyoHeading';

export interface GreyoSectionIntroProps {
  /** 섹션 번호(01~08). 히어로·클로징은 없다. */
  index?: string;
  eyebrow: string;
  /** `\n` 줄바꿈과 `**…**` 강조를 포함할 수 있다. */
  heading: string;
  lead?: string;
  as?: 'h1' | 'h2';
  className?: string;
}

/** eyebrow + 헤드라인 + 리드 묶음 — 모든 섹션이 같은 도입부 리듬을 갖게 한다. */
export function GreyoSectionIntro({
  index,
  eyebrow,
  heading,
  lead,
  as,
  className = '',
}: GreyoSectionIntroProps) {
  return (
    <header className={className}>
      <GreyoEyebrow index={index} label={eyebrow} />
      <GreyoHeading text={heading} as={as} />
      {lead && <p className="greyo-lead">{lead}</p>}
    </header>
  );
}
