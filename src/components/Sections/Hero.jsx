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
            className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
        >

            {/* Background Image Slider */}
            <AnimatePresence mode="wait">

                <motion.div
                    key={currentImage}
                    className="
            absolute
            inset-0
            bg-cover
            bg-center
            pointer-events-none
          "

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
            <div
                className="
          absolute
          inset-0
          bg-black/60
          pointer-events-none
        "
            />


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

                className="
          relative
          z-20
          text-center
          px-6
          max-w-5xl
        "
            >

                <p
                    className="
            text-gold
            uppercase
            tracking-[6px]
            text-sm
            mb-6
          "
                >
                    Premium Construction & Architecture
                </p>


                <h1
                    className="
            text-white
            text-5xl
            md:text-7xl
            font-serif
            leading-tight
          "
                >
                    Building Spaces
                    <br />
                    That Inspire Living
                </h1>


                <p
                    className="
            text-gray-300
            mt-8
            text-lg
            max-w-2xl
            mx-auto
          "
                >
                    We design and construct exceptional residential
                    and commercial spaces with timeless architecture
                    and superior craftsmanship.
                </p>


                {/* Buttons */}
                <div
                    className="
            mt-10
            flex
            justify-center
            gap-6
            flex-wrap
          "
                >

                    <button
                        onClick={scrollToProjects}
                        className="
              px-10
              py-4
              bg-gold
              text-black
              uppercase
              tracking-[3px]
              text-sm
              font-medium
              hover:bg-white
              transition-all
              duration-300
            "
                    >
                        Explore Projects
                    </button>


                    <button
                        onClick={scrollToContact}
                        className="
              px-10
              py-4
              border
              border-white
              text-white
              uppercase
              tracking-[3px]
              text-sm
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
                    >
                        Book A Visit
                    </button>

                </div>

            </motion.div>


            {/* Slider Indicators */}
            <div
                className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          flex
          gap-3
          z-30
        "
            >

                {heroImages.map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}

                        className={`
              h-[3px]
              transition-all
              duration-500

              ${currentImage === index
                                ? "w-12 bg-gold"
                                : "w-6 bg-white/50"
                            }
            `}
                    />

                ))}

            </div>


        </section>
    );
}