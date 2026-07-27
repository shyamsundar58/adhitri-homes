import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Ramesh Kumar",
        role: "Homeowner • Velachery",
        review:
            "Adhitri Homes made our home-buying journey simple and stress-free. Their team guided us from site visit to registration with complete transparency. We are extremely happy with our new home.",
    },
    {
        name: "Priya Srinivasan",
        role: "Property Investor • OMR",
        review:
            "We purchased a residential plot through Adhitri Homes and the entire process was smooth. The staff were professional, responsive, and always available to answer our questions.",
    },
    {
        name: "Arun Prakash",
        role: "Commercial Client",
        review:
            "Excellent construction quality and timely delivery. Their commitment to quality and customer satisfaction truly sets them apart. I highly recommend Adhitri Homes.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-[#faf8f5] py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[6px] text-[#b08d57] font-semibold">
                        Testimonials
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mt-4">
                        Trusted By Hundreds Of Happy Families
                    </h2>

                    <div className="w-24 h-1 bg-[#b08d57] mx-auto mt-6"></div>

                    <p className="text-gray-600 max-w-3xl mx-auto mt-8 leading-8">
                        Our commitment to quality construction, premium locations,
                        and customer satisfaction has helped hundreds of families
                        find their dream homes with confidence.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                    {testimonials.map((item, index) => (

                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill="#b08d57"
                                        color="#b08d57"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-600 leading-8 italic">
                                "{item.review}"
                            </p>

                            {/* Push everything below to the bottom */}
                            <div className="mt-auto pt-8">
                                <div className="w-14 h-[2px] bg-[#b08d57]"></div>

                                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                    {item.name}
                                </h3>

                                <p className="text-[#b08d57] mt-2 text-sm tracking-wide">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>

                    ))}

                </div>

                {/* Bottom */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <h3 className="text-2xl font-serif text-gray-900">
                        500+ Happy Families Have Trusted Adhitri Homes
                    </h3>

                    <p className="text-gray-600 mt-4">
                        We continue to build lasting relationships through quality,
                        trust, and exceptional customer service.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}