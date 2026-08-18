import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logos/AhLogo.webp";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);


    const scrollToContact = () => {
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };


    return (
        <>
            <header
                className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500

          ${scrolled
                        ? "bg-black/90 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                    }
        `}
            >

                <div
                    className="
    max-w-7xl
    mx-auto
    px-4
    md:px-6
    lg:px-10
    h-20
    lg:h-24
    flex
    items-center
    justify-between
  "
                >

                    {/* Logo */}
                    {/* <div>
                        <h1
                            className="
                text-3xl
                font-serif
                tracking-[4px]
                text-white
              "
                        >
                            AURELIA
                        </h1>

                        <span
                            className="
                text-[10px]
                tracking-[5px]
                text-gold
              "
                        >
                            CONSTRUCTIONS
                        </span>
                    </div> */}
                    <div
                        className="cursor-pointer"
                        onClick={() =>
                            document.getElementById("home")?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        <img
                            src={logo}
                            alt="Adhitri Homes Pvt. Ltd."
                            className="h-16 lg:h-20 w-auto object-contain"
                        />
                    </div>


                    {/* Desktop */}
                    <NavLinks />



                    <div className="flex items-center gap-6">


                        {/* Book Visit */}
                        <button
                            onClick={scrollToContact}
                            className="
                hidden
                lg:block
                px-8
                py-3
                border
                border-gold
                text-gold
                text-xs
                tracking-[3px]
                hover:bg-gold
                hover:text-black
                transition
              "
                        >
                            BOOK A VISIT
                        </button>



                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setOpenMenu(true)}
                            className="
                lg:hidden
                flex
                flex-col
                gap-2
              "
                        >

                            <span className="w-8 h-[2px] bg-white" />
                            <span className="w-8 h-[2px] bg-white" />
                            <span className="w-8 h-[2px] bg-white" />

                        </button>


                    </div>


                </div>


            </header>


            {/* Mobile Menu */}
            <MobileMenu
                open={openMenu}
                close={() => setOpenMenu(false)}
            />

        </>
    );
}