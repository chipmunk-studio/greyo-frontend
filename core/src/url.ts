/** 유효하지 않은 base 는 폴백으로 흡수한다 — 메타 생성이 런타임에 죽지 않게. */
export function normalizeSiteUrl(configured: string | undefined, fallback: string): string {
  try {
    return new URL(configured || fallback).toString();
  } catch {
    return fallback;
  }
}

/** 상대 경로를 사이트 절대 URL 로 승격한다. OG·canonical 은 절대 URL 이어야 한다. */
export function absoluteUrl(path: string, siteUrl: string): string {
  return new URL(path, siteUrl).toString();
}
