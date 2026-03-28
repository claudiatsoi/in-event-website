'use client';

import { useState } from 'react';

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Placeholder photos - replace with actual event photos
  const photos = [
    {
      id: 1,
      title: 'Opening Ceremony',
      category: 'Ceremony',
      thumbnail: '📷',
    },
    {
      id: 2,
      title: 'Dinner Service',
      category: 'Food & Beverages',
      thumbnail: '🍽️',
    },
    {
      id: 3,
      title: 'Performance Act 1',
      category: 'Entertainment',
      thumbnail: '🎭',
    },
    {
      id: 4,
      title: 'Performance Act 2',
      category: 'Entertainment',
      thumbnail: '🎵',
    },
    {
      id: 5,
      title: 'Lucky Draw',
      category: 'Grand Prize',
      thumbnail: '🎁',
    },
    {
      id: 6,
      title: 'Networking & Mingling',
      category: 'Social',
      thumbnail: '👥',
    },
  ];

  const categories = ['All', 'Ceremony', 'Food & Beverages', 'Entertainment', 'Grand Prize', 'Social'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Event Photos
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Capture the memorable moments from our annual dinner
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo.id)}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden hover:-translate-y-2"
            >
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {photo.thumbnail}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600">
                  {photo.title}
                </h3>
                <p className="text-sm text-gray-600">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Linktree Integration Info */}
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">📸 Full Photo Gallery</h2>
          <p className="text-blue-800 mb-4">
            Access our complete photo gallery and share memories with fellow attendees:
          </p>
          <div className="bg-white p-6 rounded border border-blue-300 text-center">
            <p className="text-gray-700 mb-4">
              For the full resolution photos and easy sharing capabilities, visit our
              Linktree page:
            </p>
            <p className="text-gray-600 italic">
              [Linktree link will be updated here before the event]
            </p>
          </div>
        </div>

        {/* Sharing Info */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-900 mb-4">📱 Share Your Memories</h3>
          <p className="text-purple-800 mb-4">
            Use #AnnualDinner2026 when sharing photos on social media to connect with
            other attendees and be featured in our official gallery.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Facebook
            </button>
            <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Instagram
            </button>
            <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
