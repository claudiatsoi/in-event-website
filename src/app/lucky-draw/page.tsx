export default function LuckyDrawPage() {
  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up">
        <h1
          className="gold-gradient mb-2 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Lucky Draw
        </h1>
        <p className="mb-8 text-stone-300">Track prizes and live winner updates.</p>

        <article className="glass-card gold-border gold-glow mb-6 rounded-3xl p-6">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000"
            alt="Grand prize"
            className="mb-5 h-56 w-full rounded-2xl object-cover"
          />
          <h2 className="text-2xl font-semibold text-stone-100">Grand Prize: Rolex Cosmograph Daytona</h2>
          <p className="mt-1 text-amber-400">Value: HK$250,000</p>
        </article>

        <article className="glass-card rounded-2xl border border-white/10 p-5">
          <h3 className="mb-4 text-xs uppercase tracking-[0.28em] text-stone-500">Live Winner Ticker</h3>
          <div className="space-y-2 text-sm text-stone-200">
            <p>
              <span className="text-amber-400">Table 14:</span> Mr. Wong (3rd Prize)
            </p>
            <p>
              <span className="text-amber-400">Table 02:</span> Ms. Lee (5th Prize)
            </p>
            <p>
              <span className="text-amber-400">Table 19:</span> Mr. Chan (2nd Prize)
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
