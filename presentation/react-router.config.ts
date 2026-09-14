import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  // 원페이지 정적 사이트 — 빌드 시 실제 본문이 담긴 HTML 을 생성해
  // 검색엔진·OG 스크레이퍼가 빈 hydration 셸을 보지 않게 한다.
  prerender: ['/'],
} satisfies Config;
