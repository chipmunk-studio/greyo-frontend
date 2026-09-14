import { useEffect, useRef, useState, type ReactNode } from 'react';

export interface GreyoRevealProps {
  children: ReactNode;
  /** 순차 등장 지연(ms). 그리드 아이템에 인덱스별로 준다. */
  delay?: number;
  className?: string;
}

/**
 * 뷰포트 진입 시 1회 페이드업.
 * 초기 숨김·`prefers-reduced-motion`·noscript 해제는 greyo.css 와 root.tsx 가 담당한다.
 */
export function GreyoReveal({ children, delay = 0, className = '' }: GreyoRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <div
      ref={ref}
      className={`greyo-reveal ${className}`.trim()}
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
