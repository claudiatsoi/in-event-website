import Link from 'next/link';

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
        <div className="fade-up mx-auto w-full max-w-5xl text-center">
          <div className="mx-auto mb-8 max-w-xl rounded-[2rem] border border-fuchsia-500/25 bg-black/35 px-5 py-5 backdrop-blur-sm md:px-8">
            <img
              src="https://www.cash.org.hk/wp-content/themes/cash/images/logo.png"
              alt="CASH logo"
              className="mx-auto w-52 drop-shadow-[0_8px_30px_rgba(193,91,175,0.35)] md:w-72"
            />
          </div>
          <h1
            className="gold-gradient mb-4 text-5xl leading-tight md:text-7xl"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            CASH Annual Dinner
          </h1>
          <p className="mb-5 text-lg uppercase tracking-[0.34em] text-stone-200/90 md:text-xl">
            Golden Sail Music Awards 2026
          </p>
          <p className="mx-auto max-w-2xl text-stone-300">
            Welcome to tonight&apos;s in-event portal. Tap the bottom navigation to view the
            performance timeline, prize candidates booklet, lucky draw prizes, live photos,
            and seating map.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/prize-candidates"
              className="rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              View Prize Candidates
            </Link>
            <Link
              href="/event-schedule"
              className="rounded-full border border-amber-400/45 px-5 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10"
            >
              Event Schedule
            </Link>
          </div>

          <div className="mx-auto mt-10 h-10 w-10 animate-bounce rounded-full border border-amber-400/60 text-amber-300">
            <span className="flex h-full items-center justify-center text-lg">⌄</span>
          </div>
        </div>
      </section>
    </main>
  );
}
