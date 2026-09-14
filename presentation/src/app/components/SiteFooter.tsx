import { GreyoShell, GreyoWordmark } from '@greyo-frontend/design-system';
import type { FooterViewData } from '../viewData/brandPageViewData';

interface SiteFooterProps {
  view: FooterViewData;
}

/** 푸터 — 워드마크와 법인 정보. 법인등록번호는 공개 항목이 아니라 싣지 않는다. */
export function SiteFooter({ view }: SiteFooterProps) {
  const { company } = view;

  return (
    <footer className="bg-greyo-ink pt-14 pb-16">
      <GreyoShell>
        <div className="flex flex-col gap-10 border-t border-greyo-ink-line pt-10 lg:flex-row lg:justify-between">
          <div>
            <GreyoWordmark size="22px" className="text-white" />
            <p className="mt-3 text-[13px] text-white/45">{view.tagline}</p>
          </div>

          <address className="text-[12px] leading-[1.9] text-white/40 not-italic">
            <p className="font-bold text-white/60">{company.legalName}</p>
            <p>
              {company.representativeLabel} {company.representative}
              <span className="mx-2 text-white/20" aria-hidden>
                |
              </span>
              {company.businessNumberLabel} {company.businessNumber}
            </p>
            <p>{company.address}</p>
            <p className="mt-3 text-white/30">{view.copyright}</p>
          </address>
        </div>
      </GreyoShell>
    </footer>
  );
}
