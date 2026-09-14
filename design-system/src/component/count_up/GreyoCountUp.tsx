import { useEffect, useRef, useState } from 'react';

export interface GreyoCountUpProps {
  /** 최종 수치. '804.5' 처럼 소수점이 있으면 자릿수를 유지한 채 센다. */
  value: string;
  /** 세는 시간(ms). */
  duration?: number;
  className?: string;
}

/** ease-out — 빠르게 올라갔다가 끝에서 부드럽게 멈춘다. */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * 뷰포트에 들어오면 0 에서 목표값까지 세어 올린다.
 *
 * 숫자가 아닌 값(빈 문자열 등)이 오면 그대로 출력한다 — 콘텐츠가 바뀌어도
 * 화면이 깨지지 않아야 한다.
 */
export function GreyoCountUp({ value, duration = 1400, className = '' }: GreyoCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = Number(value);
  const decimals = value.includes('.') ? (value.split('.')[1]?.length ?? 0) : 0;
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !Number.isFinite(target)) return;
    if (prefersReducedMotion()) return;

    let frame = 0;
    let started = false;

    const run = () => {
      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const current = target * easeOut(progress);
        setDisplay(
          current.toLocaleString('ko-KR', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }),
        );
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!started && entries.some((entry) => entry.isIntersecting)) {
          started = true;
          setDisplay((0).toFixed(decimals));
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
