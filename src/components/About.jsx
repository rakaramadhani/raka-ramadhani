const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    return(
        <>
            <img src="/image/about-me.png" alt="Picture not Found" className="w-60 md:w-[360px] h-60 md:h-[360px]"/>
                
                {/* Right */}
                <div className="text-center md:text-left max-w-3xl">
                    <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 mb-4">About me...</h1>
                    <p className="text-body-mobile md:text-body-desktop text-blue-950">{aboutMe}</p>
                </div>
        </>
    )
}

export default About;