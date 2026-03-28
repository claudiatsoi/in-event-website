export default function EventSchedulePage() {
  const schedule = [
    {
      time: '6:00 PM',
      title: 'Registration & Welcome Reception',
      description: 'Check-in and cocktail reception',
      duration: '1 hour',
    },
    {
      time: '7:00 PM',
      title: 'Dinner Service Begins',
      description: 'Multi-course dinner with wine selection',
      duration: '1.5 hours',
    },
    {
      time: '8:30 PM',
      title: 'Opening Remarks',
      description: 'Welcome address and event highlights',
      duration: '15 minutes',
    },
    {
      time: '8:45 PM',
      title: 'Performance 1: Classical Dance',
      description: 'Traditional cultural performance',
      duration: '20 minutes',
    },
    {
      time: '9:05 PM',
      title: 'Performance 2: Live Music',
      description: 'Jazz ensemble entertainment',
      duration: '25 minutes',
    },
    {
      time: '9:30 PM',
      title: 'Lucky Draw Presentation',
      description: 'Drawing of lucky prizes',
      duration: '30 minutes',
    },
    {
      time: '10:00 PM',
      title: 'Open Networking',
      description: 'Mingle and enjoy desserts',
      duration: '1 hour',
    },
    {
      time: '11:00 PM',
      title: 'Event Conclusion',
      description: 'Thank you remarks and farewell',
      duration: 'TBD',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Event Schedule
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Performance Program & Timeline
        </p>

        <div className="space-y-4">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-6">
                <div className="min-w-fit">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                    {item.time}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{item.duration}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Event Details</h2>
          <ul className="space-y-2 text-blue-900">
            <li>✨ <strong>Dress Code:</strong> Formal/Black Tie Optional</li>
            <li>🕕 <strong>Event Duration:</strong> Approximately 5 hours</li>
            <li>🚗 <strong>Parking:</strong> Complimentary valet available</li>
            <li>♿ <strong>Accessibility:</strong> Please inform us in advance of any special needs</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
