import { motion } from "framer-motion";

// About Image
import aboutImage from "../../assets/about/about1.WebP";

const stats = [
    {
        number: "10+",
        title: "Years Experience",
    },
    {
        number: "70+",
        title: "Projects Delivered",
    },
    {
        number: "15+",
        title: "Prime Locations",
    },
    {
        number: "500+",
        title: "Happy Families",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-20 lg:py-28 bg-[#f8f7f4] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ============================= */}
                    {/* LEFT IMAGE */}
                    {/* ============================= */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src={aboutImage}
                            alt="ADHITRI HOMES PVT LTD"
                            className="rounded-2xl shadow-2xl w-full h-[500px] lg:h-[600px] object-cover hover:scale-[1.02] transition-all duration-500"
                        />

                        {/* Years of Trust */}
                        <div className="absolute -bottom-8 -right-8 bg-[#b08d57] text-white p-8 rounded-lg shadow-xl hidden lg:block">
                            <h2 className="text-4xl font-bold">
                                10+
                            </h2>

                            <p className="uppercase tracking-[3px] text-xs mt-2">
                                Years of Trust
                            </p>
                        </div>
                    </motion.div>

                    {/* ============================= */}
                    {/* RIGHT CONTENT */}
                    {/* ============================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Small Heading */}
                        <p className="uppercase tracking-[6px] text-[#b08d57] font-semibold mb-4">
                            About Us
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                            Building Trust.
                            <br />
                            Creating Better Living.
                        </h2>

                        {/* Gold Line */}
                        <div className="w-20 h-1 bg-[#b08d57] mt-6 mb-8"></div>

                        {/* Description */}
                        <p className="text-gray-600 text-[15px] leading-7">
                            <span className="font-semibold text-gray-900">
                                ADHITRI HOMES PVT LTD
                            </span>{" "}
                            is a trusted real estate and construction company
                            offering premium apartments, residential plots,
                            individual homes, and commercial developments
                            across Chennai and Tamil Nadu. With over a decade
                            of experience, we focus on quality construction,
                            transparent dealings, timely delivery, and
                            creating long-term value for families and
                            investors.
                        </p>

                        {/* ============================= */}
                        {/* STATISTICS */}
                        {/* ============================= */}

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#b08d57]"
                                >
                                    <h3 className="text-3xl font-bold text-[#b08d57]">
                                        {item.number}
                                    </h3>

                                    <p className="text-gray-700 mt-2 font-medium">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}