import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
} from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#f8f7f3] py-24 lg:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-gold mb-4">
                        Contact Us
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif text-gray-900">
                        Let's Build Something Great Together
                    </h2>

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
                        Have a project in mind? Get in touch with our team for
                        consultations, site visits, and project inquiries.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <div className="space-y-8">

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <Phone size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Phone
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        +91 98765 43210
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <Mail size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Email
                                    </h3>

                                    <p className="text-gray-600 mt-1 break-all">
                                        info@adhitrihomes.com
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <MapPin size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Office
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        Chennai, Tamil Nadu, India
                                    </p>
                                </div>

                            </div>

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <Clock size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Working Hours
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-gray-600">
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.form
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-xl shadow-xl p-10 self-start lg:-mt-10"
                    >

                        <div className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border border-gray-300 p-4 rounded-lg outline-none focus:border-gold"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 p-4 rounded-lg outline-none focus:border-gold"
                            />

                        </div>

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="border border-gray-300 p-4 rounded-lg outline-none focus:border-gold mt-6 w-full"
                        />

                        <input
                            type="text"
                            placeholder="Project Type"
                            className="border border-gray-300 p-4 rounded-lg outline-none focus:border-gold mt-6 w-full"
                        />

                        <textarea
                            rows="5"
                            placeholder="Tell us about your project..."
                            className="border border-gray-300 p-4 rounded-lg outline-none focus:border-gold mt-6 w-full resize-none"
                        />

                        <button
                            className="
                mt-8
                w-full
                bg-black
                text-white
                py-4
                uppercase
                tracking-[4px]
                hover:bg-gold
                hover:text-black
                transition-all
                duration-300
                rounded-lg
              "
                        >
                            Send Message
                        </button>

                    </motion.form>

                </div>

                {/* Map */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 overflow-hidden rounded-xl shadow-xl"
                >
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=P.R.+Towers,+No.+123/4,+150+Feet+Bypass+Road,+Maheshwari+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <iframe
                            title="Adhitri Homes Office"
                            src="https://www.google.com/maps?q=P.R.+Towers,+No.+123/4,+150+Feet+Bypass+Road,+Maheshwari+Nagar,+Velachery,+Chennai,+Tamil+Nadu+600042&z=18&output=embed"
                            className="w-full h-[450px] pointer-events-none rounded-xl"
                            loading="lazy"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}