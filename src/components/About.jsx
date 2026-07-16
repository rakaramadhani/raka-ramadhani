import { motion } from "framer-motion";
import { ComputerIcon, MapPin, StarIcon } from "lucide-react";
import CertificateData from "../data/CertificateData";
import {
    FaReact,
    FaLaravel,
    FaJs,
    FaPython,
    FaPhp,
    FaBootstrap,
    FaCertificate,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMysql,
    SiPostgresql,
} from "react-icons/si";

/* ── Animation variants ─────────────────────────────────────── */
const containerVariants = {
    hidden:  { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};
const itemVariants = {
    hidden:  { y: 20, opacity: 0 },
    visible: { y: 0,  opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ── Reusable card wrapper ──────────────────────────────────── */
const NeoCard = ({ children, className = "" }) => (
    <motion.div
        className={`bg-card text-card-foreground
            border-2 border-border
            shadow-[4px_4px_0_0_var(--color-primary)]
            p-4 md:p-6 lg:p-8
            transition-all duration-150 ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--color-primary)" }}
        transition={{ duration: 0.15 }}
    >
        {children}
    </motion.div>
);

/* ── Section label ──────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
    <motion.h2
        variants={itemVariants}
        className="font-black uppercase tracking-widest text-sm text-primary
            border-b-2 border-primary pb-1 mb-5 w-fit"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
    >
        {children}
    </motion.h2>
);

const About = () => {
    const aboutMe =
        "I don't just write code; I engineer business solutions. With a strong foundation in Information Systems and professional experience in banking and government sectors, I transform complex requirements into intuitive, reliable, and efficient applications. I thrive at the intersection of system analysis and front-end architecture.";

    const certificates = CertificateData();

    const skills = [
        { name: "React",        icon: <FaReact       size={48} color="#61DAFB" /> },
        { name: "Laravel",      icon: <FaLaravel     size={48} color="#FF2D20" /> },
        { name: "JavaScript",   icon: <FaJs          size={48} color="#F7DF1E" /> },
        { name: "Python",       icon: <FaPython      size={48} color="#3776AB" /> },
        { name: "PHP",          icon: <FaPhp         size={48} color="#777BB4" /> },
        { name: "MySQL",        icon: <SiMysql       size={48} color="#4479A1" /> },
        { name: "PostgreSQL",   icon: <SiPostgresql  size={48} color="#336791" /> },
        { name: "Next.js",      icon: <SiNextdotjs   size={48} className="text-foreground" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
        { name: "Bootstrap",    icon: <FaBootstrap   size={48} color="#7952B3" /> },
    ];

    return (
        <div className="w-full space-y-5 lg:space-y-6">

            {/* ── Row 1: Bio · Education · Quick Facts ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                {/* Bio */}
                <NeoCard className="lg:col-span-1">
                    <SectionLabel>Background</SectionLabel>
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base leading-[1.75] text-foreground"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {aboutMe}
                    </motion.p>
                </NeoCard>

                {/* Education */}
                <NeoCard className="lg:col-span-1">
                    <SectionLabel>Education</SectionLabel>
                    <motion.p
                        variants={itemVariants}
                        className="text-base font-bold text-foreground mb-1"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                        Bachelor of Information System
                    </motion.p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-3">
                        <motion.p variants={itemVariants}
                            className="text-xs text-primary font-semibold uppercase tracking-wider">
                            GPA: 3.87 / 4.00
                        </motion.p>
                        <motion.p variants={itemVariants}
                            className="text-xs text-muted-foreground">
                            Graduated 2025
                        </motion.p>
                    </div>
                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-sm leading-[1.7] text-muted-foreground"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Specialized in software development, database management, and
                        business analysis with focus on modern web technologies.
                    </motion.p>
                </NeoCard>

                {/* Quick Facts */}
                <NeoCard className="lg:col-span-1">
                    <SectionLabel>Quick Facts</SectionLabel>
                    <div className="flex flex-col gap-4">
                        {[
                            { icon: <ComputerIcon className="w-5 h-5 flex-shrink-0 text-primary" strokeWidth={0} fill="currentColor" />, text: "Information System Graduate" },
                            { icon: <MapPin       className="w-5 h-5 flex-shrink-0 text-primary" strokeWidth={2} />,                    text: "Purworejo, Central Java, Indonesia" },
                            { icon: <StarIcon     className="w-5 h-5 flex-shrink-0 text-primary" strokeWidth={0} fill="currentColor" />, text: "BNSP Certified Web Developer" },
                        ].map(({ icon, text }, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex items-center gap-3 text-sm text-foreground"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {icon}
                                <p>{text}</p>
                            </motion.div>
                        ))}
                    </div>
                </NeoCard>
            </div>

            {/* ── Row 2: Tech Stack · Certifications ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                {/* Tech Stack */}
                <NeoCard>
                    <SectionLabel>Tech Stack</SectionLabel>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                className="flex flex-col items-center gap-2 p-3
                                    border-2 border-border
                                    shadow-[2px_2px_0_0_var(--color-primary)]
                                    transition-all duration-150 cursor-default"
                                whileHover={{ x: -1, y: -1, boxShadow: "4px 4px 0 0 var(--color-primary)" }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <span>{skill.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </NeoCard>

                {/* Certifications */}
                <NeoCard>
                    <SectionLabel>Training &amp; Certification</SectionLabel>
                    <div className="space-y-3">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.key}
                                variants={itemVariants}
                                className="flex items-start gap-3 p-3
                                    border-2 border-border border-l-4 border-l-primary
                                    shadow-[2px_2px_0_0_var(--color-border)]
                                    transition-all duration-150 cursor-default"
                                whileHover={{ x: -1, y: -1, boxShadow: "4px 4px 0 0 var(--color-border)" }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="flex-shrink-0 p-1.5 border-2 border-primary bg-primary">
                                    <FaCertificate className="text-primary-foreground" size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-foreground mb-0.5 leading-tight"
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                        {cert.certification}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <p className="text-xs text-muted-foreground">
                                            {cert.organizer}
                                        </p>
                                        <span className="text-xs font-bold text-primary border border-primary px-1.5 py-0.5 w-fit uppercase tracking-wider">
                                            {cert.issued}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </NeoCard>
            </div>
        </div>
    );
};

export default About;