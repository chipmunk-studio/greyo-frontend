import type { BrandContentRepository } from '@greyo-frontend/application';
import type { BrandContent } from '@greyo-frontend/entities';
import { STATIC_BRAND_CONTENT } from './staticBrandContent';

/**
 * 번들 내장 정적 콘텐츠로 리포지토리 계약을 만족시키는 구현.
 * 서버가 없는 현 단계의 유일한 구현이다.
 */
export class StaticBrandContentRepository implements BrandContentRepository {
  getBrandContent(): BrandContent {
    return STATIC_BRAND_CONTENT;
  }
}
