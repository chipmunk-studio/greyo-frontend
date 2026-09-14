import type { HTMLAttributes } from 'react';

/** GreyoWordmark props — span 속성 확장. */
export interface GreyoWordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** 글자 크기(CSS 길이). 점 크기는 em 기준이라 자동으로 따라온다. */
  size?: string;
}

/**
 * `GREYO.` 워드마크 — 점만 브랜드 오렌지.
 * 공식 로고 SVG 확보 전까지의 조판 구현이다(Pretendard 800 + 원형 점).
 */
export function GreyoWordmark({
  size = '20px',
  className = '',
  style,
  ...rest
}: GreyoWordmarkProps) {
  return (
    <span
      className={`greyo-wordmark ${className}`.trim()}
      style={{ fontSize: size, ...style }}
      aria-label="GREYO"
      {...rest}
    >
      GREYO
      <i className="greyo-wordmark__dot" aria-hidden />
    </span>
  );
}
