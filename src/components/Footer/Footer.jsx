import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import logo from "../../assets/logos/AhLogo.webp";
const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Why Choose Us", id: "why-choose" },
    { name: "Projects", id: "projects" },
    { name: "Construction", id: "construction" },
    { name: "Contact", id: "contact" },
];

const services = [
    "Residential",
    "Commercial",
    "Architecture",
    "Interiors",
    "Renovation",
    "Landscaping",
];

export default function Footer() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-black text-white">
            {/* Top */}

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}

                    <img
                        src={logo}
                        alt="Adhitri Homes Pvt. Ltd."
                        className="h-20 w-auto object-contain mb-4"
                    />

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Quick Links
                        </h3>

                        <div className="space-y-4">

                            {quickLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block text-gray-400 hover:text-gold transition duration-300"
                                >
                                    {link.name}
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Services
                        </h3>

                        <div className="space-y-4">

                            {services.map((service) => (
                                <p
                                    key={service}
                                    className="text-gray-400"
                                >
                                    {service}
                                </p>
                            ))}

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">
                            Contact
                        </h3>

                        <div className="space-y-6">

                            <div className="flex gap-3">

                                <Phone className="text-gold mt-1" size={18} />

                                <p className="text-gray-400">
                                    +91 9443764949
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <Mail className="text-gold mt-1" size={18} />

                                <p className="text-gray-400">
                                    adhitrihomes@gmail.com
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <MapPin className="text-gold mt-1" size={18} />

                                <p className="text-gray-400">
                                    Chennai, Tamil Nadu, India
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Adhitri Homes PVT LTD. All Rights Reserved.
                    </p>

                    <div className="flex gap-8 text-sm text-gray-500">

                        <a href="#" className="hover:text-gold transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-gold transition">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}