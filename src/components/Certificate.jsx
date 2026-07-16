import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Certificate = (props) => {
    return (
        <motion.div
            className="group relative bg-card border-2 border-border overflow-hidden cursor-pointer
                shadow-[4px_4px_0_0_var(--color-border)]"
            whileHover={{
                x: -2,
                y: -2,
                boxShadow: "6px 6px 0 0 var(--color-border)"
            }}
            transition={{ duration: 0.15, type: "tween" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Certificate image */}
            <motion.img
                src={props.image}
                alt={`${props.certification} certificate`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 border-b-2 border-border"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            />

            {/* Dark overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Certificate info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground text-left">
                <h3 className="text-lg font-black mb-1 uppercase"
                    style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    {props.certification}
                </h3>
                <p className="text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {props.organizer}
                </p>
                <span className="text-xs opacity-80 border border-white/50 px-2 py-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {props.issued}
                </span>
            </div>

            {/* Corner accent square */}
            <motion.div
                className="absolute top-3 right-3 w-3 h-3 bg-primary border border-border"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
            />
        </motion.div>
    );
};

export default Certificate;

Certificate.propTypes = {
    image:         PropTypes.string,
    certification: PropTypes.string,
    organizer:     PropTypes.string,
    issued:        PropTypes.string,
};