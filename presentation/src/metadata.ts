import { absoluteUrl, BRAND_DESCRIPTION, BRAND_NAME, BRAND_TAGLINE } from '@greyo-frontend/core';
import { container } from '@greyo-frontend/di';

export const ROOT_TITLE = `${BRAND_NAME} — ${BRAND_TAGLINE}`;

interface CompleteMetadataOptions {
  title: string;
  description: string;
  pagePath: string;
  imagePath: string;
  imageAlt: string;
  openGraphTitle?: string;
}

/**
 * 완전한 메타데이터 세트를 반환한다. React Router 는 최종 매칭 라우트의 meta 만 쓰므로
 * 하위 라우트는 부모 메타 병합에 기대지 말고 이 헬퍼를 호출해야 한다.
 *
 * skel-frontend 의 동명 헬퍼와 달리 robots 는 `index, follow` — 공개 홈페이지다.
 */
export function createCompleteMetadata({
  title,
  description,
  pagePath,
  imagePath,
  imageAlt,
  openGraphTitle = title,
}: CompleteMetadataOptions) {
  const { siteUrl } = container.env;
  const pageUrl = absoluteUrl(pagePath, siteUrl);
  const imageUrl = absoluteUrl(imagePath, siteUrl);

  return [
    { title },
    { name: 'description', content: description },
    { name: 'application-name', content: BRAND_NAME },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#111214' },
    { tagName: 'link', rel: 'canonical', href: pageUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: BRAND_NAME },
    { property: 'og:locale', content: 'ko_KR' },
    { property: 'og:url', content: pageUrl },
    { property: 'og:title', content: openGraphTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: openGraphTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
  ];
}

/** 루트 메타데이터 — 원페이지라 사실상 사이트 전체 메타다. */
export function createRootMeta() {
  return createCompleteMetadata({
    title: ROOT_TITLE,
    description: BRAND_DESCRIPTION,
    pagePath: '/',
    imagePath: '/og.png',
    imageAlt: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
  });
}
