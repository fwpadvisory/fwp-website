import type { ReactNode } from 'react';

interface BookingButtonProps {
  bookingUrl?: string;
  compact?: boolean;
  children?: ReactNode;
}

/**
 * Discovery Meeting CTA.
 *
 * The booking link comes from PUBLIC_BOOKING_URL (env). Two conflicting links
 * exist in the source material, so we never hardcode one. Until it is set, the
 * CTA routes to /contact as a graceful fallback.
 * `data-booking-cta` is the hook for the GA4 `booking_click` event (Phase 6).
 */
export function BookingButton({
  bookingUrl,
  compact = false,
  children = 'Book Your Discovery Meeting',
}: BookingButtonProps) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#6FD7E3] font-semibold text-[#0E1020] shadow-lg shadow-[#6FD7E3]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8FE3EC]';
  const size = compact
    ? 'px-2.5 py-2 text-sm leading-none lg:px-3.5'
    : 'px-6 py-3 text-sm';

  const href = bookingUrl && bookingUrl.length > 0 ? bookingUrl : '/contact';
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`${base} ${size}`}
      data-booking-cta
    >
      {children}
    </a>
  );
}
