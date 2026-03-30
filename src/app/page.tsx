export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-awards-ceremony-light-show-13012-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/45 to-[#0a0a0a]" />

      <section className="section-shell flex items-center justify-center px-6">
        <div className="fade-up mx-auto w-full max-w-4xl text-center">
          <img
            src="https://www.cash.org.hk/wp-content/themes/cash/images/logo.png"
            alt="CASH logo"
            className="mx-auto mb-8 w-24 brightness-0 invert md:w-32"
          />
          <h1
            className="gold-gradient mb-4 text-5xl leading-tight md:text-7xl"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            CASH Annual Dinner
          </h1>
          <p className="mb-5 text-lg uppercase tracking-[0.34em] text-stone-200/90 md:text-xl">
            Golden Sail Music Awards 2026
          </p>
          <p className="mx-auto max-w-2xl text-stone-300">
            Welcome to tonight&apos;s in-event portal. Tap the bottom navigation to view the
            performance timeline, lucky draw prizes, live photos, translation support,
            and seating map.
          </p>

          <div className="mx-auto mt-10 h-10 w-10 animate-bounce rounded-full border border-amber-400/60 text-amber-300">
            <span className="flex h-full items-center justify-center text-lg">⌄</span>
          </div>
        </div>
      </section>
    </main>
  );
}
