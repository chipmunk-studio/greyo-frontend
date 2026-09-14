/** 매칭되지 않은 경로 — 루트 ErrorBoundary 와 같은 톤의 복구 화면. */
export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg items-center px-6 py-16">
      <section className="w-full text-center">
        <p className="text-xs font-bold tracking-[0.14em] text-greyo-orange uppercase">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-greyo-body">페이지를 찾을 수 없습니다</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-greyo-muted">
          요청하신 페이지가 사라졌거나 주소가 잘못됐을 수 있어요.
        </p>
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
