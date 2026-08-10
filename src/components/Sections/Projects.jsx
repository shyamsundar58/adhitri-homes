import { useState } from "react";
import { motion } from "framer-motion";

// ================= APARTMENT IMAGES =================

import apartment1 from "../../assets/apartments/apt1.jpg";
import apartment2 from "../../assets/apartments/apt2.jpg";
import apartment3 from "../../assets/apartments/apt3.jpg";
import apartment4 from "../../assets/apartments/apt4.jpg";
import apartment5 from "../../assets/apartments/apt5.jpg";
import apartment6 from "../../assets/apartments/apt6.jpg";

// ================= PLOT IMAGES =================

import plot1 from "../../assets/plots/plot1.jpg";
import plot2 from "../../assets/plots/plot2.jpg";
import plot3 from "../../assets/plots/plot3.jpg";
import plot4 from "../../assets/plots/plot4.jpg";
import plot5 from "../../assets/plots/plot5.jpg";
// import plot6 from "../../assets/plots/plot6.jpg";


// ================= CATEGORIES =================

const categories = [
    "Complex",
    "Plots",
    // "Construction",
];


// ================= PROPERTY DATA =================

const properties = {

    Complex: {
        images: [
            apartment1,
            apartment2,
            apartment3,
            apartment4,
            apartment5,
            apartment6,
        ],

        label: "Complex",

        featuredLabel: "Featured Apartment",

        title: "Premium Complex",

        description:
            "Discover thoughtfully designed premium Complex in Chennai's most sought-after residential locations with modern amenities, excellent connectivity and quality construction.",

        highlights: [
            {
                value: "13+",
                label: "Prime Locations",
            },
            {
                value: "2 & 3",
                label: "BHK Options",
            },
            {
                value: "100%",
                label: "Quality",
            },
            {
                value: "Prime",
                label: "Locations",
            },
        ],

        locations: [
            "Velachery",
            "Madipakkam",
            "Kolathur",
            "Porur",
            "Iyyappanthangal",
            "Pallikaranai",
            "Medavakkam",
            "Adyar",
            "Thoraipakkam",
            "Perungudi",
            "Pallavaram",
            "OMR",
            "KK Nagar, Trichy",
        ],
    },


    // ================= PLOTS =================

    Plots: {
        images: [
            plot1,
            plot2,
            plot3,
            plot4,
            plot5,
            // plot6,
        ],

        label: "Residential Plots",

        featuredLabel: "Featured Plots",

        title: "Premium Residential Plots",

        description:
            "Explore premium residential plots in carefully selected locations across Chennai and Tamil Nadu, offering excellent connectivity, future growth potential and ideal opportunities to build your dream home.",

        highlights: [
            {
                value: "6+",
                label: "Prime Locations",
            },
            {
                value: "100%",
                label: "Verified Plots",
            },
            {
                value: "Prime",
                label: "Locations",
            },
            {
                value: "Smart",
                label: "Investment",
            },
        ],

        locations: [
            "Kanchipuram",
            "ECR",
            "Coimbatore",
            "Trichy",
            "Acharapakkam",
            "Maraimalai Nagar",
        ],
    },


    // // ================= CONSTRUCTION =================

    // Construction: {

    //     images: [],

    //     label: "Construction",

    //     featuredLabel: "Construction Services",

    //     title: "Quality Construction",

    //     description:
    //         "From individual homes to commercial developments, we provide quality construction solutions with thoughtful planning, modern engineering and reliable execution.",

    //     highlights: [
    //         {
    //             value: "10+",
    //             label: "Years Experience",
    //         },
    //         {
    //             value: "70+",
    //             label: "Projects",
    //         },
    //         {
    //             value: "100%",
    //             label: "Quality",
    //         },
    //         {
    //             value: "Trusted",
    //             label: "Service",
    //         },
    //     ],

    //     locations: [
    //         "Velachery",
    //         "Pallavaram",
    //         "Adyar",
    //         "Thoraipakkam",
    //         "Mount Road",
    //         "Anna Nagar",
    //         "Kolathur",
    //         "Porur",
    //         "Guindy",
    //     ],
    // },
};


