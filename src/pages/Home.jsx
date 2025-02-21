import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectsData";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import ExperienceData from "../data/ExperienceData";
import Form from "../components/Form";
import ContactForm from "../components/ReactHookForm";
import { Contact, Github, Instagram, Linkedin, Phone, X } from 'lucide-react';
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";


const HomePage = () => {
    const Projects = ProjectData();
    // const Experiences = ExperienceData();
    const aboutMe = "A results-driven individual with a passion for creativity, continuous learning, and a keen interest in both UI/UX design and front-end web development, particularly skilled in HTML, CSS, JavaScript, and PHP. Experienced in team leadership and proficient in making informed decisions through thorough problem analysis, I possess strong managerial skills dedicated to achieving optimal performance while effectively navigating challenges.";

    return (
        <div className="flex flex-col gap-6 mt-16 md:mt-8 mx-12 ">
            {/* Navbar */}
            <NavigationBar />
            {/* Home */}
            <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[216px] px-4 md:px-12 h-auto md:h-[720px]">
                {/* Left */}
                <div className="text-center md:text-left space-y-4">
                    <h1 className="font-bold text-2xl text-blue-950">Hello, I'm <span className="text-red-500">Raka Ramadhani</span> 👋</h1>
                    <h1 className="text-xl md:text-2xl text-blue-950">Information System Student of <span className="text-red-500">Telkom University</span></h1>
                    <div className="space-x-4">
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
                </div>
                
                
                    {/* Right */}
                <img src="/image/profile-pict.png" alt="Picture not Found" className="w-64 md:w-[440px] h-64 md:h-[440px] rounded-full"/>
            </section>

            {/* About */}
            <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-4 md:px-12">
                {/* Left */}
                <img src="/image/about-me.png" alt="Picture not Found" className="w-60 md:w-[360px] h-60 md:h-[360px] "/>
                
                {/* Right */}
                <div className="text-center md:text-left max-w-3xl">
                    <h1 className="font-bold text-3xl text-blue-950 mb-4">About me...</h1>
                    <h2 className="text-lg md:text-2xl text-blue-950">{aboutMe}</h2>
                </div>
                
            </section>

            {/* Project */}
            <section id="project" className="flex flex-col items-center justify-center text-center px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">My Project 👇</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Projects.map((project) => (
                        <ProjectCard key={project.key} {...project} />
                    ))}
                </div>
            </section>

            {/* Experience */}
            {/* <section id="experience" className="flex flex-col items-center justify-center text-center px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">My Experience 👇</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Experiences.map((experience) => (
                        <Experience key={experience.key} {...experience} />
                    ))}
                </div>
            </section> */}

            
            {/* <section id="contact" className="flex flex-col items-center justify-center text-center px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">Contact Me 👇</h1>
                <ContactForm />
            </section> */}

            {/* Contact Form */}
            <section id="contact" className="flex flex-col md:flex-col items-center justify-center gap-8 px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">Contact Me 👇</h1>
                <ContactMe/>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default HomePage;