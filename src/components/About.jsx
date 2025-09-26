import { motion } from "framer-motion";
import { ComputerIcon, LocateFixedIcon, PinIcon } from "lucide-react";

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

    const skills = ["React", "Laravel", "JavaScript", "Python", "PHP", "MySQL", 'PostgreSQL',"Next.js", "Tailwind CSS", "Bootstrap", "Figma"];

    return(
        <div className="w-full space-y-8" >
          <motion.h1 className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white mb-2 uppercase">
            About Me
          </motion.h1>
          {/* atas */}
          <div className="w-full flex md:flex-row flex-col gap-8">
            {/* Background */}
              <motion.div 
                className="flex flex-col items-left md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-lg md:shadow-sm md:backdrop-blur-[2px] w-full h-full dark:border-gray-700 dark:bg-gray-800/50"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
              
              
              {/* Konten Kanan */}
              <motion.div 
                className="text-left md:text-left max-w-3xl w-full"
                variants={containerVariants}
              >
                <motion.h1 
                  className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white mb-8 uppercase"
                  variants={itemVariants}
                >
                  Background
                </motion.h1>
                
                <motion.p 
                  className="text-body-mobile md:text-lg font-light text-blue-950 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  {aboutMe}
                </motion.p>

              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div 
                className="flex flex-col items-left md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-lg md:shadow-sm md:backdrop-blur-[2px] w-full dark:border-gray-700 dark:bg-gray-800/50"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="text-left md:text-left max-w-3xl w-full"
                variants={containerVariants}
              >
                <motion.h1 
                  className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white mb-8 uppercase"
                  variants={itemVariants}
                >
                  Education
                </motion.h1>
                
                <motion.p 
                  className="text-body-mobile md:text-lg  font-bold text-blue-950 dark:text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  Bachelor of Information System
                </motion.p>
                <div className="flex flex-raw justify-between gap-2">
                  <motion.p 
                    className="text-body-mobile md:text-lg text-blue-950 dark:text-gray-300 leading-relaxed"
                    variants={itemVariants}
                  >
                    GPA: 3.87 / 4.00
                  </motion.p>
                  <motion.p 
                    className="text-body-mobile md:text-lg text-blue-950 dark:text-gray-300 leading-relaxed"
                    variants={itemVariants}
                  >
                    Graduated at 2025
                  </motion.p>
                </div>
                <motion.p 
                    className="text-body-mobile md:text-lg font-light text-blue-950 dark:text-gray-300 leading-relaxed mt-2"
                    variants={itemVariants}
                  >
                    Specialized in software development, database management, and business analysis with focus on modern web technologies.
                  </motion.p>
              </motion.div>
            </motion.div>
            {/* Education */}
            <motion.div 
                className="flex flex-col items-left md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-lg md:shadow-sm md:backdrop-blur-[2px] w-full dark:border-gray-700 dark:bg-gray-800/50"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                className="text-left md:text-left max-w-3xl w-full"
                variants={containerVariants}
              >
                <motion.h1 
                  className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white mb-8 uppercase"
                  variants={itemVariants}
                >
                  Quick Facts About Me! 🫵
                </motion.h1>
                <div className="flex flex-col gap-4">
                  <motion.p 
                      className="text-body-mobile md:text-lg flex items-left gap-4 font-light text-blue-950 dark:text-gray-300 leading-relaxed mt-2"
                      variants={itemVariants}
                    >
                      <ComputerIcon color="#8342ED"/>
                      <p> Information System Graduate </p>
                  </motion.p>
                  <motion.p 
                      className="text-body-mobile md:text-lg flex items-left gap-4 font-light text-blue-950 dark:text-gray-300 leading-relaxed mt-2"
                      variants={itemVariants}
                    >
                      <PinIcon color="#8342ED"/>
                      <p> Purworejo, Central Java, Indonesia </p>
                  </motion.p>
                  <motion.p 
                      className="text-body-mobile md:text-lg flex items-left gap-4 font-light text-blue-950 dark:text-gray-300 leading-relaxed mt-2"
                      variants={itemVariants}
                    >
                      <ComputerIcon color="#8342ED"/>
                      <p> Information System Graduate </p>
                  </motion.p>
                </div>
                
                
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-8">
            {/* Skills */}
            <motion.div 
                  className="flex flex-wrap items-left md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-lg md:shadow-sm md:backdrop-blur-[2px] w-full h-full dark:border-gray-700 dark:bg-gray-800/50"
                  variants={containerVariants}
                >
                  <motion.h1 
                  className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white uppercase"
                  variants={itemVariants}
                >
                  Technical Skills
                </motion.h1>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                    <motion.p 
                      key={skill} 
                      className="px-3 py-2 rounded-lg bg-primary-extra-light text-primary-dark text-sm md:text-base font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.p>
                  ))}
                  </div>
                </motion.div>
            {/* Skills */}
            <motion.div 
                  className="flex flex-wrap items-left md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-lg md:shadow-sm md:backdrop-blur-[2px] w-full h-full dark:border-gray-700 dark:bg-gray-800/50"
                  variants={containerVariants}
                >
                  <motion.h1 
                  className="font-bold text-h2-mobile md:text-xl text-blue-950 dark:text-white uppercase"
                  variants={itemVariants}
                >
                   Tools
                </motion.h1>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                    <motion.p 
                      key={skill} 
                      className="px-3 py-2 rounded-lg bg-primary-extra-light text-primary-dark text-sm md:text-base font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.p>
                  ))}
                  </div>
                </motion.div>
          </div>
        </div>
    )
}

export default About;