export default function Projects() {

    const [activeCategory, setActiveCategory] =
        useState("Complex");

    const [currentImage, setCurrentImage] =
        useState(0);

    const [showAll, setShowAll] =
        useState(false);


    const activeProperty =
        properties[activeCategory];


    // ================= CATEGORY CHANGE =================

    const changeCategory = (category) => {

        setActiveCategory(category);

        setCurrentImage(0);

        setShowAll(false);
    };


    // ================= NEXT IMAGE =================

    const nextImage = () => {

        if (!activeProperty.images.length) return;

        setCurrentImage((prev) =>
            prev === activeProperty.images.length - 1
                ? 0
                : prev + 1
        );
    };


    // ================= PREVIOUS IMAGE =================

    const previousImage = () => {

        if (!activeProperty.images.length) return;

        setCurrentImage((prev) =>
            prev === 0
                ? activeProperty.images.length - 1
                : prev - 1
        );
    };


    // ================= CONTACT =================

    const scrollToContact = () => {

        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };


    return (

        <section
            id="projects"
            className="py-24 bg-[#faf8f5]"
        >

            <div className="max-w-7xl mx-auto px-6">


                {/* ================= HEADING ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="text-center"
                >

                    <p className="
                        uppercase
                        tracking-[6px]
                        text-[#b08d57]
                        font-semibold
                    ">
                        Featured Properties
                    </p>


                    <h2 className="
                        mt-4
                        text-5xl
                        lg:text-6xl
                        font-serif
                        text-gray-900
                    ">
                        Find Your Perfect Property
                    </h2>


                    <div className="
                        w-24
                        h-1
                        bg-[#b08d57]
                        mx-auto
                        mt-6
                        rounded-full
                    " />


                    <p className="
                        mt-8
                        max-w-3xl
                        mx-auto
                        text-gray-600
                        text-lg
                        leading-8
                    ">
                        Explore premium Complex, residential plots
                        and construction services crafted with quality,
                        comfort and thoughtful design.
                    </p>

                </motion.div>


                {/* ================= CATEGORY BUTTONS ================= */}

                <div className="
                    flex
                    justify-center
                    mt-14
                ">

                    <div className="
                        inline-flex
                        flex-wrap
                        justify-center
                        bg-white
                        rounded-full
                        shadow-lg
                        p-2
                        border
                        border-gray-200
                    ">

                        {categories.map((category) => (

                            <button
                                key={category}
                                onClick={() =>
                                    changeCategory(category)
                                }
                                className={`
                                    px-7
                                    lg:px-10
                                    py-3.5
                                    rounded-full
                                    text-sm
                                    lg:text-base
                                    font-semibold
                                    transition-all
                                    duration-300
                                    ${
                                        activeCategory === category
                                            ? "bg-[#b08d57] text-white shadow-lg"
                                            : "text-gray-700 hover:bg-[#b08d57]/10"
                                    }
                                `}
                            >
                                {category}
                            </button>

                        ))}

                    </div>

                </div>


                {/* ================= PROPERTY CARD ================= */}

                <motion.div
                    key={activeCategory}
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="
                        mt-16
                        bg-white
                        rounded-[32px]
                        shadow-2xl
                        overflow-hidden
                    "
                >


                    {/* ================= IMAGE ================= */}

                    {activeProperty.images.length > 0 ? (

                        <div className="relative">

                            <img
                                src={
                                    activeProperty.images[
                                        currentImage
                                    ]
                                }
                                alt={activeProperty.title}
                                className="
                                    w-full
                                    h-[420px]
                                    md:h-[550px]
                                    lg:h-[650px]
                                    object-cover
                                "
                            />


                            {/* GRADIENT */}

                            <div className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/70
                                via-black/10
                                to-transparent
                                pointer-events-none
                            " />


                            {/* IMAGE TITLE */}

                            <div className="
                                absolute
                                bottom-8
                                left-8
                                md:left-12
                                text-white
                            ">

                                <p className="
                                    uppercase
                                    tracking-[5px]
                                    text-[#d4af37]
                                    text-sm
                                    md:text-base
                                ">
                                    {activeProperty.label}
                                </p>


                                <h3 className="
                                    mt-2
                                    text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                    font-serif
                                ">
                                    {activeProperty.title}
                                </h3>

                            </div>


                            {/* PREVIOUS */}

                            {activeProperty.images.length > 1 && (

                                <button
                                    onClick={previousImage}
                                    className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        w-12
                                        h-12
                                        rounded-full
                                        bg-white/90
                                        text-gray-900
                                        shadow-xl
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        hover:bg-[#b08d57]
                                        hover:text-white
                                        transition
                                    "
                                >
                                    ‹
                                </button>

                            )}


                            {/* NEXT */}

                            {activeProperty.images.length > 1 && (

                                <button
                                    onClick={nextImage}
                                    className="
                                        absolute
                                        right-5
                                        top-1/2
                                        -translate-y-1/2
                                        w-12
                                        h-12
                                        rounded-full
                                        bg-white/90
                                        text-gray-900
                                        shadow-xl
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        hover:bg-[#b08d57]
                                        hover:text-white
                                        transition
                                    "
                                >
                                    ›
                                </button>

                            )}


                            {/* DOTS */}

                            {activeProperty.images.length > 1 && (

                                <div className="
                                    absolute
                                    bottom-6
                                    right-8
                                    flex
                                    gap-2
                                ">

                                    {activeProperty.images.map(
                                        (_, index) => (

                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentImage(
                                                        index
                                                    )
                                                }
                                                className={`
                                                    h-3
                                                    rounded-full
                                                    transition-all
                                                    duration-300
                                                    ${
                                                        currentImage === index
                                                            ? "w-8 bg-[#d4af37]"
                                                            : "w-3 bg-white/70"
                                                    }
                                                `}
                                            />

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    ) : (

                        /* ================= CONSTRUCTION PLACEHOLDER ================= */

                        <div className="
                            h-[420px]
                            md:h-[550px]
                            lg:h-[500px]
                            bg-black
                            flex
                            items-center
                            justify-center
                            text-center
                            px-6
                        ">

                            <div>

                                <p className="
                                    uppercase
                                    tracking-[5px]
                                    text-[#d4af37]
                                    text-sm
                                ">
                                    Coming Soon
                                </p>

                                <h3 className="
                                    mt-3
                                    text-4xl
                                    md:text-5xl
                                    font-serif
                                    text-white
                                ">
                                    Construction Projects
                                </h3>

                                <p className="
                                    mt-4
                                    text-gray-300
                                    max-w-xl
                                ">
                                    Our construction project showcase
                                    will be added here.
                                </p>

                            </div>

                        </div>

                    )}


                    {/* ================= DETAILS ================= */}

                    <div className="
                        p-8
                        md:p-12
                        lg:p-14
                    ">


                        <span className="
                            uppercase
                            tracking-[4px]
                            text-[#b08d57]
                            font-semibold
                        ">
                            {activeProperty.featuredLabel}
                        </span>


                        <h3 className="
                            mt-3
                            text-4xl
                            lg:text-5xl
                            font-serif
                            text-gray-900
                        ">
                            {activeProperty.title}
                        </h3>


                        <p className="
                            mt-6
                            text-gray-600
                            text-lg
                            leading-8
                            max-w-4xl
                        ">
                            {activeProperty.description}
                        </p>


                        {/* ================= HIGHLIGHTS ================= */}

                        <div className="
                            grid
                            grid-cols-2
                            md:grid-cols-4
                            gap-4
                            mt-10
                        ">

                            {activeProperty.highlights.map(
                                (item) => (

                                    <div
                                        key={item.label}
                                        className="
                                            bg-[#faf8f5]
                                            rounded-2xl
                                            p-5
                                            text-center
                                        "
                                    >

                                        <h4 className="
                                            text-3xl
                                            font-bold
                                            text-[#b08d57]
                                        ">
                                            {item.value}
                                        </h4>


                                        <p className="
                                            mt-2
                                            text-gray-600
                                            text-sm
                                        ">
                                            {item.label}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>


                        {/* ================= LOCATIONS ================= */}

                        <div className="mt-14">


                            <div className="
                                flex
                                flex-wrap
                                items-center
                                justify-between
                                gap-3
                            ">

                                <h4 className="
                                    text-2xl
                                    font-serif
                                    text-gray-900
                                ">
                                    Available Locations
                                </h4>


                                <span className="
                                    text-[#b08d57]
                                    font-medium
                                ">
                                    {activeProperty.locations.length}
                                    {" "}
                                    Locations
                                </span>

                            </div>


                            <div className="
                                grid
                                sm:grid-cols-2
                                lg:grid-cols-3
                                gap-4
                                mt-7
                            ">

                                {(showAll
                                    ? activeProperty.locations
                                    : activeProperty.locations.slice(
                                        0,
                                        6
                                    )
                                ).map((location) => (

                                    <div
                                        key={location}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            bg-[#faf8f5]
                                            border
                                            border-gray-200
                                            rounded-xl
                                            px-5
                                            py-4
                                            hover:border-[#b08d57]
                                            hover:shadow-md
                                            transition
                                        "
                                    >

                                        <span className="
                                            w-2.5
                                            h-2.5
                                            rounded-full
                                            bg-[#b08d57]
                                            flex-shrink-0
                                        " />


                                        <span className="
                                            text-gray-700
                                            font-medium
                                        ">
                                            {location}
                                        </span>

                                    </div>

                                ))}

                            </div>


                            {/* VIEW ALL */}

                            {activeProperty.locations.length > 6 && (

                                <div className="mt-8">

                                    <button
                                        onClick={() =>
                                            setShowAll(
                                                !showAll
                                            )
                                        }
                                        className="
                                            px-6
                                            py-3
                                            rounded-full
                                            border
                                            border-[#b08d57]
                                            text-[#b08d57]
                                            font-semibold
                                            hover:bg-[#b08d57]
                                            hover:text-white
                                            transition
                                        "
                                    >
                                        {showAll
                                            ? "Show Less"
                                            : `View All ${activeProperty.locations.length} Locations`
                                        }
                                    </button>

                                </div>

                            )}

                        </div>


                        {/* ================= BUTTONS ================= */}

                        <div className="
                            flex
                            flex-wrap
                            gap-4
                            mt-12
                        ">

                            <button
                                onClick={scrollToContact}
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    bg-[#b08d57]
                                    text-white
                                    font-semibold
                                    hover:bg-black
                                    transition
                                "
                            >
                                Enquire Now
                            </button>


                            {/* <button
                                className="
                                    px-8
                                    py-4
                                    rounded-full
                                    border-2
                                    border-[#b08d57]
                                    text-[#b08d57]
                                    font-semibold
                                    hover:bg-[#b08d57]
                                    hover:text-white
                                    transition
                                "
                            >
                                View Details
                            </button> */}

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}