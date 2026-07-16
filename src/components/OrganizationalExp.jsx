import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

OrganizationalExperience.propTypes = {
    image: PropTypes.string,
    position: PropTypes.string,
    organization: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

OrganizationalExperience.defaultProps = {
    image: "/image/Group3.png",
    position: "Undefined position",
    desc: "-",
    category: "-",
};

function OrganizationalExperience(props) {    
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
                    alt={`${props.position} position thumbnail`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
            </div>
            
            {/* Bento Card Content Section */}
            <div className="p-4 sm:p-5 space-y-3 flex flex-col h-[calc(100%-10rem)] sm:h-[calc(100%-12rem)]">
                {/* Category Badge */}
                <motion.span 
                    className={`inline-block w-fit px-2 py-1 rounded-md text-xs font-medium uppercase tracking-wide ${props.category} bg-gray-50 dark:bg-slate-700/50`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {props.category}
                </motion.span>
                
                {/* position Title */}
                <motion.h3 
                    className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                >
                    {props.position}
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
            </div>
        </motion.div>
    );
}

export default OrganizationalExperience;
