import type { ReactNode } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import { createRootMeta } from './metadata';
import './app/globals.css';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

// JS 미사용 환경에서는 스크롤 리빌의 초기 숨김을 해제해 본문이 그대로 보이게 한다.
const NOSCRIPT_CSS = '.greyo-reveal{opacity:1!important;transform:none!important}';

export const meta = createRootMeta;

export function links() {
  return [{ rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }];
}

/** Document shell — 일반 라우트, hydration fallback, 루트 에러 바운더리가 공유한다. */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        {/* 공개 홈페이지 — 앱 웹뷰와 달리 확대를 막지 않는다(WCAG 1.4.4). */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Meta />
        <Links />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: NOSCRIPT_CSS }} />
        </noscript>
      </head>
      <body className="min-h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <div data-greyo-hydrate-fallback="root" style={{ display: 'contents' }} />;
}

export default function App() {
  return <Outlet />;
}

interface RecoveryProps {
  eyebrow: string;
  title: string;
  description: string;
}

function Recovery({ eyebrow, title, description }: RecoveryProps) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg items-center px-6 py-16">
      <section role="alert" aria-live="assertive" className="w-full text-center">
        <p className="text-xs font-bold tracking-[0.14em] text-greyo-orange uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-extrabold text-greyo-body">{title}</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-greyo-muted">{description}</p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-greyo-ink px-7 text-sm font-bold text-white"
        >
          홈으로 이동
        </a>
      </section>
    </main>
  );
}

/** 진단 정보를 노출하지 않는 접근 가능한 복구 UI. */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Recovery
          eyebrow="404"
          title="페이지를 찾을 수 없습니다"
          description="요청하신 페이지가 사라졌거나 주소가 잘못됐을 수 있어요."
        />
      );
    }

    return (
      <Recovery
        eyebrow={`요청 오류 ${error.status}`}
        title="요청을 완료하지 못했습니다"
        description="잠시 후 다시 시도해 주세요. 문제가 계속되면 홈으로 이동해 주세요."
      />
    );
  }

  return (
    <Recovery
      eyebrow="화면 오류"
      title="화면을 불러오지 못했습니다"
      description="예상하지 못한 문제가 발생했습니다. 새로고침하거나 홈에서 다시 시작해 주세요."
    />
  );
}
