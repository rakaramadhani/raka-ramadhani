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

const techandtoolsColors = {
    'Next.js': 'text-blue-900 bg-blue-200',
    'Tailwind CSS': 'text-orange-900 bg-orange-200',
    'Express.js': 'text-red-900 bg-red-200',
    'PostgreSQL': 'text-red-900 bg-red-200',
    'Laravel': 'text-blue-900 bg-blue-200',
    'PHP': 'text-orange-900 bg-orange-200',
    'JavaScript': 'text-red-900 bg-red-200',
    'React': 'text-blue-900 bg-blue-200',
    'TypeScript': 'text-orange-900 bg-orange-200',
    'Figma': 'text-red-900 bg-red-200',
}

ProjectCard.propTypes = {
    image: PropTypes.string,
    project: PropTypes.string,
    desc: PropTypes.string,
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
    return (
        <motion.div 
            className="w-auto h-auto md:w-auto md:h-auto border rounded-xl bg-light dark:bg-slate-800 shadow-md border-gray-200 dark:border-slate-700 group overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="relative overflow-hidden">
                <motion.img
                    className="rounded-t-2xl h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={props.image}
                    alt={`${props.project} project thumbnail`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                        className="flex gap-3"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {props.link && (
                            <motion.a 
                                href={props.link}
                                className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <LucideGithub size={20} className="text-gray-700" />
                            </motion.a>
                        )}
                        <motion.a 
                            href={props.demo || "#"}
                            className="bg-primary/90 p-2 rounded-full shadow-lg hover:bg-primary transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ExternalLink size={20} className="text-white" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <div className="text-left md:space-y-4 p-4 space-y-2">
                <motion.p 
                    className={`font-semibold text-caption-mobile md:text-caption-desktop ${categoryColors[props.category]}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {categories[props.category]}
                </motion.p>
                <motion.p 
                    className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {props.project}
                </motion.p>
                <p className='text-caption-mobile md:text-caption-desktop text-gray-600 dark:text-gray-300 text-justify line-clamp-3'>
                    {props.desc}
                </p>
                <motion.div className="flex flex-wrap gap-2 mt-3">
                    {props.techandtools.map((tech, index) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}>
                            <div className={`px-3 py-1 rounded-md text-xs font-medium ${techandtoolsColors[tech]}`}>{tech}</div>
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div 
                    className="flex gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {props.link && (
                        <motion.a 
                            href={props.link} 
                            className='text-primary flex gap-2 items-center hover:gap-3 transition-all duration-300 font-medium'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LucideGithub size={18} />
                            Github
                        </motion.a>
                    )}
                    <motion.a 
                        href={props.demo || "#"} 
                        className='text-gray-600 dark:text-gray-400 hover:text-primary flex gap-2 items-center hover:gap-3 transition-all duration-300 font-medium'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink size={18} />
                        Demo
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
