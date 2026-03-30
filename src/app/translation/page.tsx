'use client';

import { useState } from 'react';

export default function TranslationPage() {
  const [speech, setSpeech] = useState('歡迎各位出席今晚的作曲家及作詞家協會週年晚宴...');

  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up">
        <h1
          className="gold-gradient mb-2 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Live Translation
        </h1>
        <p className="mb-8 text-stone-300">Real-time support for guests who do not speak Chinese.</p>

        <article className="glass-card gold-border rounded-3xl p-6 md:p-8">
          <label className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Current Speech (AI Detected)
          </label>
          <textarea
            value={speech}
            onChange={(event) => setSpeech(event.target.value)}
            className="mt-2 mb-6 min-h-28 w-full rounded-xl border border-white/10 bg-black/40 p-4 text-stone-100 focus:border-amber-400 focus:outline-none"
          />

          <label className="text-xs uppercase tracking-[0.24em] text-amber-500">English Translation</label>
          <div className="mt-2 rounded-xl border border-white/10 bg-black p-4 text-stone-200">
            Welcome to tonight&apos;s Composers and Authors Society of Hong Kong annual dinner.
            We are honored to have you here for this celebration.
          </div>
        </article>

        <button className="mt-6 w-full rounded-xl border border-amber-500 py-3 font-semibold text-amber-500 transition hover:bg-amber-500/10">
          Listen to Audio Feed
        </button>
      </section>
    </main>
  );
}
