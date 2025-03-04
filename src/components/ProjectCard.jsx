import PropTypes from 'prop-types';
import { LucideGithub } from 'lucide-react';

const categories = {
    uiux: 'UI/UX Design',
    webapp: 'Web App',
    none: 'No Category'
}

const categoryColors = {
    uiux: 'text-label-blue',
    webapp: 'text-label-orange',
    none: 'text-label-coral',
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
                    className="rounded-t-2xl h-48 w-full object-cover"
                    src={props.image}
                    alt="Picture not Found"
                />
                <div className=" text-left md:space-y-4 p-4 space-y-2">
                    <p className={`font-semibold text-caption-mobile md:text-caption-desktop ${categoryColors[props.category]}`}>
                        {categories[props.category]}
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                        {props.project}
                    </p>
                    <p className='text-caption-mobile md:text-caption-desktop text-gray-600 text-justify'>
                        {props.desc}
                    </p>

                    <a href={props.link} className='mt-6 text-primary flex gap-2 underline cursor-pointer'>
                        <LucideGithub/>
                        View on Github
                    </a>
                </div>
            </div>
    );
}

export default ProjectCard;
