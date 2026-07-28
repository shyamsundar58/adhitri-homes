import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const scrollToProjects = () => {
        document
            .getElementById("projects")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <section
            id="home"
            className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    className="absolute inset-0 bg-cover bg-center pointer-events-none"
                    style={{
                        backgroundImage: `url(${heroImages[currentImage]})`,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 1,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1.08,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                />
            </AnimatePresence>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            {/* Hero Content */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                className="relative z-20 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-16 md:pt-20"
            >
                <p className="text-gold uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm font-medium mb-3 sm:mb-6">
                    Premium Construction & Architecture
                </p>

                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-serif leading-tight max-w-4xl">
                    Building Spaces
                    <br />
                    That Inspire Living
                </h1>

                <p className="text-gray-300 mt-4 sm:mt-8 text-sm sm:text-base md:text-lg max-w-[320px] sm:max-w-2xl mx-auto line-clamp-3 sm:line-clamp-none">
                    We design and construct exceptional residential and commercial spaces with timeless architecture and superior craftsmanship.
                </p>

                {/* Buttons */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                    <button
                        onClick={scrollToProjects}
                        className="w-full sm:w-auto px-8 sm:px-10 h-[52px] sm:h-auto sm:py-4 bg-gold text-black uppercase tracking-[3px] text-xs sm:text-sm font-medium hover:bg-white transition-all duration-300"
                    >
                        Explore Projects
                    </button>

                    <button
                        onClick={scrollToContact}
                        className="w-full sm:w-auto px-8 sm:px-10 h-[52px] sm:h-auto sm:py-4 border border-white text-white uppercase tracking-[3px] text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Book A Visit
                    </button>
                </div>
            </motion.div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-[3px] transition-all duration-500 ${
                            currentImage === index ? "w-12 bg-gold" : "w-6 bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}