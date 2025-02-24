import { Github, Instagram, Linkedin, Phone } from "lucide-react"

const Landing = () => {
    return(
        <>
            <div className="text-center md:text-left space-y-4">
                                <h1 className="font-bold text-h2-mobile md:text-h2-desktop text-blue-950">Hello, I'm <span className="text-red-500">Raka Ramadhani</span> 👋</h1>
                                <h1 className="text-body-mobile md:text-body-desktop text-blue-950">Information System Student of <span className="text-red-500">Telkom University</span></h1>
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
        </>
    )
}

export default Landing;