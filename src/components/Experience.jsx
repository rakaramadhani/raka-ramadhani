import PropTypes from 'prop-types';



const Experience = (props) => {
    return (
        <div className="h-[640px] w-[640px] bg-white border border-gray-200 rounded-lg shadow-sm">
            <img
                        className="rounded-t-lg h-[352px] w-full object-cover"
                        src={props.image}
                        alt="Picture not Found"
                    />
            <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                            {props.experience}
                        </h5>
                        <p className="mb-3 font-normal text-indigo-800-700 text-justify">
                        {props.desc}
                        </p>
            </div>
        </div>
    )
}

Experience.propTypes = {
    image: PropTypes.string,
    experience: PropTypes.string,
    desc: PropTypes.string,
};

Experience.defaultProps = {
    image: "/image/Group3.png",
    experience: "Undefined Project",
    desc: "-",
};

export default Experience;