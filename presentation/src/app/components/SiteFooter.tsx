import { GreyoShell, GreyoWordmark } from '@greyo-frontend/design-system';
import type { FooterViewData } from '../viewData/brandPageViewData';

interface SiteFooterProps {
  view: FooterViewData;
}

/** 푸터 — 법인 정보 확정 전까지는 워드마크·태그라인·저작권만 둔다. */
export function SiteFooter({ view }: SiteFooterProps) {
  return (
    <footer className="bg-greyo-ink pt-14 pb-16">
      <GreyoShell>
        <div className="flex flex-col gap-8 border-t border-greyo-ink-line pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <GreyoWordmark size="22px" className="text-white" />
            <p className="mt-3 text-[13px] text-white/45">{view.tagline}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-[12px] text-white/30">{view.legalNote}</p>
            <p className="mt-2 text-[12px] text-white/35">{view.copyright}</p>
          </div>
        </div>
      </GreyoShell>
    </footer>
  );
}
