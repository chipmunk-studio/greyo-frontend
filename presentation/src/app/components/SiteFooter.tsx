import { GreyoShell, GreyoWordmark } from '@greyo-frontend/design-system';
import type { FooterContent } from '@greyo-frontend/entities';

interface SiteFooterProps {
  content: FooterContent;
}

/** 푸터 — 법인 정보 확정 전까지는 워드마크·태그라인·저작권만 둔다. */
export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="border-t border-greyo-ink-line bg-greyo-ink pt-10 pb-14">
      <GreyoShell>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <GreyoWordmark size="22px" className="text-white" />
            <p className="mt-3 text-[13px] text-white/45">{content.tagline}</p>
          </div>
          <p className="text-[12px] text-white/35">{content.copyright}</p>
        </div>
      </GreyoShell>
    </footer>
  );
}
