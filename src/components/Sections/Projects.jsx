// import { motion } from "framer-motion";
// import { ArrowUpRight, MapPin } from "lucide-react";

// const projects = [
//     {
//         image:
//             "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
//         title: "Aurelia Heights",
//         location: "Chennai",
//         category: "Luxury Apartments",
//     },
//     {
//         image:
//             "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
//         title: "Skyline Villas",
//         location: "Bangalore",
//         category: "Premium Villas",
//     },
//     {
//         image:
//             "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
//         title: "Business Square",
//         location: "Hyderabad",
//         category: "Commercial",
//     },
// ];

// export default function Projects() {
//     return (
//         <section
//             id="projects"
//             className="bg-[#f8f7f3] py-24 lg:py-32"
//         >
//             <div className="max-w-7xl mx-auto px-6 lg:px-10">

//                 {/* Heading */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                     className="text-center mb-20"
//                 >
//                     <p className="uppercase tracking-[6px] text-gold mb-4">
//                         Featured Projects
//                     </p>

//                     <h2 className="text-4xl lg:text-5xl font-serif text-gray-900">
//                         Crafted To Perfection
//                     </h2>

//                     <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
//                         Discover our portfolio of premium residential and commercial
//                         developments designed with timeless architecture and exceptional
//                         craftsmanship.
//                     </p>
//                 </motion.div>

//                 {/* Project Cards */}
//                 <div className="grid lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={project.title}
//                             initial={{ opacity: 0, y: 60 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{
//                                 duration: 0.6,
//                                 delay: index * 0.2,
//                             }}
//                             className="group bg-white rounded-xl overflow-hidden shadow-xl"
//                         >
//                             {/* Image */}
//                             <div className="overflow-hidden h-[340px]">
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                 />
//                             </div>

//                             {/* Content */}
//                             <div className="p-8">

//                                 <span className="text-gold uppercase tracking-[3px] text-xs">
//                                     {project.category}
//                                 </span>

//                                 <h3 className="text-3xl font-serif mt-3 text-gray-900">
//                                     {project.title}
//                                 </h3>

//                                 <div className="flex items-center gap-2 mt-4 text-gray-500">
//                                     <MapPin size={16} />
//                                     {project.location}
//                                 </div>

//                                 <button
//                                     className="
//                     mt-8
//                     flex
//                     items-center
//                     gap-2
//                     text-gold
//                     uppercase
//                     tracking-[3px]
//                     text-sm
//                     group/button
//                   "
//                                 >
//                                     View Project

//                                     <ArrowUpRight
//                                         size={18}
//                                         className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
//                                     />
//                                 </button>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useState } from "react";
import { motion } from "framer-motion";

// const [showAll, setShowAll] = useState(false)

const categories = [
    "Apartments",
    "Plots",
    "Construction",
];

