import { GetBrandContentUseCase } from '@greyo-frontend/application';
import {
  readAppEnv,
  StaticBrandContentRepository,
  type AppEnv,
} from '@greyo-frontend/infrastructure';

/** presentation 이 사용할 수 있는 유스케이스·환경 묶음. */
export interface AppContainer {
  env: AppEnv;
  getBrandContent: GetBrandContentUseCase;
}

/**
 * 합성 루트 — 구현체 선택은 오직 여기서 일어난다.
 *
 * 콘텐츠 API 가 생기면 `env.apiUrl` 유무로 Http 구현과 정적 구현을 가르면 된다.
 * presentation 은 이 함수 바깥의 어떤 구현도 알지 못한다.
 */
export function createContainer(): AppContainer {
  const env = readAppEnv();
  const brandContentRepository = new StaticBrandContentRepository();

  return {
    env,
    getBrandContent: new GetBrandContentUseCase(brandContentRepository),
  };
}

/** 앱 전역 싱글턴 — 모듈 로드 시 1회 조립. */
export const container: AppContainer = createContainer();
