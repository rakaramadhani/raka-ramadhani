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

import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import { motion } from "framer-motion";



const HomePage = () => {
    const Projects = ProjectData();
    const Experiences = ExperienceData();
    
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
            <div className="flex flex-col relative bg-transparent">
                {/* Navbar */}
                <div className="mt-16 md:mt-8">
                    <NavigationBar />
                </div>
                
                {/* Home Section */}
                <motion.section 
                    id="home" 
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[216px] md:mt-32 h-auto md:h-full py-16 md:py-24 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Landing />
                </motion.section>
                
                {/* Section Divider */}
                <div className="w-full flex justify-center my-8">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                {/* About Section */}
                <motion.section 
                    id="about" 
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl flex flex-col items-center justify-center py-16 md:py-24 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-12">
                        <motion.h1 
                            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h1>
                        <motion.p 
                            className="text-xl font-light text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Get to know me better
                        </motion.p>
                    </motion.div>
                    <About />
                </motion.section>
                
                {/* Section Divider */}
                <div className="w-full flex justify-center my-8">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                {/* Projects Section */}
                <motion.section 
                    id="project" 
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center py-16 md:py-24 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-12">
                        <motion.h1 
                            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Featured Projects
                        </motion.h1>
                        <motion.p 
                            className="text-xl font-light text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Some of my recent work
                        </motion.p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                        {Projects.map((project, index) => (
                            <motion.div
                                key={project.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                            <ProjectCard {...project} />
                        </motion.div>
                        ))}
                    </div>
                </motion.section>
                
                {/* Section Divider */}
                <div className="w-full flex justify-center my-8">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                {/* Experience Section */}
                <motion.section 
                    id="experience" 
                    className="scroll-mt-24 px-6 w-full flex flex-col items-center justify-center py-16 md:py-24 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-12 max-w-screen-xl mx-auto">
                        <motion.h1 
                            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Work Experience
                        </motion.h1>
                        <motion.p 
                            className="text-xl font-light text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            My professional journey
                        </motion.p>
                    </motion.div>
                    <div className="relative w-full max-w-6xl mx-auto">
                        <motion.div
                            className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 rounded-full hidden md:block"
                            initial={{ opacity: 0, scaleY: 0 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                        
                        <div className="space-y-8">
                            {Experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.key}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="relative flex items-center w-full"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 w-6 h-6 outline-4 dark:outline-[#0f172a] outline-white bg-indigo-500 rounded-full transform -translate-x-1/2 z-10 hidden md:block text-white text-center justify-center items-center  ">{experience.key}</div>
                                    
                                    {/* Experience card */}
                                    <div className={`w-full ${
                                        index % 2 === 0 
                                            ? 'md:w-[calc(50%-1rem)] md:mr-auto md:pr-4' // Card ganjil (index 0,2,4...) di kiri
                                            : 'md:w-[calc(50%-1rem)] md:ml-auto md:pl-4' // Card genap (index 1,3,5...) di kanan
                                    }`}>
                                        <Experience {...experience} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
                
                {/* Section Divider */}
                <div className="w-full flex justify-center my-8">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>

                {/* Certification */}
                {/* <motion.section 
                    id="certificate" 
                    className="scroll-mt-24 mx-6 md:mx-24 flex flex-col items-center justify-center text-center bg-transparent"
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {Certificates.map((certificate, index) => (
                            <motion.div
                                key={certificate.key}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex justify-center"
                            >
                                <Certificate {...certificate} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section> */}

                {/* Contact Section */}
                <motion.section 
                    id="contact" 
                    className="scroll-mt-24 px-6 mx-auto max-w-screen-xl flex flex-col items-center justify-center py-16 md:py-24 bg-transparent"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-12">
                        <motion.h1 
                            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Let&apos;s Connect
                        </motion.h1>
                        <motion.p 
                            className="text-xl font-light text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Get in touch with me
                        </motion.p>
                    </motion.div>
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