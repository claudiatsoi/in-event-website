'use client';

import { useState } from 'react';

export default function TranslationPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'zh'>('en');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    // Note: In production, integrate with a real translation API
    // For now, showing placeholder functionality
    setTranslatedText(`[Translated to ${selectedLanguage === 'en' ? 'English' : 'Chinese'}]: ${inputText}`);
  };

  const commonPhrases = [
    {
      en: 'Good evening, welcome to our annual dinner.',
      zh: '晚上好，欢迎来到我们的年度晚宴。',
      category: 'Greetings',
    },
    {
      en: 'Thank you for joining us.',
      zh: '感谢您加入我们。',
      category: 'Greetings',
    },
    {
      en: 'This is delicious!',
      zh: '真好吃！',
      category: 'Food',
    },
    {
      en: 'Where is the restroom?',
      zh: '洗手间在哪里？',
      category: 'Directions',
    },
    {
      en: 'Cheers to a wonderful evening!',
      zh: '为美好的夜晚干杯！',
      category: 'Toasts',
    },
    {
      en: 'The performance was amazing!',
      zh: '表演太精彩了！',
      category: 'Entertainment',
    },
    {
      en: 'Nice to meet you.',
      zh: '很高兴认识你。',
      category: 'Social',
    },
    {
      en: 'What is your name?',
      zh: '你叫什么名字？',
      category: 'Social',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Live Translation
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Real-time translation support for attendees - English & Chinese
        </p>

        {/* Translation Tool */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Translation Tool</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                English Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Output */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Chinese Translation
              </label>
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg bg-gray-50 resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleTranslate}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Translate
          </button>

          <p className="text-xs text-gray-600 mt-4 text-center">
            💡 Tip: This tool provides quick reference translations. For real-time event
            interpretation, live translators will be available.
          </p>
        </div>

        {/* Common Phrases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Event Phrases</h2>

          <div className="grid gap-4">
            {commonPhrases.map((phrase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
              >
                <div className="text-sm font-semibold text-blue-600 mb-3">
                  {phrase.category}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                      English
                    </p>
                    <p className="text-gray-900 font-medium">{phrase.en}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                      Chinese (中文)
                    </p>
                    <p className="text-gray-900 font-medium">{phrase.zh}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">🎙️ Live Translators</h3>
            <p className="text-blue-800">
              Professional interpreters will be present throughout the event to assist
              with real-time translation and language support.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-3">📱 Mobile Support</h3>
            <p className="text-purple-800">
              Use this translation tool on your mobile device during the event for quick
              reference when needed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
