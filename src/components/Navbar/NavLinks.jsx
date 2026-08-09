import { useEffect, useState } from "react";

const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Why Us", id: "why-choose" },
    { name: "Projects", id: "projects" },
    { name: "Construction", id: "construction" },
    { name: "Contact", id: "contact" },
];

export default function NavLinks() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const headerOffset = 120;

            let currentSection = "home";
            let closestDistance = Infinity;

            links.forEach((item) => {
                const section = document.getElementById(item.id);

                if (!section) return;

                const rect = section.getBoundingClientRect();

                // Section has reached the navbar area
                if (
                    rect.top <= headerOffset &&
                    rect.bottom > headerOffset
                ) {
                    const distance = Math.abs(rect.top - headerOffset);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        currentSection = item.id;
                    }
                }
            });

            // When we're at the very top
            if (window.scrollY < 100) {
                currentSection = "home";
            }

            setActiveSection(currentSection);
        };

        // Run once when page loads
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const headerOffset = 100;

        const sectionPosition =
            section.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
        });

        // Immediately highlight the clicked section
        setActiveSection(id);
    };

    return (
        <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                        group
                        relative
                        uppercase
                        text-sm
                        tracking-[3px]
                        font-medium
                        transition-colors
                        duration-300
                        cursor-pointer

                        ${
                            activeSection === item.id
                                ? "text-gold"
                                : "text-white"
                        }
                    `}
                >
                    <span
                        className={`
                            transition-colors
                            duration-300

                            ${
                                activeSection === item.id
                                    ? "text-gold"
                                    : "group-hover:text-gold"
                            }
                        `}
                    >
                        {item.name}
                    </span>

                    <span
                        className={`
                            absolute
                            left-0
                            -bottom-2
                            h-[2px]
                            bg-gold
                            transition-all
                            duration-300

                            ${
                                activeSection === item.id
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }
                        `}
                    />
                </button>
            ))}
        </nav>
    );
}