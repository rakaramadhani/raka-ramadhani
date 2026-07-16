import { motion } from 'framer-motion';
import { DownloadIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Landing = () => {
    const containerVariants = {
        hidden:  { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden:  { y: 24, opacity: 0 },
        visible: { y: 0,  opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const imageVariants = {
        hidden:  { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, type: "spring", stiffness: 120 },
        },
    };

    return (
        <>
            {/* Left — Text Content */}
            <motion.div
                className="text-center md:text-left md:w-2xl space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Kicker */}
                <motion.p
                    variants={itemVariants}
                    className="inline-block text-xs md:text-sm font-bold uppercase tracking-[0.25em]
                        text-primary border-2 border-primary
                        px-3 py-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    System Analyst &amp; Engineer
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="uppercase leading-[1.05] text-foreground"
                    style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Architecting Logic<br />
                    <span className="text-primary">Designing</span> Experiences.
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-foreground leading-[1.7] max-w-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
                >
                    I bridge the gap between technical execution and enterprise strategy.
                    Specializing in UI/UX architecture and full-stack development to build
                    scalable, high-performance digital solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-4 md:flex-row md:justify-start items-center md:items-start"
                >
                    {/* Primary — Download Resume */}
                    <motion.a
                        href="/files/CV_ACHRIE RAKA RAMADHANI.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3
                            bg-primary text-primary-foreground
                            border-2 border-border
                            shadow-[4px_4px_0_0_var(--color-border)]
                            font-bold uppercase tracking-wider text-sm
                            transition-all duration-150 cursor-pointer select-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--color-border)" }}
                        whileTap={{   x:  2, y:  2, boxShadow: "1px 1px 0 0 var(--color-border)" }}
                        transition={{ duration: 0.1 }}
                    >
                        <DownloadIcon size={18} />
                        Download Resume
                    </motion.a>

                    {/* Secondary — View Projects */}
                    <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        className="flex items-center gap-2 px-6 py-3
                            bg-transparent text-primary border-2 border-primary
                            shadow-[4px_4px_0_0_var(--color-primary)]
                            font-bold uppercase tracking-wider text-sm
                            transition-all duration-150 cursor-pointer select-none
                            hover:-translate-x-0.5 hover:-translate-y-0.5
                            hover:shadow-[6px_6px_0_0_var(--color-primary)]
                            active:translate-x-0.5 active:translate-y-0.5
                            active:shadow-[1px_1px_0_0_var(--color-primary)]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        View Projects
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Right — Profile Image */}
            <motion.div
                className="relative flex-shrink-0"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Offset depth frame using primary color */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-primary -z-10" />
                <motion.img
                    src="/image/profile-pict.png"
                    alt="Raka Ramadhani Profile Picture"
                    className="w-60 md:w-[360px] h-60 md:h-[360px] object-cover
                        border-4 border-border
                        grayscale-[10%]"
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                />
            </motion.div>
        </>
    );
};

export default Landing;