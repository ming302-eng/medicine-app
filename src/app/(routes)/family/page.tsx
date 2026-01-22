export default function FamilyPage() {
  return (
    <main className="mx-auto min-h-dvh max-w-md px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">가족</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          가족에게는 공유된 약만 보여요(공유되지 않은 약은 존재 자체가 보이지 않아요).
          (Phase 1에서 구현)
        </p>
      </header>

      <a className="text-sm text-[var(--color-primary)]" href="/">
        홈으로
      </a>
    </main>
  );
}

