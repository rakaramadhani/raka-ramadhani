import PropTypes from 'prop-types';
import ReactCardFlip from "react-card-flip";
import { useState } from "react";


const categories = {
    uiux: 'UI/UX Design',
    webapp: 'Web App',
    none: 'No Category'
}

const categoryColors = {
    uiux: 'bg-red-500',
    webapp: 'bg-green-500',
    none: 'bg-gray-500',
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    category: PropTypes.oneOf(Object.keys(categories))
};

ProjectCard.defaultProps = {
    image: "/image/Group3.png",
    name: "Undefined Project",
    desc: "-",
    category: categories.none,
};
const cardClass = "w-full md:w-[280px] h-[380px] md:h-[400px] overflow-hidden bg-white border rounded-2xl shadow-md border-gray-200 transition duration-300 ease-in-out";

function ProjectCard(props) {
    const [flip, setFlip] = useState(false);
    
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            {/* Card Default */}
            <div className={cardClass}>
                <img
                    className="rounded-t-2xl h-48 w-full object-cover"
                    src={props.image}
                    alt="Picture not Found"
                />
                <div className="p-4 space-y-12 md:space-y-16">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {props.name}
                    </h5>
                    <p className={`size-max py-1 text-white text-[12px] p-2 rounded-xl ${categoryColors[props.category]}`}>
                        {categories[props.category]}
                    </p>
                    <button
                        onClick={() => setFlip(!flip)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition duration-300 ease-in-out"
                    >
                        Read more...
                    </button>
                </div>
            </div>

            {/* Card Flipped */}
            <div onClick={() => setFlip(!flip)} className={cardClass}>
                <div className="p-5 space-y-4 h-full overflow-y-clip">
                    <h5 className="text-xl md:text-2xl text-left font-bold tracking-tight text-gray-900">
                        {props.name}
                    </h5>
                    <p className="text-sm md:text-base font-normal text-gray-800 text-left">
                        {props.desc}
                    </p>
                </div>
                
            </div>
        </ReactCardFlip>
    );
}


export default ProjectCard;
