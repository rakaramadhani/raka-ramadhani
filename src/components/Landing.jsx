import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
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
                className="text-center md:text-left md:w-2xl space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="font-bold text-h2-mobile md:text-    h2-desktop text-blue-950 dark:text-white"
                    variants={itemVariants}
                >
                    Raka Ramadhani 👋
                </motion.h1>
                <motion.p
                    className="text-body-mobile md:text-body-desktop text-blue-950 dark:text-gray-300 "
                    variants={itemVariants}
                >
                    Web Developer | UI/UX Designer | IT Business Analyst
                </motion.p>
                <motion.p
                    className="text-body-mobile md:text-lg text-blue-950 dark:text-gray-300 mb-8 leading-relaxed"
                    variants={itemVariants}
                >
                    Fresh Information Systems graduate passionate about creating innovative digital solutions. I combine technical expertise with business acumen to deliver impactful results.
                </motion.p>
                <motion.div 
                    className="text-white items-center flex flex-col gap-4 md:flex md:flex-row md:justify-start"
                    variants={itemVariants}
                >
                    {/* Tombol Download CV */}
                    <motion.a 
                    href="/files/CV_ACHRIE RAKA RAMADHANI.pdf" 
                    download 
                    className="bg-gradient-to-r from-primary to-blue-700 hover:bg-blue-200 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 w-fit"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    >
                        <DownloadIcon size={24} />
                        Download CV
                    </motion.a>
                    <Link 
                        to="project" 
                        smooth={true} 
                        duration={500}
                        className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                        View Project
                    </Link>
                </motion.div>
                
            </motion.div>
            {/* Right */}
            <motion.img 
                src="/image/profile-pict.png" 
                alt="Raka Ramadhani Profile Picture" 
                className="w-64 md:w-[400px] h-64 md:h-[400px] rounded-full shadow-xl hover:shadow-2xl transition-all duration-100"
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