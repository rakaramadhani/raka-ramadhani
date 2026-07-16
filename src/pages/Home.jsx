import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectsData";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import ExperienceData from "../data/ExperienceData";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import About from "../components/About";
import ReachMe from "../components/ReachMe";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";
import { OrganizationalData } from "../data/OrganizationalExp";
import OrganizationalExperience from "../components/OrganizationalExp";

/* ── Animation ──────────────────────────────────── */
const sectionVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/* ── Section Header ─────────────────────────────── */
const SectionHeader = ({ number, title, subtitle }) => (
    <div className="mb-12 md:mb-16">
        <div className="flex items-start gap-4">
            {/* Number marker */}
            <span
                className="text-5xl md:text-6xl font-black text-[#000080] leading-none select-none"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
                {number.toString().padStart(2, "0")}
            </span>
            <div className="pt-2">
                <h2
                    className="text-2xl md:text-4xl font-black uppercase tracking-tight
                        text-[#0F0F0F] dark:text-[#FAFAFA] leading-none"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                    {title}
                </h2>
                <p
                    className="text-sm md:text-base text-[#4A4A4A] dark:text-[#A0A0A0] mt-1 font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {subtitle}
                </p>
            </div>
        </div>
        {/* Hard divider line */}
        <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA] mt-6" />
    </div>
);

/* ── Page ───────────────────────────────────────── */
const HomePage = () => {
    const Projects      = ProjectData();
    const Organizational = OrganizationalData();
    const Experiences   = ExperienceData();

    return (
        <div className="relative w-full min-h-screen bg-[#FAFAFA] dark:bg-[#0F0F0F] transition-colors duration-200">
            <ScrollProgress />

            <div className="flex flex-col relative">

                {/* ── Navbar ── */}
                <div className="mt-16 md:mt-[72px]">
                    <NavigationBar />
                </div>

                {/* ══ HERO ══════════════════════════════════════════════ */}
                <motion.section
                    id="home"
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl
                        flex flex-col-reverse md:flex-row items-center justify-center
                        gap-12 md:gap-24
                        py-20 md:py-32"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Landing />
                </motion.section>

                {/* Hard divider */}
                <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA]" />

                {/* ══ ABOUT ══════════════════════════════════════════════ */}
                <motion.section
                    id="about"
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl
                        flex flex-col items-center justify-center
                        py-20 md:py-28 w-full"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <div className="w-full">
                        <SectionHeader
                            number={1}
                            title="The Background"
                            subtitle="Get to know me better"
                        />
                        <About />
                    </div>
                </motion.section>

                {/* Hard divider */}
                <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA]" />

                {/* ══ PROJECTS ═══════════════════════════════════════════ */}
                <motion.section
                    id="project"
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl
                        flex flex-col items-center justify-center
                        py-20 md:py-28 w-full"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="w-full">
                        <SectionHeader
                            number={2}
                            title="Shipped Projects"
                            subtitle="Some of my recent work"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                            {Projects.map((project, index) => (
                                <motion.div
                                    key={project.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex justify-center"
                                >
                                    <ProjectCard {...project} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Hard divider */}
                <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA]" />

                {/* ══ EXPERIENCE ═════════════════════════════════════════ */}
                <motion.section
                    id="experience"
                    className="scroll-mt-24 px-6 w-full
                        flex flex-col items-center justify-center
                        py-20 md:py-28"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="w-full max-w-screen-xl mx-auto">
                        <SectionHeader
                            number={3}
                            title="Proven Track Record"
                            subtitle="My professional journey"
                        />

                        {/* Timeline */}
                        <div className="relative w-full max-w-6xl mx-auto">
                            {/* Center line (desktop) */}
                            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-[#000080] transform -translate-x-1/2 hidden md:block" />

                            <div className="space-y-8">
                                {Experiences.map((experience, index) => (
                                    <motion.div
                                        key={experience.key}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.15, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="relative flex items-center w-full"
                                    >
                                        {/* Timeline square marker */}
                                        <div className="absolute left-1/2 w-4 h-4 bg-[#000080] border-2 border-[#0F0F0F]
                                            transform -translate-x-1/2 z-10 hidden md:block" />

                                        {/* Card */}
                                        <div className={`w-full ${
                                            index % 2 === 0
                                                ? 'md:w-[calc(50%-1.5rem)] md:mr-auto md:pr-6'
                                                : 'md:w-[calc(50%-1.5rem)] md:ml-auto md:pl-6'
                                        }`}>
                                            <Experience {...experience} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Hard divider */}
                <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA]" />

                {/* ══ ORGANIZATIONAL EXP ════════════════════════════════ */}
                <motion.section
                    id="org"
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl
                        flex flex-col items-center justify-center
                        py-20 md:py-28 w-full"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="w-full">
                        <SectionHeader
                            number={4}
                            title="Organizational Experience"
                            subtitle="Leadership & community roles"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                            {Organizational.map((project, index) => (
                                <motion.div
                                    key={project.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex justify-center"
                                >
                                    <OrganizationalExperience {...project} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Hard divider */}
                <div className="w-full h-0.5 bg-[#0F0F0F] dark:bg-[#FAFAFA]" />

                {/* ══ CONTACT ════════════════════════════════════════════ */}
                <motion.section
                    id="contact"
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl
                        flex flex-col items-center justify-center
                        py-20 md:py-28 w-full"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="w-full">
                        <SectionHeader
                            number={5}
                            title="Let's Connect"
                            subtitle="Get in touch with me"
                        />
                        <ReachMe />
                    </div>
                </motion.section>

                {/* ── Footer ── */}
                <Footer />
            </div>

            <BackToTop />
        </div>
    );
};

export default HomePage;