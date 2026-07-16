import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, LucideMail, Linkedin, Github, Instagram, PinIcon, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const contactSchema = z.object({
    name:  z.string(),
    email: z.string().email({ message: "— Invalid email address" }),
    text:  z.string(),
});

const socialLinks = [
    {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/raka-ramadhani-256106221/",
        name: "LinkedIn",
        bg: "#0A66C2",
    },
    {
        icon: Instagram,
        link: "https://www.instagram.com/rakaramadhani_/",
        name: "Instagram",
        bg: "#E1306C",
    },
    {
        icon: Github,
        link: "https://github.com/rakaramadhani",
        name: "GitHub",
        bg: "#0F0F0F",
    },
    {
        icon: Phone,
        link: "https://wa.me/+6281353252938",
        name: "WhatsApp",
        bg: "#25D366",
    },
];

const ReachMe = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm("service_ovym9p8", "template_a0i80k3", form.current, {
                publicKey: "ypPiSkq8vPgvIcm8K",
            })
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Message sent successfully!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setIsLoading(false);
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setIsLoading(false);
                }
            );
    };

    const Form = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-0
                bg-[#FFFFFF] dark:bg-[#1A1A1A]
                border-2 border-[#0F0F0F] dark:border-[#0F0F0F]
                shadow-[6px_6px_0_0_#000080]
                w-full"
        >
            {/* ── Left: Contact Info ─────────────────── */}
            <div className="p-6 md:p-10 space-y-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#0F0F0F]">
                <div>
                    <h3
                        className="font-black text-2xl md:text-3xl uppercase text-[#0F0F0F] dark:text-[#FAFAFA] mb-1"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                        Get in Touch
                    </h3>
                    <div className="w-16 h-1 bg-[#000080] mb-4" />
                    <p
                        className="text-sm text-[#4A4A4A] dark:text-[#A0A0A0] leading-[1.7]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        I'm always open to new opportunities and interesting projects.
                        Let's discuss how we can work together!
                    </p>
                </div>

                {/* Contact detail rows */}
                <div className="space-y-3">
                    {[
                        {
                            icon: LucideMail,
                            label: "Email",
                            value: "rakaramadhani2001@gmail.com",
                            href: "mailto:rakaramadhani2001@gmail.com",
                        },
                        {
                            icon: PinIcon,
                            label: "Location",
                            value: "Purworejo, Central Java, Indonesia",
                            href: "https://maps.app.goo.gl/6qPuAdgLStLzZP9y8",
                        },
                    ].map(({ icon: Icon, label, value, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center gap-4 p-4
                                border-2 border-[#0F0F0F] dark:border-[#0F0F0F]
                                shadow-[3px_3px_0_0_#000080]
                                hover:shadow-[5px_5px_0_0_#000080]
                                hover:-translate-x-0.5 hover:-translate-y-0.5
                                transition-all duration-150 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-[#000080] flex items-center justify-center">
                                <Icon size={18} color="white" strokeWidth={2} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-bold uppercase tracking-widest text-[#000080]"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {label}
                                </span>
                                <span className="block text-sm font-medium text-[#0F0F0F] dark:text-[#FAFAFA]
                                    group-hover:text-[#000080] transition-colors"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    {value}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social Links */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#4A4A4A] dark:text-[#A0A0A0] mb-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Connect with me
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map(({ icon: Icon, link, name, bg }) => (
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={name}
                                className="group relative flex items-center justify-center w-11 h-11
                                    border-2 border-[#0F0F0F]
                                    shadow-[3px_3px_0_0_#0F0F0F]
                                    hover:shadow-[5px_5px_0_0_#0F0F0F]
                                    hover:-translate-x-0.5 hover:-translate-y-0.5
                                    transition-all duration-150"
                                style={{ backgroundColor: bg }}
                            >
                                <Icon size={20} color="#FFFFFF" strokeWidth={2} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Right: Contact Form ─────────────────── */}
            <form
                className="p-6 md:p-10 space-y-5"
                ref={form}
                onSubmit={sendEmail}
            >
                <div>
                    <h3
                        className="font-black text-2xl md:text-3xl uppercase text-[#0F0F0F] dark:text-[#FAFAFA] mb-1"
                        style={{ fontFamily: "'Archivo Black', sans-serif" }}
                    >
                        Send Message
                    </h3>
                    <div className="w-16 h-1 bg-[#000080] mb-4" />
                </div>

                {/* Name */}
                <div>
                    <label
                        className="block text-xs font-bold uppercase tracking-widest text-[#0F0F0F] dark:text-[#FAFAFA] mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        {...Form.register("name")}
                        name="name"
                        required
                        placeholder="Raka Ramadhani"
                        className="w-full px-4 py-3
                            border-2 border-[#0F0F0F] dark:border-[#FAFAFA]
                            bg-[#FAFAFA] dark:bg-[#0F0F0F]
                            text-[#0F0F0F] dark:text-[#FAFAFA]
                            text-sm font-medium
                            shadow-[2px_2px_0_0_#000080]
                            focus:outline-none focus:shadow-[4px_4px_0_0_#000080]
                            transition-all duration-150 placeholder:text-[#A0A0A0]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        className="block text-xs font-bold uppercase tracking-widest text-[#0F0F0F] dark:text-[#FAFAFA] mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        {...Form.register("email")}
                        name="email"
                        required
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3
                            border-2
                            bg-[#FAFAFA] dark:bg-[#0F0F0F]
                            text-[#0F0F0F] dark:text-[#FAFAFA]
                            text-sm font-medium
                            focus:outline-none
                            transition-all duration-150 placeholder:text-[#A0A0A0]
                            ${Form.formState.errors.email
                                ? "border-[#E63946] shadow-[2px_2px_0_0_#E63946] focus:shadow-[4px_4px_0_0_#E63946]"
                                : "border-[#0F0F0F] dark:border-[#FAFAFA] shadow-[2px_2px_0_0_#000080] focus:shadow-[4px_4px_0_0_#000080]"
                            }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    />
                    {Form.formState.errors.email && (
                        <p className="text-[#E63946] text-xs mt-1 font-bold"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            {Form.formState.errors.email?.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label
                        className="block text-xs font-bold uppercase tracking-widest text-[#0F0F0F] dark:text-[#FAFAFA] mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your Message
                    </label>
                    <textarea
                        {...Form.register("text")}
                        name="message"
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3
                            border-2 border-[#0F0F0F] dark:border-[#FAFAFA]
                            bg-[#FAFAFA] dark:bg-[#0F0F0F]
                            text-[#0F0F0F] dark:text-[#FAFAFA]
                            text-sm font-medium
                            shadow-[2px_2px_0_0_#000080]
                            focus:outline-none focus:shadow-[4px_4px_0_0_#000080]
                            transition-all duration-150 resize-none
                            placeholder:text-[#A0A0A0]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2
                        py-3 px-6
                        bg-[#000080] text-white
                        border-2 border-[#0F0F0F]
                        shadow-[4px_4px_0_0_#0F0F0F]
                        font-black uppercase tracking-widest text-sm
                        disabled:opacity-60 disabled:cursor-not-allowed
                        hover:-translate-x-0.5 hover:-translate-y-0.5
                        hover:shadow-[6px_6px_0_0_#0F0F0F]
                        active:translate-x-0.5 active:translate-y-0.5
                        active:shadow-[1px_1px_0_0_#0F0F0F]
                        transition-all duration-150 min-h-[48px]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {isLoading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={16} />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ReachMe;