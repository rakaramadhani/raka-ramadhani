import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
import { Phone, LucideMail, Linkedin, Github, Instagram, PinIcon } from "lucide-react";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const contactSchema = z.object({
    name: z.string(),
    email: z.string().email({message: "- Alert: Your email is invalid"}),
    text: z.string(), 
})
const ReachMe = () => {
  // Email JS
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true);

      emailjs
        .sendForm('service_ovym9p8', 'template_a0i80k3', form.current, {
          publicKey: 'ypPiSkq8vPgvIcm8K',
        })
        .then(
          () => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your message has been sent successfully!",
              showConfirmButton: false,
              timer: 2000
            });
            console.log('SUCCESS!');
            setIsLoading(false);
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsLoading(false);
          },
        );
    };

    const Form = useForm({
            resolver: zodResolver(contactSchema),
            mode: "onChange"
        });
        // const setHandleSubmit = () => {
        //     alert ("Successfull")
        // }
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-center w-full bg-gradient-to-br from-white/80 via-white/60 to-purple-50/80 dark:from-slate-800/80 dark:via-slate-900/60 dark:to-purple-900/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl shadow-purple-500/10">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-bold text-left text-xl sm:text-2xl">Get in Touch 👇</h3>
            <p className="text-gray-700 dark:text-gray-300 text-left text-sm sm:text-base">
              I&apos;m always open to new opportunities and interesting projects. Let&apos;s discuss how we can work together!
            </p>
            <div className="space-y-3">
            <a 
                href="mailto:rakaramadhani2001@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-100 dark:border-purple-800/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <LucideMail size={16} className="sm:w-5 sm:h-5" color="white" strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Email</span>
                  <span className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                    rakaramadhani2001@gmail.com
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <a 
                href="https://maps.app.goo.gl/6qPuAdgLStLzZP9y8"
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-100 dark:border-emerald-800/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <PinIcon size={16} className="sm:w-5 sm:h-5" color="white" strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left min-w-0 flex-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Location</span>
                  <span className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Bandung, West Java, Indonesia
                  </span>
                </div>
              </a>
            </div>
            {/* Social Media Buttons */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 text-left">
                Connect with me
              </h4>
              <div className="flex justify-start gap-2 sm:gap-3 flex-wrap">
                {[ 
                  { 
                    icon: Linkedin, 
                    link: "https://www.linkedin.com/in/raka-ramadhani-256106221/",
                    name: "LinkedIn",
                    gradient: "from-blue-500 to-blue-700",
                    hoverGradient: "hover:from-blue-600 hover:to-blue-800"
                  },
                  { 
                    icon: Instagram, 
                    link: "https://www.instagram.com/rakaramadhani_/",
                    name: "Instagram", 
                    gradient: "from-pink-500 to-purple-600",
                    hoverGradient: "hover:from-pink-600 hover:to-purple-700"
                  },
                  { 
                    icon: Github, 
                    link: "https://github.com/rakaramadhani",
                    name: "GitHub",
                    gradient: "from-gray-700 to-gray-900",
                    hoverGradient: "hover:from-gray-800 hover:to-black"
                  },
                  { 
                    icon: Phone, 
                    link: "https://wa.me/+6281353252938",
                    name: "WhatsApp",
                    gradient: "from-green-500 to-green-700",
                    hoverGradient: "hover:from-green-600 hover:to-green-800"
                  }
                ].map(({ icon: Icon, link, name, gradient, hoverGradient }, index) => (
                  <a 
                    key={index} 
                    href={link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-br ${gradient} ${hoverGradient} 
                    rounded-xl p-2.5 sm:p-3 hover:scale-110 hover:rotate-3 
                    transition-all duration-300 ease-out 
                    shadow-lg hover:shadow-xl hover:shadow-current/25
                    before:absolute before:inset-0 before:rounded-xl 
                    before:bg-white/20 before:opacity-0 before:transition-opacity 
                    before:duration-300 hover:before:opacity-100 touch-manipulation`}
                  >
                    <Icon 
                      size={20}
                      className="sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform duration-200" 
                      color="#ffffff" 
                      strokeWidth={2} 
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 
                    bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg 
                    opacity-0 group-hover:opacity-100 transition-all duration-200 
                    pointer-events-none whitespace-nowrap z-20
                    before:absolute before:top-full before:left-1/2 before:transform 
                    before:-translate-x-1/2 before:border-4 before:border-transparent 
                    before:border-t-gray-900 dark:before:border-t-gray-700">
                      {name}
                    </div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/30 scale-0 
                    group-active:scale-100 transition-transform duration-150 ease-out"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form className="space-y-4 sm:space-y-6" ref={form} onSubmit={sendEmail}>
            <h3 className="font-bold text-left text-xl sm:text-2xl mb-4 sm:mb-6">Send Message 📧</h3>
            
            {/* Name Field */}
            <div className="relative">
              <input 
                type="text"
                {...Form.register("name")}
                className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 dark:border-slate-600 
                bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm rounded-xl 
                text-gray-900 dark:text-white text-sm sm:text-base
                focus:border-purple-500 focus:ring-0 transition-all duration-300
                placeholder-transparent"
                placeholder="Your Name"
                name="name"
                required
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 
              peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500 
              transition-all duration-200 pointer-events-none">
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input 
                type="email"
                {...Form.register("email")}
                className={`peer w-full px-4 pt-6 pb-2 border-2 rounded-xl 
                bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm
                text-gray-900 dark:text-white text-sm sm:text-base
                focus:ring-0 transition-all duration-300
                placeholder-transparent
                ${Form.formState.errors.email 
                  ? 'border-red-400 focus:border-red-500' 
                  : 'border-gray-200 dark:border-slate-600 focus:border-purple-500'
                }`}
                placeholder="Your Email"
                name="email"
                required
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 
              peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500 
              transition-all duration-200 pointer-events-none">
                Your Email
              </label>
              {Form.formState.errors.email && (
                <span className="text-red-500 text-xs sm:text-sm mt-1 block">
                  {Form.formState.errors.email?.message}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea 
                {...Form.register("text")}
                className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-200 dark:border-slate-600 
                bg-white/70 dark:bg-slate-700/70 backdrop-blur-sm rounded-xl 
                text-gray-900 dark:text-white text-sm sm:text-base
                focus:border-purple-500 focus:ring-0 transition-all duration-300
                placeholder-transparent resize-none min-h-[100px] sm:min-h-[120px]"
                placeholder="Your Message"
                name="message"
                rows="4"
                required
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400 
              peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 sm:peer-placeholder-shown:top-4
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500 
              transition-all duration-200 pointer-events-none">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading}
              className="relative w-full bg-gradient-to-r from-purple-600 to-blue-600 
              text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base
              hover:from-purple-700 hover:to-blue-700 
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300 shadow-lg hover:shadow-xl
              transform hover:scale-[1.02] active:scale-[0.98]
              touch-manipulation min-h-[44px]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

    )
}

export default ReachMe;