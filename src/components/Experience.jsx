import PropTypes from 'prop-types';


const categories = {
    internship: 'Internship',
    parttime: 'Part-time',
    freelance: 'Freelance',
    none: 'No Category'
}

const categoryColors = {
    internship: 'bg-label-green',
    parttime: 'bg-label-orange',
    freelance: 'bg-blue-500',
    none: 'bg-label-coral',
};



const Experience = (props) => {
    return (
        <div className="w-full mx-auto">
            <div className="flex flex-col bg-white dark:bg-slate-800 border rounded-lg shadow-sm border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out p-4 hover:shadow-md">
                {/* Header */}
                <div className="mb-3">
                    {/* Job Title and Category */}
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white leading-tight flex-1">
                            {props.job}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[props.category]} text-white whitespace-nowrap ml-2 flex-shrink-0`}>
                            {categories[props.category]}
                        </span>
                    </div>
                    
                    {/* Company and Location */}
                    <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                        {props.company}
                    </h4>
                    {props.location && (
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 italic">
                            {props.location}
                        </p>
                    )}
                </div>

                {/* Date Range */}
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">
                        {props.from.toLocaleDateString("en-US", { month: "short", year: "numeric" })} - {" "}
                        {props.to > new Date() || props.to.getFullYear() > new Date().getFullYear() 
                            ? "Present" 
                            : props.to.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                        }
                    </span>
                </div>

                {/* Achievements */}
                {props.achievements && props.achievements.length > 0 && (
                    <div className="space-y-2">
                        <ul className="space-y-1.5">
                            {props.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="text-indigo-500 mr-2 mt-1 flex-shrink-0">•</span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

Experience.propTypes = {
    company: PropTypes.string,
    location: PropTypes.string,
    job: PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string),
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
    category: PropTypes.oneOf(Object.keys(categories))
};

Experience.defaultProps = {
    company: "",
    location: "",
    job: "",
    achievements: [],
    category: "none",
    from: new Date(),
    to: new Date(),
};


export default Experience;