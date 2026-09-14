import type { BrandContent } from '@greyo-frontend/entities';

/**
 * 브랜드 소개 콘텐츠 공급 계약.
 *
 * 동기(sync)인 이유 — 현 단계 콘텐츠는 번들에 내장된 정적 데이터이고, 사이트는
 * `ssr: false` + `prerender` 로 빌드된다. 비동기로 두면 프리렌더 시점에 값이 없어
 * HTML 에 본문이 박히지 않고(= 검색엔진·OG 스크레이퍼가 빈 셸을 봄) SEO 가 깨진다.
 *
 * CMS·API 도입 시에는 이 계약을 async 로 바꾸는 대신 `ssr: true` + 빌드타임 loader 로
 * 전환한다 — 그래야 프리렌더 HTML 에 원격 콘텐츠가 그대로 들어간다. 어느 쪽이든
 * presentation 컴포넌트는 `BrandContent` 를 props 로 받을 뿐이라 바뀌지 않는다.
 */
export interface BrandContentRepository {
  getBrandContent(): BrandContent;
}
