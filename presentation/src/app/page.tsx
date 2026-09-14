import { container } from '@greyo-frontend/di';
import { BrandEssenceSection } from './components/BrandEssenceSection';
import { ClosingSection } from './components/ClosingSection';
import { HeroSection } from './components/HeroSection';
import { NamingStorySection } from './components/NamingStorySection';
import { NamingSystemSection } from './components/NamingSystemSection';
import { PositioningSection } from './components/PositioningSection';
import { ProblemSection } from './components/ProblemSection';
import { ServiceArchitectureSection } from './components/ServiceArchitectureSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { SolutionSection } from './components/SolutionSection';
import { VerbalIdentitySection } from './components/VerbalIdentitySection';
import './greyo.css';

/**
 * / — GREYO 브랜드 소개 원페이지.
 *
 * 콘텐츠는 DI 를 경유해 동기로 읽는다. loader 를 쓰면 `ssr: false` 프리렌더 시점에
 * 값이 없어 HTML 이 빈 셸로 떨어진다(SEO·OG 깨짐) — 그래서 렌더 중 직접 읽는다.
 */
export default function BrandPage() {
  const content = container.getBrandContent.execute();

  return (
    <div className="greyo-site">
      <SiteHeader nav={content.nav} />
      <main>
        <HeroSection hero={content.hero} />
        <BrandEssenceSection content={content.essence} />
        <NamingStorySection content={content.namingStory} />
        <PositioningSection content={content.positioning} />
        <ProblemSection content={content.problem} />
        <SolutionSection content={content.solution} />
        <NamingSystemSection content={content.namingSystem} />
        <ServiceArchitectureSection content={content.service} />
        <VerbalIdentitySection content={content.verbal} />
        <ClosingSection content={content.closing} />
      </main>
      <SiteFooter content={content.footer} />
    </div>
  );
}
