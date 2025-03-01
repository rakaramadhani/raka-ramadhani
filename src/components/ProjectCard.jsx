import PropTypes from 'prop-types';

const categories = {
    uiux: 'UI/UX Design',
    webapp: 'Web App',
    none: 'No Category'
}

const categoryColors = {
    uiux: 'bg-label-blue',
    webapp: 'bg-label-orange',
    none: 'bg-label-coral',
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    project: PropTypes.string,
    desc: PropTypes.string,
    category: PropTypes.oneOf(Object.keys(categories))
};

ProjectCard.defaultProps = {
    image: "/image/Group3.png",
    project: "Undefined Project",
    desc: "-",
    category: categories.none,
};

function ProjectCard(props) {    
    return (
        <div className="w-auto h-auto md:w-auto md:h-auto border rounded-xl bg-light shadow-md border-gray-200">
                <img
                    className="rounded-t-2xl h-48 w-auto object-cover"
                    src={props.image}
                    alt="Picture not Found"
                />
                <div className="p-2 space-y-12 md:space-y-16">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {props.project}
                    </h5>
                    <p className={`size-max py-1 text-white text-[12px] p-2 rounded-md ${categoryColors[props.category]}`}>
                        {categories[props.category]}
                    </p>
                </div>
            </div>
    );
}

export default ProjectCard;
