import { motion } from "framer-motion";
import {
    Award,
    Building2,
    ShieldCheck,
    Clock3,
} from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Premium Quality",
        description:
            "Every project is delivered with superior materials, expert craftsmanship, and attention to detail.",
    },
    {
        icon: Building2,
        title: "Modern Architecture",
        description:
            "Elegant, functional, and sustainable designs tailored to today's lifestyle and future needs.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Company",
        description:
            "Built on transparency, reliability, and long-term client relationships with consistent excellence.",
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        description:
            "We value your time and ensure every milestone is completed efficiently without compromising quality.",
    },
];

export default function WhyChoose() {
    return (
        <section

            id="why-choose" className="bg-black text-white py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-gold mb-4">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif">
                        Excellence In Every Detail
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
                        We combine innovation, quality, and trust to create
                        architectural masterpieces that stand the test of time.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                }}
                                viewport={{ once: true }}
                                className="
                  group
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-sm
                  p-8
                  rounded-xl
                  transition-all
                  duration-500
                  hover:border-gold
                  hover:-translate-y-3
                "
                            >
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

                                <h3 className="text-2xl font-serif mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-7">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}