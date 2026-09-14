import { Fragment, type ReactNode } from 'react';

/** `**…**` 강조 구간을 찾는 패턴. 캡처 그룹을 둬 split 결과에 본문이 남게 한다. */
const EMPHASIS = /\*\*(.+?)\*\*/g;

/**
 * 카피 문자열을 렌더 가능한 노드로 바꾼다.
 *
 * - `\n` → `<br />` (시안의 2줄 헤드라인을 코드에서 깨지 않기 위함)
 * - `**…**` → `<em>` (의미상 '강조 구간'. 무슨 색으로 그릴지는 CSS 가 정한다)
 *
 * 콘텐츠는 강조 여부만 표기하고 색은 모른다 — 그래서 파서가 여기(design-system)에 있다.
 */
export function renderRichText(text: string): ReactNode {
  const lines = text.split('\n');

  return lines.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {renderEmphasis(line)}
      {lineIndex < lines.length - 1 && <br />}
    </Fragment>
  ));
}

/** 한 줄 안의 `**…**` 만 처리한다. */
function renderEmphasis(line: string): ReactNode {
  // split 은 캡처 그룹 때문에 [평문, 강조, 평문, 강조, …] 순으로 나온다.
  const parts = line.split(EMPHASIS);
  if (parts.length === 1) return line;

  return parts.map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
  );
}
