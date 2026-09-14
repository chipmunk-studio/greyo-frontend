import { useEffect, useState } from 'react';
import { GreyoWordmark } from '@greyo-frontend/design-system';
import type { LinkViewData, NavItemViewData } from '../viewData/brandPageViewData';

/** 히어로를 벗어났다고 판단하는 스크롤 임계값(px). */
const SOLID_THRESHOLD = 64;

interface SiteHeaderProps {
  nav: readonly NavItemViewData[];
  cta: LinkViewData;
}

/**
 * sticky 헤더 — 히어로(다크) 위에선 투명·흰 글자, 스크롤하면 흰 배경으로 전환한다.
 * 앵커 활성 표시는 IntersectionObserver 로 계산한다.
 */
export function SiteHeader({ nav, cta }: SiteHeaderProps) {
  const [solid, setSolid] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > SOLID_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // 뷰포트 상단 30% 지점을 지나는 섹션을 활성으로 본다.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <header className="greyo-header" data-solid={solid}>
      <div className="greyo-shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="shrink-0" aria-label="GREYO 홈">
          <GreyoWordmark size="20px" />
        </a>

        <div className="flex items-center gap-8">
          <nav aria-label="섹션 바로가기">
            <ul className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="greyo-navlink"
                    data-active={activeId === item.id}
                    aria-current={activeId === item.id ? 'true' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={cta.href}
            className={`greyo-btn greyo-btn--sm ${solid ? 'greyo-btn--outline' : 'greyo-btn--ghost'}`}
          >
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
