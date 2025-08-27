
import { motion } from 'framer-motion';

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer 
            className="bg-transparent border-t border-gray-200 dark:border-slate-700 text-blue-950 dark:text-white py-8 mt-16"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6">
                {/* Nama & Copyright */}
                <motion.div 
                    className="text-center md:text-left"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        Raka Ramadhani
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © 2025 All rights reserved. Built with ❤️ using React & Tailwind CSS.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
