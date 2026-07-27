import { motion } from "framer-motion";
import {
    Home,
    Building2,
    Compass,
    Hammer,
    Paintbrush2,
    Trees,
} from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Residential Construction",
        description:
            "Luxury villas, apartments, and premium residential communities built with unmatched quality.",
    },
    {
        icon: Building2,
        title: "Commercial Projects",
        description:
            "Modern office spaces, retail complexes, and commercial developments tailored for business growth.",
    },
    {
        icon: Compass,
        title: "Architecture & Planning",
        description:
            "Innovative architectural designs and detailed planning that combine aesthetics with functionality.",
    },
    {
        icon: Hammer,
        title: "Turnkey Construction",
        description:
            "Complete end-to-end construction solutions from concept and approvals to project handover.",
    },
    {
        icon: Paintbrush2,
        title: "Interior Design",
        description:
            "Elegant interiors crafted to reflect luxury, comfort, and contemporary living.",
    },
    {
        icon: Trees,
        title: "Landscape Development",
        description:
            "Beautiful outdoor environments with sustainable landscaping and recreational spaces.",
    },
];

export default function Construction() {
    return (
        <section
            id="construction"
            className="bg-black py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-gold mb-4">
                        Our Services
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif text-white">
                        Construction Excellence
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
                        We provide complete construction and architectural solutions,
                        delivering projects that combine innovation, quality, and timeless
                        design.
                    </p>
                </motion.div>

                {/* Services */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                className="
                  group
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  p-8
                  hover:border-gold
                  hover:bg-white/10
                  transition-all
                  duration-500
                "
                            >
                                {/* Icon */}

                                <div
                                    className="
                    w-16
                    h-16
                    rounded-full
                    bg-gold/10
                    flex
                    items-center
                    justify-center
                    mb-8
                    group-hover:bg-gold
                    transition-all
                    duration-300
                  "
                                >
                                    <Icon
                                        size={30}
                                        className="
                      text-gold
                      group-hover:text-black
                      transition-all
                    "
                                    />
                                </div>

                                <h3 className="text-2xl font-serif text-white mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {service.description}
                                </p>

                                <button
                                    className="
                    mt-8
                    uppercase
                    tracking-[3px]
                    text-sm
                    text-gold
                    flex
                    items-center
                    gap-2
                  "
                                >
                                    Learn More →

                                </button>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}