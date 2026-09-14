import type { ReactNode } from 'react';

export interface GreyoShellProps {
  children: ReactNode;
  className?: string;
}

/** 최대 1200px 중앙 정렬 컨테이너 — 모든 섹션의 내부 폭을 통일한다. */
export function GreyoShell({ children, className = '' }: GreyoShellProps) {
  return <div className={`greyo-shell ${className}`.trim()}>{children}</div>;
}
