import { motion } from "framer-motion";
import { ComputerIcon, MapPin, StarIcon } from "lucide-react";
// Import react-icons untuk teknologi dan tools
import { 
  FaReact, 
  FaLaravel, 
  FaJs, 
  FaPython, 
  FaPhp, 
  FaBootstrap, 
  FaFigma, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiPostgresql, 
} from "react-icons/si";

const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    
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
        { name: "React", icon: <FaReact className="text-blue-500" size={48}/> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500" size={48}/> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" size={48}/> },
        { name: "Python", icon: <FaPython className="text-blue-600" size={48}/> },
        { name: "PHP", icon: <FaPhp className="text-purple-600" size={48}/> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" size={48}/> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" size={48}/> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={48}/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" size={48}/> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" size={48}/> },
    ];

    // Data tools dengan icon
    const tools = [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" size={48} /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" size={48}/> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" size={48}/> }
    ];

    return(
        <div className="w-full space-y-6 lg:space-y-8" >
          <motion.h1 className="font-bold text-h2-mobile md:text-xl text-center  text-blue-950 dark:text-white mb-2 uppercase">
            About Me
          </motion.h1>
          <motion.h2 className="text-body-mobile md:text-body-desktop text-blue-950 dark:text-gray-300">
          Driven by curiosity and innovation, I bring fresh perspectives to technology and business challenges.
          </motion.h2>
          
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

            {/* Tools */}
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
                Tools
              </motion.h1>
              
              {/* Grid Layout untuk Tools */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 place-items-center">
                {tools.map((tool, index) => (
                  <motion.div 
                    key={tool.name} 
                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-default w-full max-w-[120px]"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: index * 0.05 }}
                    title={tool.name} // Tooltip saat hover
                  >
                    <span className="text-3xl md:text-4xl lg:text-5xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {tool.icon}
                    </span>
                    {/* Label nama tool - selalu visible */}
                    <span className="text-xs md:text-sm font-medium text-blue-950 dark:text-gray-300 text-center leading-tight">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
    )
}

export default About;