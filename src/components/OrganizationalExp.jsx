import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

OrganizationalExperience.propTypes = {
    image:        PropTypes.string,
    position:     PropTypes.string,
    organization: PropTypes.string,
    location:     PropTypes.string,
    category:     PropTypes.string,
    desc:         PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

OrganizationalExperience.defaultProps = {
    image:    '/image/Group3.png',
    position: 'Undefined Position',
    desc:     '-',
    category: '-',
};

function OrganizationalExperience(props) {
    return (
        <motion.div
            className="h-full w-full max-w-sm
                bg-card text-card-foreground
                border-2 border-border
                shadow-[4px_4px_0_0_var(--color-primary)]
                overflow-hidden group
                transition-all duration-150"
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--color-primary)" }}
            transition={{ duration: 0.15, type: 'tween' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Image */}
            <div className="relative overflow-hidden h-40 sm:h-48 border-b-2 border-border">
                <motion.img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={props.image}
                    alt={`${props.position} thumbnail`}
                />
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 space-y-3 flex flex-col">
                {/* Category Badge */}
                <span
                    className="inline-block w-fit px-2 py-0.5
                        text-[10px] font-black uppercase tracking-widest
                        bg-primary text-primary-foreground border border-border"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {props.category}
                </span>

                {/* Position Title */}
                <h3
                    className="text-base sm:text-lg font-black text-foreground
                        group-hover:text-primary transition-colors duration-200 leading-tight uppercase"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                    {props.position}
                </h3>

                {/* Organization */}
                {props.organization && (
                    <p className="text-xs font-bold text-primary uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {props.organization}
                    </p>
                )}

                {/* Description */}
                <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <p className="line-clamp-4 text-justify leading-[1.65]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {Array.isArray(props.desc) ? props.desc.join('. ') : props.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default OrganizationalExperience;
