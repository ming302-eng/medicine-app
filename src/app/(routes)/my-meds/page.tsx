export default function MyMedsPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-md px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">내 약</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          병명/진단/복용 이유는 입력하지 않아요. (Phase 1에서 구현)
        </p>
      </header>

      <a className="text-sm text-[var(--color-primary)]" href="/">
        홈으로
      </a>
    </main>
  );
}

