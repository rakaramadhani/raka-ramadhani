import { DownloadIcon, Linkedin, Instagram, Github, Phone } from "lucide-react"

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

    {/* Social Media Buttons */}
    <div className="space-x-4 mt-8 flex justify-center md:justify-start">
      {[ 
        { icon: Linkedin, link: "https://www.linkedin.com/in/raka-ramadhani-256106221/" },
        { icon: Instagram, link: "" },
        { icon: Github, link: "https://github.com/rakaramadhani" },
        { icon: Phone, link: "https://wa.me/+6281353252938" }
      ].map(({ icon: Icon, link }, index) => (
        <a key={index} href={link} className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in">
          <Icon size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />
        </a>
      ))}
    </div>

    {/* Tombol Download CV */}
    <button className="flex items-center justify-center space-x-2 mt-8 text-btn-mobile md:text-btn-desktop p-[12px] bg-primary hover:bg-primary-light transition cursor-pointer text-white w-full md:w-full rounded-2xl">
      <DownloadIcon size={24} />
      <a href="">Download CV</a>
    </button>
  </div>
</div>

    )
}

export default About;