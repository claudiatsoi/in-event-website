const officialPdf =
  'https://cdn.cash.org.hk/wp-content/uploads/2025/11/03161004/2025-CASH%E5%91%A8%E5%B9%B4%E6%99%9A%E5%AE%B4%E6%9A%A8%E9%87%91%E5%B8%86%E9%9F%B3%E6%A8%82%E7%8D%8E%E9%A0%92%E7%8D%8E%E5%85%B8%E7%A6%AE_%E4%BD%9C%E5%93%81%E5%8F%8A%E6%BC%94%E5%87%BA%E8%80%85%E8%B3%87%E6%96%99_251103.pdf';

const highlights = [
  {
    title: '候選作品 Nominee Works',
    description: 'Selected nominee details are shown directly below for quick mobile viewing during the event.',
  },
  {
    title: '演出者 Performer Info',
    description: 'Key performer and production notes are now native on the page, not only inside the PDF.',
  },
  {
    title: '下載小冊子 Download Booklet',
    description: 'Guests can still open or download the full official booklet anytime from this page.',
  },
];

const featuredWorks = [
  {
    title: '女聲與大提琴《蓮台詠嘆》',
    subtitle: 'Soprano & Cello – The Glory of the Lotus Seat',
    credits: [
      '作曲 / 作詞 Composer & Lyricist: 羅永暉 Law Wing Fai',
      '女高音 Soprano: 嚴翊樺 Margaret Yim',
      '大提琴 Cellist: 羅詠媞 Wendy Law',
    ],
    description:
      '《蓮台詠嘆》為《人淡如菊》的段落，以水月觀音端坐蓮花座上的靜觀意境，展現靈山勝水的畫面與沉思氣質。',
  },
  {
    title: '《希望》 “Hope”',
    subtitle: 'The Hong Kong Children’s Choir Intermediate 3A',
    credits: [
      '作曲 Composer: 羅永暉 Law Wing Fai',
      '作詞 Lyricist: 鄭國江 Cheng Kok Kong',
      '指揮 Conductor: 阮慧玲 Viola Yuen',
      '鋼琴 Pianist: 劉建安 Kenneth Lau',
      '導師 Tutor: 劉灝顯 Kelvin Lau',
    ],
    description:
      '由香港兒童合唱團演繹的《希望》以明亮溫暖的歌詞與旋律，傳達和平、成長與共享光芒的願景。',
  },
];

const performerHighlights = [
  {
    name: '嚴翊樺 Margaret Yim',
    role: 'Vocalist / Music Educator',
    description:
      '著名聲樂家及音樂教育家，曾主演多部西洋歌劇、現代室內歌劇及羅永暉教授多套原創作品。',
  },
  {
    name: '羅詠媞 Wendy Law',
    role: 'Cellist',
    description:
      '曾與紐約愛樂、波士頓交響樂團及香港小交響樂團等合作演出，活躍於國際舞台。',
  },
  {
    name: '阮慧玲 Viola Yuen',
    role: 'Conductor / Composer',
    description:
      '活躍於作曲、編曲、指揮及合唱工作，擅長人聲創作與跨界音樂製作。',
  },
  {
    name: '香港兒童合唱團 The Hong Kong Children’s Choir',
    role: 'Featured Choir',
    description:
      '成立於1969年，為香港首隊兒童合唱團之一，現已成為全球規模最大的兒童合唱團之一。',
  },
];

const finalistLineup = [
  '馬瑋謙 DidaBoy',
  '爵躍 Jazzclectic',
  '陸尉俊 Vincent Luk',
  '黃彥康 Nate Wong',
  '朱峻樂 Jerold Chu',
  '黃觀富 Fabien Wong',
  '黃駿彥 Jerry Wong',
  '孫梓文 Ken Suen',
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
            Selected nominee and performer information is now displayed directly on the website for quick viewing,
            while the full official booklet remains available to open or download anytime.
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

        <div className="mb-8 rounded-3xl border border-amber-500/25 bg-amber-950/10 p-5 md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-stone-100">Native Candidate Highlights</h2>
              <p className="text-sm text-stone-400">Selected information from the official booklet, optimized for mobile reading.</p>
            </div>
            <span className="rounded-full border border-amber-500/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-amber-300">
              On-page info
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredWorks.map((work) => (
              <article key={work.title} className="glass-card rounded-2xl border border-white/10 p-5">
                <p className="mb-1 text-xs uppercase tracking-[0.28em] text-fuchsia-300">Featured work</p>
                <h3 className="text-xl font-semibold text-stone-100">{work.title}</h3>
                <p className="mb-3 text-sm text-stone-400">{work.subtitle}</p>
                <p className="mb-4 text-sm leading-6 text-stone-300">{work.description}</p>
                <ul className="space-y-2 text-sm text-stone-200">
                  {work.credits.map((credit) => (
                    <li key={credit} className="rounded-xl border border-white/8 bg-black/25 px-3 py-2">
                      {credit}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
          <article className="glass-card rounded-3xl border border-white/10 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-stone-100">Performer Highlights</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {performerHighlights.map((person) => (
                <div key={person.name} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold text-white">{person.name}</p>
                  <p className="mb-2 text-xs uppercase tracking-[0.22em] text-fuchsia-300">{person.role}</p>
                  <p className="text-sm text-stone-300">{person.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-3xl border border-white/10 p-5 md:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-stone-100">CASH Best Song Finalist Line-up</h2>
            <ul className="space-y-2 text-sm text-stone-200">
              {finalistLineup.map((name) => (
                <li key={name} className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/20 px-3 py-2">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-stone-400">
              For the full shortlist, full biographies, and complete performer notes, please use the official booklet below.
            </p>
          </article>
        </div>

        <div className="glass-card gold-border gold-glow rounded-3xl p-3 md:p-4">
          <div className="mb-3 flex items-center justify-between gap-3 px-2">
            <div>
              <h2 className="text-xl font-semibold text-stone-100">Official Candidates Booklet</h2>
              <p className="text-sm text-stone-400">Embedded preview plus download access for the full booklet.</p>
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
