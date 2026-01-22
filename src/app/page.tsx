export default function HomePage() {
  return (
    <main className="mx-auto min-h-dvh max-w-md px-4 py-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold">홈</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          본 서비스는 의료 조언이 아닌 참고 정보예요. 복용/구매 전 약사·의사와
          상담하세요.
        </p>
      </header>

      <section className="space-y-3">
        <a
          className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] px-4 py-4 text-white"
          href="/quick-check"
        >
          <div className="text-base font-semibold">대신 약 사주기(빠른 확인)</div>
          <div className="mt-1 text-sm opacity-90">
            10~20초 내 결과(상태+근거+다음 행동)
          </div>
        </a>

        <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-4">
          <div className="text-base font-semibold">내 약 요약</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">
            아직 구현 전이에요(Phase 1에서 연결).
          </div>
          <a className="mt-3 inline-block text-sm text-[var(--color-primary)]" href="/my-meds">
            내 약 보러가기
          </a>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-4">
          <div className="text-base font-semibold">가족 그룹</div>
          <div className="mt-1 text-sm text-[var(--color-text-secondary)]">
            아직 구현 전이에요(Phase 1에서 연결).
          </div>
          <a className="mt-3 inline-block text-sm text-[var(--color-primary)]" href="/family">
            가족 보러가기
          </a>
        </div>
      </section>
    </main>
  );
}

