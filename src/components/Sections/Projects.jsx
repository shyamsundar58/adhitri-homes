

import { useState } from "react";
import { motion } from "framer-motion";

// const [showAll, setShowAll] = useState(false)

const categories = [
    "Apartments",
    "Plots",
    "Construction",
];

const properties = {

    Apartments: {
    image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80",

    title: "Premium Apartments",

    description:
        "Discover thoughtfully designed premium apartments in Chennai's most sought-after residential locations with modern amenities and excellent connectivity.",

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

    Plots: {
    image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80",

    title: "Premium Residential Plots",

    description:
        "Own DTCP & CMDA approved residential plots in rapidly developing locations with excellent appreciation potential and infrastructure.",

    locations: [
        "Kanchipuram",
        "ECR",
        "Maraimalai Nagar",
        "Acharapakkam",
        "Trichy",
        "Coimbatore",
    ],
},

    Construction: {
    image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80",

    title: "Construction Services",

    description:
        "From luxury residences to commercial developments, we deliver end-to-end construction solutions with quality craftsmanship, timely execution, and modern engineering.",

    locations: [
        "PR Towers Complex",
        "Velachery",
        "Pallavaram",
        "Adyar",
        "Thoraipakkam",
        "Mount Road",
        "Anna Nagar",
        "Kolathur",
        "Porur",
        "Guindy",
    ],
},
};

export default function Projects() {
    const [active, setActive] = useState("Apartments");
    const [showAll, setShowAll] = useState(false);

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

        {/* Heading */}

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >

            <p className="uppercase tracking-[6px] text-[#b08d57] font-semibold">
                Featured Properties
            </p>

            <h2 className="mt-4 text-5xl lg:text-6xl font-serif text-gray-900">
                Find Your Perfect Property
            </h2>

            <div className="w-24 h-1 bg-[#b08d57] mx-auto mt-6 rounded-full"></div>

            <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
                Explore premium apartments, residential plots and construction
                services crafted with quality, trust and excellence across
                Chennai and Tamil Nadu.
            </p>

        </motion.div>

        {/* Category Tabs */}

<div className="flex justify-center mt-16">

    <div className="inline-flex bg-white rounded-full shadow-lg p-2 border border-gray-200">

        {categories.map((item) => (

            <button
                key={item}
                onClick={() => {
                    setActive(item);
                    setShowAll(false);
                }}
                className={`px-8 lg:px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300

                ${
                    active === item
                        ? "bg-[#b08d57] text-white shadow-lg"
                        : "text-gray-700 hover:bg-[#b08d57]/10"
                }
                `}
            >
                {item}
            </button>

        ))}

    </div>

</div>

{/* Premium Property Card */}

<motion.div
    key={active}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-16 bg-white rounded-[32px] shadow-2xl overflow-hidden"
>

    <div className="grid lg:grid-cols-[42%_58%]">

        {/* LEFT IMAGE */}

        <div className="relative h-[550px]">

            <img
                src={properties[active].image}
                alt={properties[active].title}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-10 left-10">

                <span className="uppercase tracking-[5px] text-[#d4af37] text-sm">
                    {active}
                </span>

                <h2 className="mt-3 text-5xl font-serif text-white leading-tight">
                    {properties[active].title}
                </h2>

            </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="p-10 lg:p-14 flex flex-col justify-center">

        {/* Heading */}

<span className="uppercase tracking-[4px] text-[#b08d57] font-semibold">
    Featured Property
</span>

<h2 className="mt-4 text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
    {properties[active].title}
</h2>

<p className="mt-6 text-gray-600 text-lg leading-8">
    {properties[active].description}
</p>

{/* Stats */}

<div className="grid grid-cols-2 gap-5 mt-10">

    <div className="rounded-2xl bg-[#faf8f4] border border-gray-200 p-6">

        <h3 className="text-4xl font-bold text-[#b08d57]">
            {properties[active].locations.length}+
        </h3>

        <p className="mt-2 text-gray-600">
            Prime Locations
        </p>

    </div>

    <div className="rounded-2xl bg-[#faf8f4] border border-gray-200 p-6">

        <h3 className="text-4xl font-bold text-[#b08d57]">
            100%
        </h3>

        <p className="mt-2 text-gray-600">
            Quality Assured
        </p>

    </div>

</div>

{/* Available Locations */}

<h4 className="mt-10 text-xl font-semibold text-gray-900">
    Available Locations
</h4>

<div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6">

    {(showAll
        ? properties[active].locations
        : properties[active].locations.slice(0, 4)
    ).map((location) => (

        <div
            key={location}
            className="flex items-center gap-3"
        >

            <div className="w-2.5 h-2.5 rounded-full bg-[#b08d57]" />

            <span className="text-gray-700">
                {location}
            </span>

        </div>

    ))}

</div>
{/* View More */}

{properties[active].locations.length > 4 && (

    <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 w-fit text-[#b08d57] font-semibold hover:underline transition"
    >
        {showAll
            ? "View Less"
            : `+ ${properties[active].locations.length - 4} More Locations`}
    </button>

)}

{/* Buttons */}

<div className="flex flex-wrap gap-5 mt-12">

    <button
        className="px-8 py-4 rounded-full border-2 border-[#b08d57] text-[#b08d57] font-semibold transition-all duration-300 hover:bg-[#b08d57] hover:text-white"
    >
        View Details
    </button>

    <button
        onClick={scrollToContact}
        className="px-8 py-4 rounded-full bg-[#b08d57] text-white font-semibold transition-all duration-300 hover:bg-black"
    >
        Enquire Now
    </button>

</div>

        </div>

    </div>

</motion.div>

    </div>

</section>

);
        
}