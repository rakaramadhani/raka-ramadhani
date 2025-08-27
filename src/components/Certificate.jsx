import PropTypes from "prop-types";
import { motion } from "framer-motion";



const Certificate = (props) => {
    return(
        <motion.div 
            className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* Gambar Sertifikat */}
            <motion.img 
                src={props.image} 
                alt={`${props.certification} certificate`} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Overlay Efek Gelap Saat Hover */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Shine Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Informasi Sertifikat */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left">
                <h3 
                    className="text-lg font-bold mb-1">
                    {props.certification}
                </h3>
                <p className="text-sm mb-1">
                    {props.organizer}
                </p>
                <span className="text-xs opacity-80" >
                    {props.issued}
                </span>
            </div>

            {/* Corner Decoration */}
            <motion.div
                className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
            />
        </motion.div>
    )
}

export default Certificate;

Certificate.propTypes={
    image: PropTypes.string,
    certification: PropTypes.string,
    organizer: PropTypes.string,
    issued: PropTypes.string
}