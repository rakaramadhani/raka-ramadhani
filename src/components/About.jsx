import { DownloadIcon, Linkedin, Instagram, Github, Phone } from "lucide-react"
import { Link } from "react-router";

const About = () => {
    const aboutMe = "I am a results-driven individual passionate about creativity, continuous learning, and crafting seamless user experiences. With a strong foundation in UI/UX design and front-end development—proficient in HTML, CSS, JavaScript, and PHP—I thrive in building intuitive and visually appealing digital solutions.";
    return(
        <div className="flex flex-col items-center md:flex-row md:items-start p-6 md:p-8 gap-8 md:border md:rounded-2xl md:shadow-sm md:backdrop-blur-[2px]">
          {/* Foto */}
          <img src="/image/about-me.png" alt="Picture not Found" className="w-48 h-48 md:w-[500px] md:h-[500px] object-cover" />
          {/* Konten Kanan */}
          <div className="text-center md:text-left max-w-3xl w-full">
            <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950 mb-4 uppercase">About</h1>
            <p className="text-body-mobile md:text-body-desktop text-blue-950">{aboutMe}</p>
            {/* Skills */}
            <div className="mt-4 grid grid-cols-3 md:flex md:flex-wrap gap-2 justify-center md:justify-start">
              {["React", "Laravel", "JavaScript", "Python", "PHP", "MySQL"].map(skill => (
                <p key={skill} className="px-3 py-1 rounded-md bg-primary-extra-light text-primary-dark text-sm md:text-base">
                  {skill}
                </p>
              ))}
            </div>
            
            {/* Tombol Download CV */}
            <Link to="/files/CV_ACHRIE RAKA RAMADHANI.pdf" target="_blank" download className="flex items-center justify-center space-x-2 mt-8 text-btn-mobile md:text-btn-desktop p-[12px] bg-primary hover:bg-primary-light transition cursor-pointer text-white w-full md:w-full rounded-2xl">
              <DownloadIcon size={24} />
              <a href="">Download CV</a>
            </Link>
          </div>
        </div>
    )
}

export default About;