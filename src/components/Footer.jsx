import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="border-t-4 border-[#0F0F0F] dark:border-[#FAFAFA]
                bg-[#0F0F0F] dark:bg-[#0F0F0F]
                text-[#FAFAFA] py-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 max-w-screen-xl gap-4">
                {/* Name */}
                <h2
                    className="text-xl font-black uppercase tracking-tight text-[#FAFAFA]"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                    Raka<span className="text-[#000080]" style={{ WebkitTextStroke: "1px #4444AA" }}>Ramadhani</span>
                </h2>

                {/* Copyright */}
                <p
                    className="text-xs font-medium text-[#A0A0A0] uppercase tracking-widest text-center"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    © 2025 All rights reserved — Built with React &amp; Tailwind CSS
                </p>

                {/* Accent block */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#000080]" />
                    <div className="w-3 h-3 bg-[#FAFAFA]" />
                    <div className="w-3 h-3 border-2 border-[#FAFAFA]" />
                </div>
            </div>
        </motion.footer>
    );
}
