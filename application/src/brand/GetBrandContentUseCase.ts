import type { BrandContent } from '@greyo-frontend/entities';
import type { BrandContentRepository } from './BrandContentRepository';

/** 브랜드 소개 페이지 렌더에 필요한 콘텐츠 전량을 가져온다. */
export class GetBrandContentUseCase {
  constructor(private readonly repository: BrandContentRepository) {}

  execute(): BrandContent {
    return this.repository.getBrandContent();
  }
}
