'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: '⌂' },
    { path: '/event-schedule', label: 'Schedule', icon: '◷' },
    { path: '/lucky-draw', label: 'Lucky', icon: '✦' },
    { path: '/photos', label: 'Photos', icon: '▣' },
    { path: '/translation', label: 'Translate', icon: '文' },
    { path: '/seating-plan', label: 'Seats', icon: '◎' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <ul className="mx-auto flex max-w-5xl items-center justify-between gap-1 px-2 py-3 text-[10px] uppercase tracking-wide text-stone-400">
        {navLinks.map((link) => (
          <li key={link.path} className="flex-1">
            <Link
              href={link.path}
              className={`flex w-full flex-col items-center rounded-lg px-1 py-1.5 transition ${
                isActive(link.path)
                  ? 'text-amber-300 shadow-[inset_0_2px_0_0_#fcd34d]'
                  : 'hover:text-stone-200'
              }`}
            >
              <span className="mb-1 text-base leading-none">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
