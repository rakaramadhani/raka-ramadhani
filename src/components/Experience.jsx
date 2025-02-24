import PropTypes from 'prop-types';

const categories = {
    internship: 'Internship',
    education: 'Education',
    none: 'No Category'
}

const categoryColors = {
    internship: 'bg-label-green',
    education: 'bg-label-orange',
    none: 'bg-label-coral',
};



const Experience = (props) => {
    return (
        <div className="w-auto h-auto md:w-auto md:h-auto bg-white border rounded-2xl shadow-md border-gray-200 transition duration-300 ease-in-out">
            <img
                        className="rounded-t-lg h-cover w-full object-cover"
                        src={props.image}
                        alt="Picture not Found"
                    />
            <div className="p-5 flex justify-between items-end">
                {/* Left Side (Job & Company) */}
                <div className="text-left text-[14px]">
                    <h1 className="mb-1  font-bold tracking-tight text-gray-900">
                        {props.job}
                    </h1>
                    <h2 className="text-neutral-600">at {props.company}</h2>
                </div>

                {/* Right Side (Date & Category) */}
                <div className="text-right flex flex-col items-end space-y-1">
                    <p className="text-[12px] text-gray-700">
                        {props.from.toLocaleDateString("en-US", { month: "long", year: "numeric" })} -{" "}
                        {props.to.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </p>
                    <p className={`py-1 px-3 text-white text-[12px] rounded-xl ${categoryColors[props.category]}`}>
                        {categories[props.category]}
                    </p>
                </div>
            </div>
        </div>
    )
}

Experience.propTypes = {
    image: PropTypes.string,
    company: PropTypes.string,
    year: PropTypes.number,
    job: PropTypes.string,
    desc: PropTypes.string,
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
    category: PropTypes.oneOf(Object.keys(categories))
};

Experience.defaultProps = {
    image: "/image/Group3.png",
    experience: "",
    company: "",
    desc: "-",
    category: categories.none,
    from: new Date(null),
    to: new Date(null),
};


export default Experience;