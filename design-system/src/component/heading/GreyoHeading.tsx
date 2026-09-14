import { renderRichText } from '../../foundation/text';

export interface GreyoHeadingProps {
  /** `\n` 줄바꿈과 `**…**` 강조를 포함할 수 있는 헤드라인 문자열. */
  text: string;
  as?: 'h1' | 'h2';
  className?: string;
}

/** 섹션 대제목. 강조 구간은 `<em>` 으로 나오고 색은 greyo.css 가 준다. */
export function GreyoHeading({ text, as: Tag = 'h2', className = '' }: GreyoHeadingProps) {
  return <Tag className={`greyo-heading ${className}`.trim()}>{renderRichText(text)}</Tag>;
}
