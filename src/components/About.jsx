const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    return(
        <div className="flex-col justify-items-center space-y-8 md:space-y-0 md:flex-row md:p-8 md:flex md:gap-[64px] md:border md:rounded-2xl md:border-gray-200 md:shadow-sm md:backdrop-blur-[2px]">
                <img src="/image/about-me.png" alt="Picture not Found" className="w-60 md:w-[360px] h-60 md:h-[360px]"/>
                
                {/* Right */}
                <div className="text-center md:text-left max-w-3xl">
                    <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 mb-4 uppercase">About</h1>
                    <p className="text-body-mobile md:text-body-desktop text-blue-950 text-center md:text-justify">{aboutMe}</p>
                    <button className="mt-8 text-btn-mobile md:text-btn-desktop p-[12px] bg-primary hover:bg-primary-light transition cursor-pointer text-white w-full rounded-2xl">
                        <a href="">
                            Download CV
                        </a>
                    </button>
                </div>
        </div>
    )
}

export default About;