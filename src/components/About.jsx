import { DownloadIcon, Linkedin, Instagram, Github, Phone } from "lucide-react"

const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    return(
        <div className="flex-col justify-items-center items-center space-y-8 md:space-y-0 md:flex-row md:p-8 md:flex md:gap-[64px] md:border md:rounded-2xl md:border-gray-200 md:shadow-sm md:backdrop-blur-[2px]">
                <img src="/image/about-me.png" alt="Picture not Found" className="w-60 md:w-[500px] h-60 md:h-[500px]"/>
                
                {/* Right */}
                <div className="text-center justify-items-center md:text-left max-w-3xl">
                    <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 mb-4 uppercase">About</h1>
                    <p className="text-body-mobile md:text-body-desktop text-blue-950 text-center md:text-justify">{aboutMe}</p>
                    <div className="mt-4 md:flex h-auto gap-4 grid grid-cols-3 content-around justify-items-center">
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">React</p>
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">Laravel</p>
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">Javascript</p>
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">Python</p>
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">PHP</p>
                        <p className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark  w-fit ">MySQL</p>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in">
                            <a href="https://www.linkedin.com/in/raka-ramadhani-256106221/" >
                                <Linkedin size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />    
                            </a>
                        </button> 
                        <button className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in ">
                            <a href="" >
                                <Instagram size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />    
                            </a>
                        </button> 
                        <button className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in ">
                            <a href="https://github.com/rakaramadhani" >
                                <Github size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />    
                            </a>
                        </button> 
                        <button className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in">
                            <a href="https://wa.me/+6281353252938" >
                                <Phone size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />    
                            </a>
                        </button> 
                    </div>
                    <button className="flex space-x-2 mt-8 text-btn-mobile md:text-btn-desktop p-[12px] content-center md:justify-center bg-primary hover:bg-primary-light transition cursor-pointer text-white w-fit md:w-full rounded-2xl">
                        <DownloadIcon size={24}/>
                        <a href="">
                            Download CV
                        </a>
                    </button>
                </div>
        </div>
    )
}

export default About;