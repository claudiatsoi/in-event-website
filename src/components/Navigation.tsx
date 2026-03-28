'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/event-schedule', label: 'Event Schedule' },
    { path: '/lucky-draw', label: 'Lucky Draw Prize' },
    { path: '/photos', label: 'Photos' },
    { path: '/translation', label: 'Translation' },
    { path: '/seating-plan', label: 'Seating Plan' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-2xl">
            Annual Dinner 2026
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-white text-blue-600'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
