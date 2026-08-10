import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
} from "lucide-react";

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");

        try {
            await emailjs.sendForm(
                "service_t1jfipd",
                "template_s28l7n3",
                form.current,
                "PbW-RRqFabitbOpvK"
            );

            form.current.reset();

            setLoading(false);

            setSuccess(
                "✅ Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly."
            );

            setTimeout(() => {
                setSuccess("");
            }, 5000);

        } catch (error) {
            console.error(error);

            setLoading(false);

            setSuccess("❌ Something went wrong. Please try again.");

            setTimeout(() => {
                setSuccess("");
            }, 5000);
        }
    };

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
                        Book a Site Visit / Enquire Now
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-serif text-gray-900">
                        Book a Site Visit or Get in Touch
                    </h2>

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
                        Looking for apartments, residential plots, or construction
                        services? Fill in your details below and our team will
                        contact you shortly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT CONTACT DETAILS */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-8">

                            {/* Phone */}
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <Phone size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Phone
                                    </h3>

                                    <a
                                        href="tel:+919443764949"
                                        className="text-gray-600 mt-1 hover:text-gold"
                                    >
                                        +91 9443764949
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <Mail size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Email
                                    </h3>

                                    <a
                                        href="mailto:adhitrihomes@gmail.com"
                                        className="text-gray-600 mt-1 break-all hover:text-gold"
                                    >
                                        adhitrihomes@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Office */}
                            <div className="flex gap-5">
                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <MapPin size={22} className="text-black" />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Office
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        P.R. Towers,
                                        <br />
                                        123/4, 150 Feet Bypass Road,
                                        <br />
                                        Maheshwari Nagar, Velachery,
                                        <br />
                                        Chennai - 600042
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
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

                    {/* RIGHT FORM */}
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-xl shadow-xl p-10"
                    >

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Full Name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                required
                                minLength={3}
                                maxLength={50}
                                autoComplete="name"
                                className="w-full border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                            />

                            {/* Mobile */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number *"
                                required
                                pattern="[6-9][0-9]{9}"
                                title="Please enter a valid 10-digit Indian mobile number"
                                autoComplete="tel"
                                className="w-full border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                            />

                        </div>

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            required
                            autoComplete="email"
                            className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                        />

                        {/* Requirement */}
                        <select
                            name="service"
                            required
                            defaultValue=""
                            className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                        >
                            <option value="" disabled>
                                Select Requirement *
                            </option>

                            <option value="Apartment">
                                Apartment
                            </option>

                            <option value="Plots">
                                Residential Plots
                            </option>

                            <option value="Construction">
                                Construction Services
                            </option>

                            <option value="Commercial">
                                Commercial Project
                            </option>

                            <option value="Other">
                                Other
                            </option>
                        </select>

                        {/* Preferred Location */}
                        <input
                            type="text"
                            name="location"
                            placeholder="Preferred Location *"
                            required
                            minLength={3}
                            maxLength={60}
                            autoComplete="address-level2"
                            className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                        />

                        {/* Visit Date */}
                        <input
                            type="date"
                            name="visit_date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                        />

                        {/* Message */}
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell us about your requirement *"
                            required
                            minLength={10}
                            maxLength={500}
                            className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none resize-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
                        />

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full rounded-lg bg-black py-4 text-white uppercase tracking-[3px] transition-all duration-300 hover:bg-[#b08d57] hover:text-black disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Book Site Visit"}
                        </button>

                        {/* Success / Error */}
                        {success && (
                            <div
                                className={`mt-6 rounded-lg border p-4 text-center font-medium ${
                                    success.startsWith("✅")
                                        ? "border-green-300 bg-green-50 text-green-700"
                                        : "border-red-300 bg-red-50 text-red-700"
                                }`}
                            >
                                {success}
                            </div>
                        )}

                    </motion.form>

                </div>

                {/* =====================================================
                    GOOGLE MAP
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 overflow-hidden rounded-xl shadow-xl bg-white"
                >
                    <iframe
                        title="ADHITRI Homes - Velachery Location"
                        src="https://www.google.com/maps?q=The%20Wedding%20Biryani%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu&output=embed"
                        className="w-full h-[450px] border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>

                {/* Open Google Maps */}
                <div className="text-center mt-6">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=The%20Wedding%20Biryani%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-[#b08d57] transition-colors duration-300 font-medium"
                    >
                        <MapPin size={18} />
                        View Location on Google Maps
                    </a>
                </div>

            </div>
        </section>
    );
}