import { renderWithBreaks } from '../../foundation/text';

export interface GreyoHeadingProps {
  before: string;
  /** 브랜드 오렌지로 강조되는 핵심 어구. */
  accent?: string;
  after?: string;
  as?: 'h1' | 'h2';
  className?: string;
}

/** 섹션 대제목. `before`/`after` 안의 `\n` 은 줄바꿈으로 렌더한다. */
export function GreyoHeading({
  before,
  accent,
  after,
  as: Tag = 'h2',
  className = '',
}: GreyoHeadingProps) {
  return (
    <Tag className={`greyo-heading ${className}`.trim()}>
      {renderWithBreaks(before)}
      {accent && <em>{accent}</em>}
      {after && renderWithBreaks(after)}
    </Tag>
  );
}
