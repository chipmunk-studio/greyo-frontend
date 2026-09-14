import { DEFAULT_SITE_URL, normalizeSiteUrl } from '@greyo-frontend/core';

/**
 * 환경변수 접근은 이 레이어에만 둔다 — presentation 이 import.meta.env 를 직접 읽지 않게.
 * Vite 는 VITE_ 접두 변수만 클라이언트 번들에 주입한다.
 */
export interface AppEnv {
  /** 사이트 절대 URL — canonical·OG 용. */
  siteUrl: string;
  /** 콘텐츠 API 오리진. 미설정이면 정적 데이터소스만 쓴다. */
  apiUrl: string | null;
}

export function readAppEnv(): AppEnv {
  const env = import.meta.env;
  return {
    siteUrl: normalizeSiteUrl(env.VITE_SITE_URL, DEFAULT_SITE_URL),
    apiUrl: env.VITE_API_URL?.trim() || null,
  };
}
