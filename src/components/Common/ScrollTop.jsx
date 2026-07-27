import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[164px] md:bottom-[176px] right-[24px] z-[999] flex items-center justify-center rounded-full bg-black text-white shadow-2xl hover:bg-[#D4AF37] transition-all duration-300 hover:scale-108 cursor-pointer w-[54px] h-[54px] md:w-[60px] md:h-[60px] border border-white/10 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl md:text-2xl" />
    </button>
  );
}
