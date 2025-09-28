import PropTypes from 'prop-types';


const categories = {
    internship: 'Internship',
    parttime: 'Part-time',
    none: 'No Category'
}

const categoryColors = {
    internship: 'bg-label-green',
    parttime: 'bg-label-orange',
    none: 'bg-label-coral',
};



const Experience = (props) => {
    return (
        <div className={`w-full max-w-md`}>
                <div className="flex flex-col bg-white dark:bg-slate-800 border rounded-2xl shadow-lg border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out p-4 hover:shadow-xl hover:scale-105">
                    {/* Image */}
                    <div className="w-full mb-4">
                        <img
                            className="rounded-xl w-full h-48 object-cover"
                            src={props.image}
                            alt={`${props.company} experience`}
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        {/* Header with Job Title and Category */}
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-start text-left justify-between">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                    {props.job}
                                </h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[props.category]} text-white whitespace-nowrap ml-2`}>
                                    {categories[props.category]}
                                </span>
                            </div>
                            <h4 className="text-left text-base font-semibold text-indigo-600 dark:text-indigo-400">
                                {props.company}
                            </h4>
                        </div>

                        {/* Date Range */}
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">
                                {props.from.toLocaleDateString("en-US", { month: "short", year: "numeric" })} - {" "}
                                {props.to.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            {props.desc}
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