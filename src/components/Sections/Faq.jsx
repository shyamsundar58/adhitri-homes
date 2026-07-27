import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How do I book a site visit?",
        answer:
            "Booking a site visit is simple. You can call us, send us a WhatsApp message, or fill out the contact form on our website. Our team will schedule a visit at your preferred date and time.",
    },
    {
        question: "Is home loan assistance available?",
        answer:
            "Yes. We assist our customers by connecting them with leading banking partners for home loan support, subject to eligibility and bank approval.",
    },
    {
        question: "Are the plots DTCP/RERA approved?",
        answer:
            "Yes. Our projects comply with the required approvals based on the project type. Please contact our sales team for detailed information about a specific property.",
    },
    {
        question: "What types of properties do you offer?",
        answer:
            "We offer premium apartments, residential plots, individual houses, villas, commercial spaces, and complete construction solutions across Tamil Nadu.",
    },
    {
        question: "Which locations do you currently serve?",
        answer:
            "Our projects are located across Velachery, Madipakkam, Kolathur, Porur, Pallikaranai, Medavakkam, Adyar, Thoraipakkam, Perungudi, Pallavaram, OMR, Kanchipuram, Coimbatore, Trichy, ECR, Maraimalai Nagar and other prime locations.",
    },
    {
        question: "Can I customize my construction project?",
        answer:
            "Absolutely. We provide customized construction services tailored to your requirements, budget, design preferences, and project timeline.",
    },
    {
        question: "How can I contact your sales team?",
        answer:
            "You can reach us through Phone, WhatsApp, Email, or by filling out the Contact Form available on this website. Our team will get back to you as soon as possible.",
    },
    {
        question: "Why choose Adhitri Homes Pvt Ltd?",
        answer:
            "We focus on quality construction, premium locations, transparent communication, timely project delivery, and complete customer satisfaction, helping families invest with confidence.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState(null);

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="bg-white py-24 lg:py-32"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[6px] text-[#b08d57] font-semibold">
                        Frequently Asked Questions
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mt-4">
                        Everything You Need To Know
                    </h2>

                    <div className="w-24 h-1 bg-[#b08d57] mx-auto mt-6"></div>

                    <p className="text-gray-600 leading-8 mt-8 max-w-3xl mx-auto">
                        Find answers to the most common questions about our properties,
                        construction services, and how we help you find your dream home.
                    </p>
                </motion.div>

                {/* FAQ */}

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <motion.div
                            key={index}
                            layout
                            className="bg-[#faf8f5] rounded-xl shadow-md overflow-hidden"
                        >

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left p-6"
                            >
                                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-6">
                                    {faq.question}
                                </h3>

                                <div className="text-[#b08d57] flex-shrink-0">
                                    {active === index ? (
                                        <Minus size={24} />
                                    ) : (
                                        <Plus size={24} />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>

                                {active === index && (

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                    >
                                        <div className="px-6 pb-6 border-t border-[#e7dbc8]">
                                            <p className="pt-5 text-gray-600 leading-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom CTA */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <h3 className="text-2xl font-serif text-gray-900">
                        Still Have Questions?
                    </h3>

                    <p className="text-gray-600 mt-4">
                        Our team is here to help you choose the right property and answer
                        all your queries.
                    </p>

                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="mt-8 px-10 py-4 bg-[#b08d57] text-white rounded-lg uppercase tracking-[3px] hover:bg-black transition duration-300"
                    >
                        Contact Us
                    </button>
                </motion.div>

            </div>
        </section>
    );
}