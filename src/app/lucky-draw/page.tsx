export default function LuckyDrawPage() {
  const prizes = [
    {
      rank: 'Grand Prize',
      description: 'Luxury Weekend Getaway',
      details: '5-star resort package for 2',
      icon: '👑',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      rank: '1st Prize',
      description: 'Premium Electronics',
      details: 'Latest generation smartwatch',
      icon: '🎁',
      color: 'from-orange-400 to-orange-600',
    },
    {
      rank: '2nd Prize',
      description: 'Luxury Dining Vouchers',
      details: '$500 fine dining credit',
      icon: '🍽️',
      color: 'from-red-400 to-red-600',
    },
    {
      rank: '3rd Prize',
      description: 'Tech Accessories Bundle',
      details: 'Wireless headphones & accessories',
      icon: '🎧',
      color: 'from-pink-400 to-pink-600',
    },
    {
      rank: '4th Prize',
      description: 'Spa & Wellness Package',
      details: 'Premium spa treatment vouchers',
      icon: '💆',
      color: 'from-purple-400 to-purple-600',
    },
    {
      rank: 'Consolation Prize',
      description: 'Gift Card',
      details: '$50 shopping voucher',
      icon: '🛍️',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Lucky Draw Prizes
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Exciting prizes awaiting our lucky winners
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2`}
            >
              <div className={`bg-gradient-to-br ${prize.color} p-8 text-white min-h-64 flex flex-col justify-between`}>
                <div>
                  <div className="text-5xl mb-4">{prize.icon}</div>
                  <div className="text-sm font-semibold opacity-90">{prize.rank}</div>
                  <h3 className="text-2xl font-bold mt-2">{prize.description}</h3>
                </div>
                <p className="text-white opacity-95 text-sm">{prize.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Lucky Draw Rules & Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Eligibility:</strong> All registered attendees are automatically
              eligible for the lucky draw.
            </p>
            <p>
              <strong>Drawing Method:</strong> Winners will be selected randomly during
              the event. Tickets will be drawn sequentially for each prize category.
            </p>
            <p>
              <strong>Prize Claim:</strong> Winners will be announced and prizes
              presented immediately. Gift cards and vouchers will be distributed on the
              evening of the event.
            </p>
            <p>
              <strong>Large Prize Logistics:</strong> Grand prizes may be claimed after
              the event with proper winner verification.
            </p>
            <p>
              <strong>No Purchase Necessary:</strong> Simply attend the dinner to be
              eligible for all lucky draw prizes.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-900 mb-4">🎯 Your Chances to Win</h3>
          <p className="text-blue-800">
            With multiple prizes and all attendees eligible, you have excellent chances
            to win valuable prizes. Make sure you're present when your name is called!
          </p>
        </div>
      </div>
    </main>
  );
}
