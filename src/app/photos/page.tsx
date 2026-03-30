export default function PhotosPage() {
  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up text-center">
        <h1
          className="gold-gradient mb-3 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Live Event Photos
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-stone-300">
          Our photographers are uploading photos in real-time. Access the official gallery below.
        </p>

        <article className="glass-card gold-border gold-glow mx-auto max-w-3xl rounded-3xl p-8 md:p-10">
          <div className="mb-6 text-5xl text-amber-400">◉</div>
          <p className="mb-8 text-stone-200">
            Browse all event photos, highlights, and stage moments from tonight&apos;s annual dinner.
          </p>
          <a
            href="https://www.vphoto.cn/gallery"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full rounded-full bg-gradient-to-r from-amber-600 to-amber-300 px-6 py-4 text-center font-bold tracking-wide text-black transition hover:brightness-105 active:scale-[0.99]"
          >
            OPEN OFFICIAL GALLERY
          </a>
          <p className="mt-4 text-xs tracking-wide text-stone-500">Powered by VPhoto AI Face Detection</p>
        </article>
      </section>
    </main>
  );
}
