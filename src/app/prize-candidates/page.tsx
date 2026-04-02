const officialPdf =
  'https://cdn.cash.org.hk/wp-content/uploads/2025/11/03161004/2025-CASH%E5%91%A8%E5%B9%B4%E6%99%9A%E5%AE%B4%E6%9A%A8%E9%87%91%E5%B8%86%E9%9F%B3%E6%A8%82%E7%8D%8E%E9%A0%92%E7%8D%8E%E5%85%B8%E7%A6%AE_%E4%BD%9C%E5%93%81%E5%8F%8A%E6%BC%94%E5%87%BA%E8%80%85%E8%B3%87%E6%96%99_251103.pdf';

const highlights = [
  {
    title: '候選作品 Nominee Works',
    description: 'Quick access to the official booklet for the shortlisted songs, works, and award references.',
  },
  {
    title: '演出者 Performer Info',
    description: 'Review the performer and presentation details prepared for the Golden Sail Music Awards ceremony.',
  },
  {
    title: '典禮現場參考 Ceremony Guide',
    description: 'Keep the PDF open during the dinner for a handy mobile reference while awards are announced.',
  },
];

export default function PrizeCandidatesPage() {
  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up">
        <div className="mb-8 rounded-3xl border border-fuchsia-500/25 bg-gradient-to-br from-fuchsia-950/40 via-zinc-950 to-violet-950/40 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.34em] text-fuchsia-300/80">Golden Sail Music Awards</p>
          <h1
            className="mb-3 text-4xl font-semibold text-white md:text-5xl"
            style={{ fontFamily: 'var(--font-display), serif' }}
          >
            Prize Candidates
          </h1>
          <p className="max-w-3xl text-stone-300">
            Explore the official CASH booklet for the nominated works and performer information prepared for the
            2025 Annual Dinner and Golden Sail Music Awards presentation.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={officialPdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Open Official PDF
            </a>
            <a
              href={officialPdf}
              download
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-fuchsia-400/60 hover:text-white"
            >
              Download Booklet
            </a>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl border border-white/10 p-5">
              <h2 className="mb-2 text-lg font-semibold text-stone-100">{item.title}</h2>
              <p className="text-sm text-stone-300">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="glass-card gold-border gold-glow rounded-3xl p-3 md:p-4">
          <div className="mb-3 flex items-center justify-between gap-3 px-2">
            <div>
              <h2 className="text-xl font-semibold text-stone-100">Official Candidates Booklet</h2>
              <p className="text-sm text-stone-400">Embedded preview for quick in-event viewing.</p>
            </div>
            <span className="rounded-full border border-fuchsia-500/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-fuchsia-300">
              PDF
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <iframe
              src={officialPdf}
              title="CASH Prize Candidates PDF"
              className="h-[72vh] w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
