import ProjectCard from "../components/ProjectCard";
import ProjectData from "../data/ProjectsData";
import NavigationBar from "../components/NavigationBar";
import Experience from "../components/Experience";
import ExperienceData from "../data/ExperienceData";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import About from "../components/About";


const HomePage = () => {
    const Projects = ProjectData();
    const Experiences = ExperienceData();
    

    return (
        <div className="flex flex-col gap-[24px] mt-16 md:mt-8 mx-auto">
            {/* Navbar */}
            <NavigationBar />
            {/* Home */}
            <section id="home" className="mx-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-[216px] px-4 md:px-12 h-auto md:h-[720px]">
                <Landing/>
            </section>

            {/* About */}
            <section id="about" className="mx-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 px-4 md:px-12">
                <About/>
            </section>

            {/* Project */}
            <section id="project" className="flex flex-col items-center justify-center text-center px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">My Project 👇</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Projects.map((project) => (
                        <ProjectCard key={project.key} {...project} />
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="flex flex-col mt-12 items-center justify-center text-center px-4 md:px-12">
                <h1 className="font-bold text-3xl md:text-4xl my-12">My Experience 👇</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Experiences.map((experience) => (
                        <Experience key={experience.key} {...experience} />
                    ))}
                </div>
            </section>

            
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