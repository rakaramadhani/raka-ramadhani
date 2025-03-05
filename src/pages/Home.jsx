import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectsData";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import ExperienceData from "../data/ExperienceData";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import About from "../components/About";
import ParticlesBackground from "../components/ParticlesBG"
import ReachMe from "../components/ReachMe";



const HomePage = () => {
    const Projects = ProjectData();
    const Experiences = ExperienceData();
    
    return (
        <div className="relative w-full h-screen">
            <ParticlesBackground/>
            <div className="flex flex-col gap-16 mt-16 md:mt-8 mx-auto md:mx-[96px] relative">
                {/* Navbar */}
                <NavigationBar />
                
                {/* Home */}
                <section id="home" className="scroll-mt-24 mx-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[216px] px-4 md:mt-32 md:px-12 h-auto md:h-full">
                    <Landing />
                </section>

                {/* About */}
                <section id="about" className="scroll-mt-24 mx-4 flex flex-col md:flex-row items-center md:h-[760px] justify-center gap-8 md:gap-24 px-4 md:px-12">
                    <About />
                </section>

                {/* Project */}
                <section id="project" className="scroll-mt-24 flex flex-col items-center justify-center text-center px-4 md:px-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Project 👇</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {Projects.map((project) => (
                            <ProjectCard key={project.key} {...project} />
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" className="scroll-mt-24 flex flex-col items-center justify-center text-center px-4 md:px-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Experience 👇</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        {Experiences.map((experience) => (
                            <Experience key={experience.key} {...experience} />
                        ))}
                    </div>
                </section>

                {/* Contact Form */}
                <section id="contact" className="scroll-mt-24 flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Let's Connect </h1>
                    {/* <ContactMe /> */}
                    <ReachMe/>
                </section>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;