export default function QuickCheckPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-md px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">대신 약 사주기</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          약 이름을 검색하거나, 스캔으로 입력할 수 있어요. 결과는 “가능성” 안내이며
          확정 판정이 아니에요.
        </p>
      </header>

      <section className="space-y-3">
        <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-4">
          <div className="text-base font-semibold">약 입력</div>
          <div className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Phase 1에서 검색/스캔/비교까지 연결합니다.
          </div>
        </div>

        <a className="text-sm text-[var(--color-primary)]" href="/">
          홈으로
        </a>
      </section>
    </main>
  );
}

