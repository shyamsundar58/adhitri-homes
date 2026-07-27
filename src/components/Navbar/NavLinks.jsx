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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, // section is active when 50% visible
            }
        );

        links.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative uppercase text-sm tracking-[3px] font-medium transition-colors duration-300 cursor-pointer ${activeSection === item.id
                        ? "text-gold"
                        : "text-white"
                        }`}
                >
                    <span
                        className={`transition-colors duration-300 ${activeSection === item.id
                            ? "text-gold"
                            : "group-hover:text-gold"
                            }`}
                    >
                        {item.name}
                    </span>

                    <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-gold transition-all duration-300 ${activeSection === item.id
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                            }`}
                    />
                </button>
            ))}
        </nav>
    );
}