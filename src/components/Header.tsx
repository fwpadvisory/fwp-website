import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../lib/site';
import { BookingButton } from './BookingButton';

const aqua = '#6FD7E3';

function LogoMark() {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center gap-3 text-left"
      aria-label="Family Wealth Protection Advisory — home"
    >
      <div className="relative flex h-11 w-11 items-center justify-center">
        <svg viewBox="0 0 100 110" className="h-11 w-11" aria-hidden="true">
          <path
            d="M50 5 C62 15 78 22 93 23 V53 C93 79 76 98 50 106 C24 98 7 79 7 53 V23 C22 22 38 15 50 5Z"
            fill="none"
            stroke={aqua}
            strokeWidth="10"
            strokeLinejoin="round"
          />
          <path d="M25 34 H48 V45 H25 Z" fill={aqua} />
          <path
            d="M50 66 L39 45 H51 L57 58 L70 32 H82 V47 C82 65 69 80 55 89 L50 78 L43 89 C30 80 19 64 19 51 H31 C33 62 38 70 43 75 L50 66Z"
            fill={aqua}
          />
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-base font-light tracking-[0.26em] text-[#6FD7E3] lg:text-lg lg:tracking-[0.32em]">
          FAMILY WEALTH
        </div>
        <div className="mt-1 text-[9px] font-semibold tracking-[0.34em] text-[#8FE3EC] lg:text-[10px] lg:tracking-[0.45em]">
          PROTECTION ADVISORY
        </div>
      </div>
    </a>
  );
}

interface HeaderProps {
  currentPath: string;
  bookingUrl?: string;
}

export default function Header({ currentPath, bookingUrl }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? currentPath === '/' : currentPath.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E1020]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-5 lg:px-8">
        <LogoMark />
        <nav
          className="hidden flex-1 items-center justify-center gap-3 text-sm text-white/70 md:flex lg:gap-5 xl:gap-7"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={isActive(item.href) ? 'text-[#6FD7E3]' : 'hover:text-white'}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 md:block">
          <BookingButton bookingUrl={bookingUrl} compact />
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 px-6 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4 text-left text-white/75">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={isActive(item.href) ? 'text-[#6FD7E3]' : ''}
              >
                {item.label}
              </a>
            ))}
            <BookingButton bookingUrl={bookingUrl}>Book Discovery Meeting</BookingButton>
          </div>
        </div>
      )}
    </header>
  );
}
