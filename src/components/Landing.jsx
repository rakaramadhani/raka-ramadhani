import { Github, Instagram, Linkedin, Phone } from "lucide-react"

const Landing = () => {
    return(
        <>
            <div className="text-center md:text-left space-y-4">
                <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950">Hello, I'm <span className="text-red-500">Raka Ramadhani</span> 👋</h1>
                <h1 className="text-body-mobile md:text-body-desktop text-blue-950">Full Stack Web Developer and UI/UX Designer</h1>
                <div className="text-white flex gap-4">
                    <a id="touch" href="" className="p-3 rounded-xl border text-center border-gray-300 bg-primary-light hover:bg-primary ease-in-out w-full cursor-pointer">
                        Get in Touch
                    </a>
                    <a id="touch" href="" className="text-primary-dark p-3 rounded-xl backdrop-blur-sm border-2 text-center border-gray-400  hover:border-primary ease-in-out w-full cursor-pointer">
                        View Project
                    </a>
                </div>
                
            </div>
            {/* Right */}
            <img src="/image/profile-pict.png" alt="Picture not Found" className="w-64 md:w-[440px] h-64 md:h-[440px] rounded-full"/>
        </>
    )
}

export default Landing;