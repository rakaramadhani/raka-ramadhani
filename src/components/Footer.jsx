import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="border-t-4 border-border
                bg-foreground text-background
                py-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 max-w-screen-xl gap-4">
                {/* Name */}
                <h2
                    className="text-xl font-black uppercase tracking-tight"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                    Raka<span className="text-primary">Ramadhani</span>
                </h2>

                {/* Copyright */}
                <p
                    className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    © 2025 All rights reserved — Built with React &amp; Tailwind CSS
                </p>

                {/* Decorative squares */}
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary" />
                    <div className="w-3 h-3 bg-background" />
                    <div className="w-3 h-3 border-2 border-background" />
                </div>
            </div>
        </motion.footer>
    );
}
