import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";

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

    const skills = ["React", "Laravel", "JavaScript", "Python", "PHP", "MySQL"];

    return(
        <motion.div 
            className="flex flex-col items-center md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-2xl md:shadow-sm md:backdrop-blur-[2px] dark:border-gray-700 dark:bg-gray-800/50"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          {/* Foto */}
          <motion.img 
            src="/image/about-me.png" 
            alt="Raka Ramadhani About Picture" 
            className="w-48 h-48 md:w-[500px] md:h-[500px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" 
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Konten Kanan */}
          <motion.div 
            className="text-center md:text-left max-w-3xl w-full"
            variants={containerVariants}
          >
            <motion.h1 
              className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 dark:text-white mb-4 uppercase"
              variants={itemVariants}
            >
              About
            </motion.h1>
            
            <motion.p 
              className="text-body-mobile md:text-body-desktop text-blue-950 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {aboutMe}
            </motion.p>
            
            {/* Skills */}
            <motion.div 
              className="mt-6 grid grid-cols-3 md:flex md:flex-wrap gap-2 justify-center md:justify-start"
              variants={containerVariants}
            >
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
            </motion.div>
            
            {/* Tombol Download CV */}
            <motion.a 
              href="/files/CV_ACHRIE RAKA RAMADHANI.pdf" 
              download 
              className="flex items-center justify-center space-x-2 mt-8 text-btn-mobile md:text-btn-desktop p-[12px] bg-primary hover:bg-primary-light transition-all duration-300 cursor-pointer text-white w-full md:w-full rounded-2xl shadow-md hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <DownloadIcon size={24} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
    )
}

export default About;