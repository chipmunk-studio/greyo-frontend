import { Fragment, type ReactNode } from 'react';

/**
 * 카피 상수의 `\n` 을 <br /> 로 치환해 렌더한다.
 * 시안의 2줄 헤드라인을 코드에서 깨지 않기 위한 공용 헬퍼.
 */
export function renderWithBreaks(text: string): ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
