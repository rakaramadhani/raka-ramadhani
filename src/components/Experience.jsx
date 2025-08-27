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
        <div className="w-full flex flex-col md:flex-row bg-white dark:bg-slate-800 border rounded-2xl items-center shadow-md border-gray-200 dark:border-slate-700 transition duration-300 ease-in-out p-3">
            {/* Left Side (Image) */}
            <img
                className="rounded-xl w-full md:w-72 h-40 md:h-56 object-cover"
                src={props.image}
                alt="Company"
            />

            {/* Right Side (Details) */}
            <div className="mt-4 md:m-8 w-full">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="text-left">
                        <p className="text-sm md:text-base text-primary font-semibold">{props.job}</p>
                        <h1 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white">{props.company}</h1>
                    </div>
                    <div className='flex-col md:justify-items-end space-y-2'>
                        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mt-2 md:mt-0 text-left md:text-right">
                            {props.from.toLocaleDateString("en-US", { month: "long", year: "numeric" })} -{" "}
                            {props.to.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                        <p className={`px-2 py-1 w-fit rounded-2xl text-[12px] ${categoryColors[props.category]} text-white`}> 
                            {categories[props.category]} 
                        </p>
                    </div>
                </div>
                <p className="mt-3 text-caption-mobile md:text-caption-desktop text-gray-600 dark:text-gray-300 text-justify">{props.desc}</p>
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