import { motion } from "framer-motion";
import { ComputerIcon, MapPin, StarIcon } from "lucide-react";
import CertificateData from "../data/CertificateData";
// Import react-icons untuk teknologi dan tools
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


const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    const certificates = CertificateData();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    // Data skills dengan icon
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500" size={64}/> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500" size={64}/> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" size={64}/> },
        { name: "Python", icon: <FaPython className="text-blue-600" size={64}/> },
        { name: "PHP", icon: <FaPhp className="text-purple-600" size={64}/> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" size={64}/> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" size={64}/> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={64}/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={64}/> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size={64}/> },
    ];

    return(
        <div className="w-full space-y-6 lg:space-y-8" >
          {/* Section Atas - Background, Education, Quick Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Background */}
            <motion.div 
              className="lg:col-span-1 p-4 md:p-6 lg:p-8 border rounded-lg shadow-sm backdrop-blur-[2px] h-fit md:h-full dark:border-gray-700 dark:bg-gray-800/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="w-full" variants={containerVariants}>
                <motion.h1 
                  className="font-bold text-lg md:text-xl text-blue-950 dark:text-white mb-4 lg:mb-6 uppercase"
                  variants={itemVariants}
                >
                  Background
                </motion.h1>
                
                <motion.p 
                  className="text-sm md:text-base lg:text-lg font-light text-blue-950 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  {aboutMe}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div 
              className="lg:col-span-1 p-4 md:p-6 lg:p-8 border rounded-lg shadow-sm backdrop-blur-[2px] h-fit md:h-full dark:border-gray-700 dark:bg-gray-800/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="w-full" variants={containerVariants}>
                <motion.h1 
                  className="font-bold text-lg md:text-xl text-blue-950 dark:text-white mb-4 lg:mb-6 uppercase"
                  variants={itemVariants}
                >
                  Education
                </motion.h1>
                
                <motion.p 
                  className="text-sm md:text-base lg:text-lg font-bold text-blue-950 dark:text-gray-300 leading-relaxed mb-2"
                  variants={itemVariants}
                >
                  Bachelor of Information System
                </motion.p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2 mb-3">
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    GPA: 3.87 / 4.00
                  </motion.p>
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    Graduated at 2025
                  </motion.p>
                </div>
                
                <motion.p 
                  className="text-xs md:text-sm lg:text-base font-light text-blue-950 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  Specialized in software development, database management, and business analysis with focus on modern web technologies.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div 
              className="lg:col-span-1 p-4 md:p-6 lg:p-8 border rounded-lg shadow-sm backdrop-blur-[2px] h-fit md:h-full dark:border-gray-700 dark:bg-gray-800/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="w-full" variants={containerVariants}>
                <motion.h1 
                  className="font-bold text-lg md:text-xl text-blue-950 dark:text-white mb-4 lg:mb-6 uppercase"
                  variants={itemVariants}
                >
                  Quick Facts About Me! 🫵
                </motion.h1>
                
                <div className="flex flex-col gap-3 lg:gap-4">
                  <motion.div 
                    className="flex items-center gap-3 text-xs md:text-sm lg:text-base font-light text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    <ComputerIcon className="w-5 h-5 flex-shrink-0" strokeWidth={0} fill="#8342ED"/>
                    <p>Information System Graduate</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 text-xs md:text-sm lg:text-base font-light text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={2} color="#8342ED"/>
                    <p>Purworejo, Central Java, Indonesia</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 text-xs md:text-sm lg:text-base font-light text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                  >
                    <StarIcon className="w-5 h-5 flex-shrink-0" strokeWidth={0} fill="#8342ED"/>
                    <p>BNSP Certified Web Developer</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Section Bawah - Skills dan Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Technical Skills */}
            <motion.div 
              className="p-4 md:p-6 lg:p-8 border rounded-lg shadow-sm backdrop-blur-[2px] dark:border-gray-700 dark:bg-gray-800/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1 
                className="font-bold text-lg md:text-xl text-center text-blue-950 dark:text-white mb-4 lg:mb-6 uppercase"
                variants={itemVariants}
              >
                Tech Stack
              </motion.h1>
              
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center gap-3 rounded-lg  text-sm md:text-base font-medium  transition-all duration-300 cursor-default"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-lg flex-shrink-0">{skill.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div 
              className="p-4 md:p-6 lg:p-8 border rounded-lg shadow-sm backdrop-blur-[2px] dark:border-gray-700 dark:bg-gray-800/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1 
                className="font-bold text-lg md:text-xl text-center text-blue-950 dark:text-white mb-4 lg:mb-6 uppercase"
                variants={itemVariants}
              >
                Training and Certification
              </motion.h1>
              
              {/* Layout untuk Certificates */}
              <div className="space-y-4">
                {certificates.map((certificate, index) => (
                  <motion.div 
                    key={certificate.key} 
                    className="group p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-all duration-300 cursor-default"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="flex-shrink-0 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaCertificate className="text-blue-600 dark:text-blue-400" size={24}/>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-semibold text-blue-950 dark:text-white mb-1 leading-tight">
                          {certificate.certification}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            {certificate.organizer}
                          </p>
                          <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full w-fit">
                            {certificate.issued}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
    )
}

export default About;