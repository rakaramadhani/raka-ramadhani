import PropTypes from 'prop-types';
import { LucideGithub, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = {
    uiux: 'UI/UX Design',
    fullstack: 'Fullstack',
    frontend: 'Frontend',
    backend: 'Backend',
    none: 'No Category'
}

const categoryColors = {
    uiux: 'text-label-blue',
    fullstack: 'text-label-orange',
    frontend: 'text-label-coral',
    backend: 'text-label-blue',
    none: 'text-label-coral',
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    project: PropTypes.string,
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    category: PropTypes.oneOf(Object.keys(categories)),
    link: PropTypes.string,
    techandtools: PropTypes.arrayOf(PropTypes.string),
    demo: PropTypes.string
};

ProjectCard.defaultProps = {
    image: "/image/Group3.png",
    project: "Undefined Project",
    desc: "-",
    category: categories.none,
    techandtools: [],
};

function ProjectCard(props) {    
    const isGithubDisabled = !props.link || props.link === '#';
    
    return (
        <motion.div 
            className="h-full w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl group overflow-hidden transition-all duration-300"
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Bento Card Image Section */}
            <div className="relative overflow-hidden h-40 sm:h-48">
                <motion.img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={props.image}
                    alt={`${props.project} project thumbnail`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {!isGithubDisabled && (
                        <motion.a 
                            href={props.link}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LucideGithub size={16} className="text-gray-700" />
                        </motion.a>
                    )}
                    {props.demo && props.demo !== '#' && (
                        <motion.a 
                            href={props.demo}
                            className="bg-primary/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-primary hover:shadow-xl transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink size={16} className="text-white" />
                        </motion.a>
                    )}
                </div>
            </div>
            
            {/* Bento Card Content Section */}
            <div className="p-4 sm:p-5 space-y-3 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)]">
                {/* Category Badge */}
                <motion.span 
                    className={`inline-block w-fit px-2 py-1 rounded-md text-xs font-medium uppercase tracking-wide ${categoryColors[props.category]} bg-gray-50 dark:bg-slate-700/50`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {categories[props.category]}
                </motion.span>
                
                {/* Project Title */}
                <motion.h3 
                    className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                >
                    {props.project}
                </motion.h3>
                
                {/* Description */}
                <div className='flex-grow text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                    <motion.p 
                        className="line-clamp-4 text-justify leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {Array.isArray(props.desc) ? props.desc.join('. ') : props.desc}
                    </motion.p>
                </div>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {props.techandtools.slice(0, 4).map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                    {props.techandtools.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 rounded-md text-xs font-medium">
                            +{props.techandtools.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Button */}
                <motion.div 
                    className="flex gap-2 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.button
                        disabled={isGithubDisabled}
                        onClick={() => !isGithubDisabled && window.open(props.link, '_blank')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            isGithubDisabled 
                                ? 'bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50' 
                                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-md'
                        }`}
                        whileHover={!isGithubDisabled ? { scale: 1.02 } : {}}
                        whileTap={!isGithubDisabled ? { scale: 0.98 } : {}}
                    >
                        <LucideGithub size={16} />
                        <span>{isGithubDisabled ? 'No Repository' : 'View Code'}</span>
                    </motion.button>
                    
                    {props.demo && props.demo !== '#' && (
                        <motion.a 
                            href={props.demo}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className='flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-600 hover:shadow-md transition-all duration-200'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
