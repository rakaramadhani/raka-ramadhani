import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Landing = () => {
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

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return(
        <>
            <motion.div 
                className="text-center md:text-left space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 dark:text-white"
                    variants={itemVariants}
                >
                    Hello, I'm <span className="text-red-500">Raka Ramadhani</span> 👋
                </motion.h1>
                <motion.h1 
                    className="text-body-mobile md:text-body-desktop text-blue-950 dark:text-gray-300"
                    variants={itemVariants}
                >
                    Full Stack Web Developer and UI/UX Designer
                </motion.h1>
                <motion.div 
                    className="text-white flex gap-4"
                    variants={itemVariants}
                >
                    <Link 
                        to="contact" 
                        smooth={true} 
                        duration={500}
                        className="p-3 rounded-xl border text-center border-gray-300 bg-primary-light hover:bg-primary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out w-full cursor-pointer"
                    >
                        Get in Touch
                    </Link>
                    <Link 
                        to="project" 
                        smooth={true} 
                        duration={500}
                        className="text-primary-dark p-3 rounded-xl backdrop-blur-sm border-2 text-center border-gray-400 hover:border-primary hover:scale-105 hover:shadow-lg hover:bg-primary-extra-light transition-all duration-300 ease-in-out w-full cursor-pointer"
                    >
                        View Project
                    </Link>
                </motion.div>
                
            </motion.div>
            {/* Right */}
            <motion.img 
                src="/image/profile-pict.png" 
                alt="Raka Ramadhani Profile Picture" 
                className="w-64 md:w-[440px] h-64 md:h-[440px] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                    scale: 1.05, 
                    rotate: 2,
                    transition: { duration: 0.2 }
                }
            }
            />
        </>
    )
}

export default Landing;