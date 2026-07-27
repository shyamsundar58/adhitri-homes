import { useEffect, useState } from "react";


const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Why Us", id: "why-choose" },
    { name: "Projects", id: "projects" },
    { name: "Construction", id: "construction" },
    { name: "Contact", id: "contact" },
];


export default function MobileMenu({ open, close }) {

    const [active, setActive] = useState("home");


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let current = "home";

            links.forEach((item) => {
                const section = document.getElementById(item.id);

                if (!section) return;

                if (scrollPosition >= section.offsetTop) {
                    current = item.id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const scrollToSection = (id) => {

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth"
            });


        close();

    };



    return (

        <div
            className={`
        fixed
        inset-0
        z-[60]
        bg-black
        transition-all
        duration-500

        ${open
                    ? "translate-x-0"
                    : "translate-x-full"
                }

      `}
        >


            <div
                className="
          flex
          justify-between
          items-center
          px-6
          h-24
        "
            >

                <h2
                    className="
            text-white
            text-2xl
            tracking-[4px]
          "
                >
                    MENU
                </h2>


                <button
                    onClick={close}
                    className="
            text-gold
            text-3xl
          "
                >
                    ×
                </button>


            </div>



            <div
                className="
          px-8
          mt-10
          flex
          flex-col
          gap-8
        "
            >

                {
                    links.map(item => (

                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}

                            className={`
                text-left
                uppercase
                tracking-[4px]
                text-lg
                border-l-2
                pl-5
                transition

                ${active === item.id
                                    ?
                                    "text-gold border-gold"
                                    :
                                    "text-white border-transparent"
                                }

              `}
                        >
                            {item.name}

                        </button>

                    ))
                }


                <button
                    onClick={() => scrollToSection("contact")}
                    className="
            mt-5
            border
            border-gold
            py-4
            text-gold
            tracking-[3px]
          "
                >
                    BOOK A VISIT
                </button>


            </div>


        </div>

    );
}