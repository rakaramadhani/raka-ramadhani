import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectsData";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import ExperienceData from "../data/ExperienceData";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import About from "../components/About";
import ParticlesBackground from "../components/ParticlesBG"
import ReachMe from "../components/ReachMe";
import Certificate from "../components/Certificate";
import CertificateData from "../data/CertificateData";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";



const HomePage = () => {
    const Projects = ProjectData();
    const Experiences = ExperienceData();
    const Certificates = CertificateData();
    
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <div className="relative w-full min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 ">
            <ScrollProgress />
            <ParticlesBackground/>
            <div className="flex flex-col gap-16 mt-16 md:mt-8 mx-auto md:mx-[96px] relative bg-transparent">
                {/* Navbar */}
                <NavigationBar />
                
                {/* Home */}
                <motion.section 
                    id="home" 
                    className="scroll-mt-24 mx-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[216px] px-4 md:mt-32 md:px-12 h-auto md:h-full bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Landing />
                </motion.section>

                {/* About */}
                <motion.section 
                    id="about" 
                    className="scroll-mt-24 mx-4 flex flex-col md:flex-row items-center md:h-[760px] justify-center gap-8 md:gap-24 px-4 md:px-12 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <About />
                </motion.section>

                {/* Project */}
                <motion.section 
                    id="project" 
                    className="scroll-mt-24 flex flex-col items-center justify-center text-center px-4 md:px-12 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1 
                        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        My Project 👇
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Projects.map((project, index) => (
                            <motion.div
                                key={project.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Experience */}
                <motion.section 
                    id="experience" 
                    className="scroll-mt-24 flex flex-col items-center justify-center text-center px-4 md:px-12 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1 
                        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        My Experience 👇
                    </motion.h1>
                    <div className="relative w-full max-w-6xl">
                        <motion.div
                            className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 rounded-full hidden md:block"
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                        
                        <div className="grid grid-cols-1 gap-8">
                            {Experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.key}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center w-full ${
                                        experience.key % 2 === 0 ? "justify-start" : "justify-end"
                                    }`}
                                >
                                    <div className="absolute left-1/2 w-4 h-4 outline-4 dark:outline-[#0f172a] outline-white bg-indigo-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
                                    <Experience {...experience} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Certification */}
                <motion.section 
                    id="certificate" 
                    className="scroll-mt-24 flex flex-col items-center justify-center text-center px-4 md:px-12 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1 
                        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        My Certification 👇
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Certificate {...certificate} />
                        </motion.div>
                    ))}
                    </div>
                </motion.section>

                {/* Contact Form */}
                <motion.section 
                    id="contact" 
                    className="scroll-mt-24 flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-12 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Let&apos;s Connect </h1>
                    <ReachMe/>
                </motion.section>

                {/* Footer */}
                <Footer />
            </div>
            <BackToTop />
        </div>
    );
};

export default HomePage;