const properties = {

    Apartments: [
        {
            location: "Velachery",
            type: "Premium Apartments",
            image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
        },
        {
            location: "Madipakkam",
            type: "Luxury Apartments",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
        },
        {
            location: "Kolathur",
            type: "Modern Apartments",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
        },
        {
            location: "Porur",
            type: "Premium Flats",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        },
        {
            location: "Iyyappanthangal",
            type: "Luxury Flats",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
        },
        {
            location: "Pallikaranai",
            type: "2 & 3 BHK Apartments",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
        },
        {
            location: "Medavakkam",
            type: "Premium Apartments",
            image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
        },
        {
            location: "Adyar",
            type: "Luxury Flats",
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
        },
        {
            location: "Thoraipakkam",
            type: "Modern Apartments",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
        },
        {
            location: "Perungudi",
            type: "Premium Apartments",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
        },
        {
            location: "Pallavaram",
            type: "Luxury Apartments",
            image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
        },
        {
            location: "OMR",
            type: "IT Corridor Apartments",
            image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
        },
        {
            location: "KK Nagar, Trichy",
            type: "Individual Houses",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
        },
    ],

    Plots: [
        {
            location: "Kanchipuram",
            type: "Residential Plots",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
        },
        {
            location: "ECR",
            type: "Premium Villa Plots",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
        },
        {
            location: "Coimbatore",
            type: "DTCP Approved Plots",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
        },
        {
            location: "Trichy",
            type: "Residential Layout",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
        },
        {
            location: "Acharapakkam",
            type: "Investment Plots",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80",
        },
        {
            location: "Maraimalai Nagar",
            type: "Premium Plots",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
        },
    ],

    Construction: [
        {
            location: "PR Towers Complex",
            type: "Commercial Project",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
        },
        {
            location: "Velachery",
            type: "Residential Construction",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
        },
        {
            location: "Pallavaram",
            type: "Commercial Construction",
            image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80",
        },
        {
            location: "Adyar",
            type: "Luxury Villas",
            image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
        },
        {
            location: "Thoraipakkam",
            type: "Apartment Construction",
            image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
        },
        {
            location: "Mount Road",
            type: "Commercial Buildings",
            image: "https://images.unsplash.com/photo-1541976844346-f18aeac57b06?w=1200&q=80",
        },
        {
            location: "Anna Nagar",
            type: "Residential Projects",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
        },
        {
            location: "Kolathur",
            type: "Apartment Construction",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        },
        {
            location: "Porur",
            type: "Premium Construction",
            image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
        },
        {
            location: "Guindy",
            type: "Turnkey Projects",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        },
    ],
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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="uppercase tracking-[6px] text-[#b08d57] font-semibold">
                        FEATURED PROPERTIES
                    </p>

                    <h2 className="text-5xl font-serif mt-4 text-gray-900">
                        Find Your Perfect Property
                    </h2>

                    <div className="w-24 h-1 bg-[#b08d57] mx-auto mt-6"></div>

                    <p className="text-gray-600 leading-7 max-w-3xl mx-auto mt-8 leading-8">
                        Discover premium apartments, residential plots and
                        construction projects developed by ADHITRI HOMES PVT LTD
                        across Chennai and Tamil Nadu.
                    </p>
                </motion.div>

                {/* Tabs */}

                <div className="flex justify-center flex-wrap gap-5 mt-14">

                    {categories.map((item) => (

                        <button
                            key={item}
                            onClick={() => {
                                setActive(item);
                                setShowAll(false);
                            }}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm

  ${active === item
                                    ? "bg-[#b08d57] text-white shadow-lg"
                                    : "bg-[#f3f3f3] text-gray-800 hover:bg-[#b08d57] hover:text-white"
                                }
  `}
                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Cards */}

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                >

                    {(showAll
                        ? properties[active]
                        : properties[active].slice(0, 3)
                    ).map((item, index) => (

                        <motion.div
                            key={index}
                            layout
                            whileHover={{
                                y: -10,
                            }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg"
                        >

                            <img
                                src={item.image}
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-6">

                                <span className="text-[#b08d57] text-sm uppercase tracking-[3px]">
                                    {item.type}
                                </span>

                                <h3 className="text-2xl font-serif mt-3 text-gray-900">
                                    {item.location}
                                </h3>

                                <div className="space-y-3 mt-5 text-gray-600">

                                    <p>✔ Premium Location</p>

                                    <p>✔ Modern Infrastructure</p>

                                    <p>✔ Excellent Investment</p>

                                </div>

                                <button
                                    onClick={scrollToContact}
                                    className="mt-8 w-full py-3 bg-[#b08d57] text-white uppercase tracking-[3px] rounded-lg hover:bg-black transition"
                                >
                                    Enquire Now
                                </button>

                            </div>

                        </motion.div>

                    ))}

                </motion.div>
                <div className="flex justify-center mt-14">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="
      px-10
      py-4
      bg-[#b08d57]
      text-white
      rounded-full
      font-semibold
      tracking-wide
      transition-all
      duration-300
      hover:bg-black
    "
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>

            </div>
        </section>
    );
}