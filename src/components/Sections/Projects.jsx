

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
    images: [
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1400&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80",
],

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
    images: [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&q=80",
],

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
    images: [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
],

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
    const [currentImage, setCurrentImage] = useState(0);

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
setCurrentImage(0);
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

{/* Premium Project Showcase */}

<motion.div
    key={active}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-16 bg-white rounded-[30px] shadow-2xl overflow-hidden"
>

    {/* Image */}

    <div className="relative">

    {/* Main Image */}

    <img
        src={properties[active].images[currentImage]}
        alt=""
        className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

    {/* Bottom Title */}

    <div className="absolute bottom-8 left-8 text-white">

        <p className="uppercase tracking-[4px] text-[#d4af37]">
            {active}
        </p>

        <h2 className="text-4xl font-serif mt-2">
            {properties[active].title}
        </h2>

    </div>

    {/* Previous */}

    <button
        onClick={() =>
            setCurrentImage(
                currentImage === 0
                    ? properties[active].images.length - 1
                    : currentImage - 1
            )
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg"
    >
        ←
    </button>

    {/* Next */}

    <button
        onClick={() =>
            setCurrentImage(
                currentImage === properties[active].images.length - 1
                    ? 0
                    : currentImage + 1
            )
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg"
    >
        →
    </button>

    {/* Thumbnails */}

    <div className="absolute bottom-5 right-5 flex gap-3">

        {properties[active].images.map((img, index) => (

            <img
                key={index}
                src={img}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-14 object-cover rounded-lg cursor-pointer border-2 transition

                ${
                    currentImage === index
                        ? "border-[#d4af37] scale-110"
                        : "border-white/40"
                }`}
            />

        ))}

    </div>

</div>

    {/* Content starts below image */}

    <div className="p-10 lg:p-14">

    <span className="uppercase tracking-[4px] text-[#b08d57] font-semibold">
        Featured Project
    </span>

    <h2 className="mt-3 text-4xl lg:text-5xl font-serif text-gray-900">
        {properties[active].title}
    </h2>

    <p className="mt-6 text-gray-600 text-lg leading-8 max-w-4xl">
        {properties[active].description}
    </p>

    {/* Quick Highlights */}

    <div className="grid md:grid-cols-4 gap-5 mt-10">

        <div className="bg-[#faf8f5] rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-[#b08d57]">
                {properties[active].locations.length}+
            </h3>

            <p className="mt-2 text-gray-600">
                Prime Locations
            </p>

        </div>

        <div className="bg-[#faf8f5] rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-[#b08d57]">
                DTCP
            </h3>

            <p className="mt-2 text-gray-600">
                Approved
            </p>

        </div>

        <div className="bg-[#faf8f5] rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-[#b08d57]">
                24/7
            </h3>

            <p className="mt-2 text-gray-600">
                Security
            </p>

        </div>

        <div className="bg-[#faf8f5] rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-bold text-[#b08d57]">
                100%
            </h3>

            <p className="mt-2 text-gray-600">
                Quality
            </p>

        </div>

    </div>

</div>
{/* Available Locations */}

<div className="mt-14">

    <div className="flex items-center justify-between flex-wrap gap-4">

        <h3 className="text-2xl font-serif text-gray-900">
            Available Locations
        </h3>

        <span className="text-[#b08d57] font-medium">
            {properties[active].locations.length} Premium Locations
        </span>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

        {(showAll
            ? properties[active].locations
            : properties[active].locations.slice(0, 6)
        ).map((location) => (

            <motion.div
                key={location}
                whileHover={{
                    y: -6,
                    scale: 1.02,
                }}
                transition={{ duration: 0.25 }}
                className="bg-[#faf8f5] border border-gray-200 rounded-2xl p-5 hover:border-[#b08d57] hover:shadow-lg cursor-pointer"
            >

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-[#b08d57]/10 flex items-center justify-center text-2xl">
                        📍
                    </div>

                    <div>

                        <h4 className="font-semibold text-gray-900">
                            {location}
                        </h4>

                        <p className="text-sm text-gray-500 mt-1">
                            Prime Development Area
                        </p>

                    </div>

                </div>

            </motion.div>

        ))}

    </div>

    {properties[active].locations.length > 6 && (

        <div className="flex justify-center mt-8">
    <button
        onClick={() => setShowAll(!showAll)}
        className="text-[#b08d57] font-semibold hover:text-black transition"
    >
        {showAll ? "− Show Less" : `+ View All ${properties[active].locations.length} Locations`}
    </button>
</div>

    )}

</div>

</motion.div>

    </div>

</section>

);
        
}