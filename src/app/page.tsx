import Link from 'next/link';

export default function Home() {
  const features = [
    {
      href: '/event-schedule',
      title: 'Event Schedule',
      description: 'View the performance program and event timeline',
      icon: '📅',
    },
    {
      href: '/lucky-draw',
      title: 'Lucky Draw Prize',
      description: 'Track and display information about lucky draw prizes',
      icon: '🎁',
    },
    {
      href: '/photos',
      title: 'Photo Gallery',
      description: 'Browse photos from the event',
      icon: '📸',
    },
    {
      href: '/translation',
      title: 'Live Translation',
      description: 'Real-time translation for attendees',
      icon: '🌐',
    },
    {
      href: '/seating-plan',
      title: 'Seating Plan',
      description: 'View your assigned seating arrangement',
      icon: '💺',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Annual Dinner 2026</h1>
          <p className="text-xl opacity-90">
            Join us for an elegant evening of celebration and connection
          </p>
          <div className="mt-4 text-gray-200">
            <p>📍 Venue Details Coming Soon</p>
            <p>⏰ Mark Your Calendar</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Event Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Welcome to Our Annual Celebration
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            This year's annual dinner promises to be our most memorable yet. With exciting
            performances, interactive activities, and networking opportunities, we look
            forward to celebrating together. Use the navigation above to explore event
            details, check your seating arrangement, and access translation services.
          </p>
        </div>
      </section>
    </main>
  );
}
