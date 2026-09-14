import { index, route, type RouteConfig } from '@react-router/dev/routes';

/** React Router Framework route manifest — 브랜드 소개 원페이지 + 404. */
export default [index('./app/page.tsx'), route('*', './app/not-found.tsx')] satisfies RouteConfig;
