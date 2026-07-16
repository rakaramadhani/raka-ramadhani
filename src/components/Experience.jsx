import PropTypes from 'prop-types';

const categories = {
    internship: 'Internship',
    parttime:   'Part-time',
    freelance:  'Freelance',
    none:       'General',
};

/* Use label-color tokens from the theme */
const categoryStyle = {
    internship: 'bg-label-green  text-white',
    parttime:   'bg-label-orange text-foreground',
    freelance:  'bg-primary      text-primary-foreground',
    none:       'bg-foreground   text-background',
};

const Experience = (props) => {
    const dateStr = (date) =>
        date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    const isPresent =
        props.to > new Date() || props.to.getFullYear() > new Date().getFullYear();

    return (
        <div className="w-full">
            <div
                className="flex flex-col
                    bg-card text-card-foreground
                    border-2 border-border border-l-4 border-l-primary
                    shadow-[4px_4px_0_0_var(--color-primary)]
                    p-5
                    transition-all duration-150
                    hover:-translate-x-0.5 hover:-translate-y-0.5
                    hover:shadow-[6px_6px_0_0_var(--color-primary)]"
            >
                {/* Header row */}
                <div className="flex items-start justify-between mb-2 gap-3">
                    <h3
                        className="text-base md:text-lg font-black text-foreground leading-tight flex-1 uppercase"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                        {props.job}
                    </h3>
                    <span
                        className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest
                            border border-border ${categoryStyle[props.category]}`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {categories[props.category]}
                    </span>
                </div>

                {/* Company */}
                <h4
                    className="text-sm font-bold text-primary mb-1 uppercase tracking-wider"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {props.company}
                </h4>

                {props.location && (
                    <p className="text-xs text-muted-foreground italic mb-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {props.location}
                    </p>
                )}

                {/* Date range */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-primary flex-shrink-0" />
                    <span
                        className="text-xs font-bold text-foreground uppercase tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        {dateStr(props.from)} — {isPresent ? 'Present' : dateStr(props.to)}
                    </span>
                </div>

                {/* Achievements */}
                {props.achievements?.length > 0 && (
                    <ul className="space-y-1.5">
                        {props.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                <span className="mt-1 w-2 h-2 bg-primary flex-shrink-0" />
                                <span>{ach}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

Experience.propTypes = {
    company:      PropTypes.string,
    location:     PropTypes.string,
    job:          PropTypes.string,
    achievements: PropTypes.arrayOf(PropTypes.string),
    from:         PropTypes.instanceOf(Date),
    to:           PropTypes.instanceOf(Date),
    category:     PropTypes.oneOf(Object.keys(categories)),
};

Experience.defaultProps = {
    company:      '',
    location:     '',
    job:          '',
    achievements: [],
    category:     'none',
    from:         new Date(),
    to:           new Date(),
};

export default Experience;