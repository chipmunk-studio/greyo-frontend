import type { HTMLAttributes, ReactNode } from 'react';

export type GreyoCardVariant = 'plain' | 'filled' | 'accent' | 'dark';

/** GreyoCard props — div 속성 확장. */
export interface GreyoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** plain = 흰 배경 + hairline, filled = 회색, accent = 피치, dark = 잉크. */
  variant?: GreyoCardVariant;
}

/** variant → 수식 클래스. 값 자체는 greyo.css 가 정의한다. */
const VARIANT: Record<GreyoCardVariant, string> = {
  plain: '',
  filled: 'greyo-card--filled',
  accent: 'greyo-card--accent',
  dark: 'greyo-card--dark',
};

/** 시안 전반에서 반복되는 라운드 카드. */
export function GreyoCard({
  children,
  variant = 'plain',
  className = '',
  ...rest
}: GreyoCardProps) {
  return (
    <div className={`greyo-card ${VARIANT[variant]} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
