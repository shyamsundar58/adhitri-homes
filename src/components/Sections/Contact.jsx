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

        setLoading(false);   // <-- Reset loading immediately

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
console.log("Success:", success);
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

                            <div className="flex gap-5">

                                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                                    <MapPin size={22} className="text-black" />
                                </div>

                                <div>

                                    <h3 className="font-semibold text-xl text-gray-900">
                                        Office
                                    </h3>

                                    <p className="text-gray-600 mt-1">
                                        PR Towers,
                                        <br />
                                        Velachery,
                                        Chennai - 600042
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

<input
    type="email"
    name="email"
    placeholder="Email Address *"
    required
    autoComplete="email"
    className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
/>

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

<input
    type="date"
    name="visit_date"
    required
    min={new Date().toISOString().split("T")[0]}
    className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black outline-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
/>

<textarea
    name="message"
    rows={5}
    placeholder="Tell us about your requirement *"
    required
    minLength={10}
    maxLength={500}
    className="w-full mt-6 border border-gray-300 rounded-lg bg-white px-4 py-4 text-black placeholder-gray-400 outline-none resize-none focus:border-[#b08d57] focus:ring-2 focus:ring-[#b08d57]/20"
/>

<button
    type="submit"
    disabled={loading}
    className="mt-8 w-full rounded-lg bg-black py-4 text-white uppercase tracking-[3px] transition-all duration-300 hover:bg-[#b08d57] hover:text-black disabled:opacity-60"
>
    {loading ? "Submitting..." : "Book Site Visit"}
</button>

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

                {/* Google Map */}

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
                            className="w-full h-[450px] rounded-xl pointer-events-none"
                            loading="lazy"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}