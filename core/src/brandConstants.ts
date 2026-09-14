/** 브랜드 식별 상수 — 메타데이터·푸터·구조화 데이터가 공유한다(드리프트 방지). */
export const BRAND_NAME_KO = '그래요';

export const BRAND_NAME_EN = 'GREYO';

export const BRAND_NAME = `${BRAND_NAME_KO} ${BRAND_NAME_EN}`;

export const BRAND_TAGLINE = '일상을 연결하는 어반 테크 기업';

export const BRAND_DESCRIPTION =
  '먹고, 자고, 사는 일상의 모든 문제를 기술로 해결하는 어반 테크 라이프스타일 기업. 하나의 앱, 하나의 멤버십으로 공간과 서비스를 연결합니다.';

/** 커스텀 도메인 확정 전까지의 폴백. 배포 후 VITE_SITE_URL 로 덮어쓴다. */
export const DEFAULT_SITE_URL = 'https://greyo-frontend.vercel.app';

/**
 * 법인 정보 — 사업자등록증 기준.
 *
 * 법인등록번호는 일부러 두지 않는다. 전자상거래법상 표시 의무 항목이 아니고
 * 공개 페이지에 노출할 이유도 없다. 웹 푸터에는 상호·대표자·사업자등록번호·주소만 싣는다.
 */
export const COMPANY_INFO = {
  legalName: '주식회사 그래요',
  legalNameEn: 'GREYO Corp.',
  representative: '박윤경',
  businessNumber: '276-87-03959',
  address: '서울특별시 성동구 송정18가길 13-8, 101호',
} as const;
