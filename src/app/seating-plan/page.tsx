'use client';

import { useMemo, useState } from 'react';

type TableInfo = {
  id: string;
  names: string[];
};

export default function SeatingPlanPage() {
  const [query, setQuery] = useState('');

  const tables = useMemo<TableInfo[]>(
    () => [
      { id: 'T1', names: ['Mr. Wong', 'Ms. Chan', 'Mr. Lau'] },
      { id: 'T2', names: ['Ms. Lee', 'Mr. Yip', 'Ms. Cheung'] },
      { id: 'T3', names: ['Mr. Ho', 'Ms. Tsang', 'Mr. Lam'] },
      { id: 'T4', names: ['Ms. Choi', 'Mr. Ng', 'Ms. Yeung'] },
      { id: 'T5', names: ['Mr. Leung', 'Ms. Poon', 'Mr. Tang'] },
      { id: 'T6', names: ['Ms. Ma', 'Mr. So', 'Ms. Kwan'] },
      { id: 'T7', names: ['Mr. Lui', 'Ms. Tam', 'Mr. Hui'] },
      { id: 'T8', names: ['Ms. Fung', 'Mr. Chow', 'Ms. Yuen'] },
    ],
    []
  );

  const visibleTables = tables.filter((table) => {
    if (!query.trim()) {
      return true;
    }

    const normalized = query.toLowerCase();
    return (
      table.id.toLowerCase().includes(normalized) ||
      table.names.some((name) => name.toLowerCase().includes(normalized))
    );
  });

  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up">
        <h1
          className="gold-gradient mb-2 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Seating Plan
        </h1>
        <p className="mb-8 text-stone-300">Search your name or table number to locate your seat quickly.</p>

        <div className="relative mb-6">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search your name or table..."
            className="w-full rounded-full border border-white/10 bg-zinc-900/85 py-3 pl-5 pr-10 text-stone-100 focus:border-amber-500 focus:outline-none"
          />
          <span className="pointer-events-none absolute right-4 top-3.5 text-stone-500">⌕</span>
        </div>

        <div className="glass-card rounded-3xl border border-white/10 p-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {visibleTables.map((table) => (
              <article
                key={table.id}
                className="rounded-2xl border border-amber-500/25 bg-amber-900/25 px-3 py-4 text-center"
              >
                <p className="text-sm font-semibold text-amber-300">{table.id}</p>
                <p className="mt-2 text-xs text-stone-300">{table.names.join(' • ')}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-zinc-800 py-3 text-center text-sm font-bold tracking-[0.3em] text-stone-200">
            STAGE
          </div>
        </div>
      </section>
    </main>
  );
}
