import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

export default function CallFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-[94px] md:bottom-[100px] right-[24px] pb-[safe-area-inset-bottom] z-[999]"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip (Desktop only) */}
      <div
        className={`hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap shadow-xl border border-white/10 transition-opacity duration-300 pointer-events-none ${showTooltip ? 'opacity-100' : 'opacity-0'
          }`}
      >
        Call Us
      </div>

      {/* Button */}
      <a
        href="tel:+919443764949"
        className="flex items-center justify-center rounded-full bg-[#2563EB] text-white shadow-2xl hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-108 cursor-pointer animate-custom-pulse-slow w-[54px] h-[54px] md:w-[60px] md:h-[60px]"
        aria-label="Call Adhitri Homes"
      >
        <FaPhoneAlt className="text-xl md:text-2xl" />
      </a>
    </div>
  );
}
