import PropTypes from 'prop-types';
import { LucideGithub, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = {
    uiux:      'UI/UX Design',
    fullstack: 'Fullstack',
    frontend:  'Frontend',
    backend:   'Backend',
    none:      'Uncategorised',
};

/* Category badges use label-color tokens from the theme */
const categoryStyle = {
    uiux:      'bg-label-blue   text-white',
    fullstack: 'bg-label-orange text-foreground',
    frontend:  'bg-label-coral  text-white',
    backend:   'bg-primary      text-primary-foreground',
    none:      'bg-foreground   text-background',
};

ProjectCard.propTypes = {
    image:        PropTypes.string,
    project:      PropTypes.string,
    desc:         PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    category:     PropTypes.oneOf(Object.keys(categories)),
    link:         PropTypes.string,
    techandtools: PropTypes.arrayOf(PropTypes.string),
    demo:         PropTypes.string,
};

ProjectCard.defaultProps = {
    image:        '/image/Group3.png',
    project:      'Undefined Project',
    desc:         '-',
    category:     'none',
    techandtools: [],
};

function ProjectCard(props) {
    const isGithubDisabled = !props.link || props.link === '#';

    return (
        <motion.div
            className="h-full w-full max-w-sm
                bg-card text-card-foreground
                border-2 border-border
                shadow-[4px_4px_0_0_var(--color-primary)]
                overflow-hidden transition-all duration-150 group"
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--color-primary)" }}
            transition={{ duration: 0.15, type: "tween" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-40 sm:h-48 border-b-2 border-border">
                <motion.img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={props.image}
                    alt={`${props.project} project thumbnail`}
                />
                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 flex items-center justify-center gap-3">
                    {!isGithubDisabled && (
                        <motion.a
                            href={props.link}
                            className="flex items-center gap-1.5 px-3 py-1.5
                                bg-background text-foreground
                                border-2 border-border
                                text-xs font-bold uppercase tracking-wider
                                shadow-[2px_2px_0_0_var(--color-primary)]
                                hover:shadow-[4px_4px_0_0_var(--color-primary)]
                                transition-all duration-150"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            whileHover={{ x: -1, y: -1 }}
                            whileTap={{ x: 1, y: 1 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LucideGithub size={14} /> Code
                        </motion.a>
                    )}
                    {props.demo && props.demo !== '#' && (
                        <motion.a
                            href={props.demo}
                            className="flex items-center gap-1.5 px-3 py-1.5
                                bg-primary text-primary-foreground
                                border-2 border-border
                                text-xs font-bold uppercase tracking-wider
                                shadow-[2px_2px_0_0_var(--color-border)]
                                hover:shadow-[4px_4px_0_0_var(--color-border)]
                                transition-all duration-150"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            whileHover={{ x: -1, y: -1 }}
                            whileTap={{ x: 1, y: 1 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink size={14} /> Live
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 space-y-3 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)]">

                {/* Category Badge */}
                <span
                    className={`inline-block w-fit px-2 py-0.5 text-[10px] font-black uppercase tracking-widest
                        border border-border ${categoryStyle[props.category]}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {categories[props.category]}
                </span>

                {/* Title */}
                <h3
                    className="text-base sm:text-lg font-black text-foreground
                        group-hover:text-primary transition-colors duration-200 leading-tight uppercase"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                    {props.project}
                </h3>

                {/* Description */}
                <div className="flex-grow text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <p className="line-clamp-4 text-justify leading-[1.65]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {Array.isArray(props.desc) ? props.desc.join('. ') : props.desc}
                    </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {props.techandtools.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider
                                border border-border text-foreground
                                hover:bg-primary hover:text-primary-foreground hover:border-primary
                                transition-colors duration-150 cursor-default"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {tech}
                        </span>
                    ))}
                    {props.techandtools.length > 4 && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase
                            border border-border text-muted-foreground">
                            +{props.techandtools.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-1">
                    <motion.button
                        disabled={isGithubDisabled}
                        onClick={() => !isGithubDisabled && window.open(props.link, '_blank')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3
                            text-xs font-bold uppercase tracking-wider border-2
                            transition-all duration-150
                            ${isGithubDisabled
                                ? 'bg-muted text-muted-foreground border-border cursor-not-allowed opacity-60'
                                : 'bg-primary text-primary-foreground border-border shadow-[3px_3px_0_0_var(--color-border)] hover:shadow-[5px_5px_0_0_var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5'
                            }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        whileHover={!isGithubDisabled ? { x: -1, y: -1 } : {}}
                        whileTap={!isGithubDisabled ? { x: 1, y: 1 } : {}}
                    >
                        <LucideGithub size={14} />
                        <span>{isGithubDisabled ? 'No Repo' : 'View Code'}</span>
                    </motion.button>

                    {props.demo && props.demo !== '#' && (
                        <motion.a
                            href={props.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2 px-3
                                text-xs font-bold uppercase tracking-wider border-2
                                border-border text-foreground
                                shadow-[3px_3px_0_0_var(--color-primary)]
                                hover:shadow-[5px_5px_0_0_var(--color-primary)]
                                transition-all duration-150"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            whileHover={{ x: -1, y: -1 }}
                            whileTap={{ x: 1, y: 1 }}
                        >
                            <ExternalLink size={14} />
                            <span>Demo</span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
