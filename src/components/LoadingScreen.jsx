import { motion } from "framer-motion";
import logo from "../assets/logos/AhLogo.webp"

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
            <div className="text-center">

                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Adhitri Homes"
                    className="w-44 mx-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                />

                {/* Company Name */}
                <motion.h1
                    className="mt-6 text-3xl font-serif tracking-[3px] text-gray-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.4,
                    }}
                >
                    ADHITRI HOMES
                </motion.h1>

                <motion.p
                    className="text-[#b08d57] tracking-[4px] uppercase text-sm mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.6,
                    }}
                >
                    Building Dreams. Creating Landmarks.
                </motion.p>

                {/* Loading Bar */}
                <div className="w-56 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto mt-8">

                    <motion.div
                        className="h-full bg-[#b08d57]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    />

                </div>

            </div>
        </motion.div>
    );
}