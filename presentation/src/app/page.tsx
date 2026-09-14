import { container } from '@greyo-frontend/di';
import { AmenitySection } from './components/AmenitySection';
import { BusinessSection } from './components/BusinessSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { MembershipSection } from './components/MembershipSection';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { VisionSection } from './components/VisionSection';
import { buildBrandPageViewData } from './viewData/brandPageViewData';
import './greyo.css';

/**
 * / — 주식회사 그래요 기업 소개 페이지.
 *
 * 콘텐츠는 DI 를 경유해 동기로 읽는다. loader 를 쓰면 `ssr: false` 프리렌더 시점에
 * 값이 없어 HTML 이 빈 셸로 떨어진다(SEO·OG 깨짐) — 그래서 렌더 중 직접 읽는다.
 */
export default function BrandPage() {
  const view = buildBrandPageViewData(container.getBrandContent.execute());

  return (
    <div className="greyo-site">
      <SiteHeader nav={view.nav} cta={view.headerCta} />
      <main>
        <HeroSection view={view.hero} />
        <ProblemSection view={view.problem} />
        <BusinessSection view={view.business} />
        <AmenitySection view={view.amenity} />
        <MembershipSection view={view.membership} />
        <ServicesSection view={view.services} />
        <VisionSection view={view.vision} />
        <ContactSection view={view.contact} />
      </main>
      <SiteFooter view={view.footer} />
    </div>
  );
}
