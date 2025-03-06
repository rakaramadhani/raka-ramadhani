import PropTypes from "prop-types"



const Certificate = (props) => {
    return(
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Gambar Sertifikat */}
            <img src={props.image} alt="Certificate" className="w-full h-64 object-cover" />

            {/* Overlay Efek Gelap Saat Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Informasi Sertifikat */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <h3 className="text-lg font-bold mb-1">{props.certification}</h3>
                <p className="text-sm">{props.organizer}</p>
                <span className="text-xs opacity-80">{props.issued}</span>
            </div>
        </div>
    )
}

export default Certificate;

Certificate.propTypes={
    image: PropTypes.string,
    certification: PropTypes.string,
    organizer: PropTypes.string,
    issued: PropTypes.string
}