export default function EventSchedulePage() {
  const schedule = [
    {
      time: "18:30",
      title: "Cocktail Reception",
      detail: "Grand Ballroom Foyer",
      active: true,
    },
    {
      time: "19:30",
      title: "Opening Performance",
      detail: "Symphony Orchestra Ensemble",
      active: false,
    },
    {
      time: "20:15",
      title: "Golden Sail Awards Presentation",
      detail: "Part I: Hall of Fame",
      active: false,
    },
    {
      time: "21:00",
      title: "Dinner Service & Networking",
      detail: "Signature Four-Course Menu",
      active: false,
    },
    {
      time: "22:00",
      title: "Lucky Draw Sessions",
      detail: "Multiple Rounds with Live Winners",
      active: false,
    },
  ];

  return (
    <main className="section-shell pb-28">
      <section className="section-container fade-up">
        <h1
          className="gold-gradient mb-2 text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Event Schedule
        </h1>
        <p className="mb-10 text-stone-300">Performance program and evening timeline.</p>

        <div className="glass-card gold-border rounded-3xl p-6 md:p-8">
          <div className="ml-2 space-y-8 border-l border-amber-800/50 pl-6">
            {schedule.map((item) => (
              <div key={item.time} className="relative">
                <span
                  className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full ${
                    item.active
                      ? "bg-amber-500 shadow-[0_0_12px_#f59e0b]"
                      : "bg-zinc-700"
                  }`}
                />
                <p className={item.active ? "font-bold text-amber-400" : "font-bold text-stone-400"}>
                  {item.time}
                </p>
                <h2 className="text-xl text-stone-100">{item.title}</h2>
                <p className="text-sm text-stone-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
