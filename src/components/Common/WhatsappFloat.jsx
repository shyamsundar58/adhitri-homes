import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="fixed bottom-[24px] right-[24px] z-[999]"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip (Desktop only) */}
      <div 
        className={`hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap shadow-xl border border-white/10 transition-opacity duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Chat with Adhitri Homes
      </div>

      {/* Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Adhitri%20Homes,%20I%20am%20interested%20in%20your%20properties.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-108 cursor-pointer animate-custom-pulse w-[54px] h-[54px] md:w-[60px] md:h-[60px]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl md:text-3xl" />
      </a>
    </div>
  );
}
