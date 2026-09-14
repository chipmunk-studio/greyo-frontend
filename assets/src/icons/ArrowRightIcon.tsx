import type { SVGProps } from 'react';

/** 확장 단계(공간 → 타운 → 동네 → 도시) 구분자로 쓰는 화살표. */
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        d="M3 8h10m0 0-3.5-3.5M13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
