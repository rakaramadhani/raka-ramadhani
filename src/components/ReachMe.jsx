import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
import { Phone, LucideMail, Linkedin, Github, Instagram, PinIcon } from "lucide-react";
import React, { useRef } from 'react';
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

    const sendEmail = (e) => {
      e.preventDefault();

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
          },
          (error) => {
            console.log('FAILED...', error.text);
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
        <div className="grid md:grid-cols-2 gap-12 text-center w-full text-gray-800 mb-8 border-gray-300 rounded-2xl p-4 md:p-12 shadow-lg backdrop-blur-sm">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-left text-2xl">Get in Touch 👇</h3>
            <p className="text-gray-700 text-left">
              I'm always open to new opportunities and interesting projects. Let's discuss how we can work together!
            </p>
            <div className="space-y-4">
              {/* Email */}
              <a className="text-gray-600 hover:text-primary flex items-center gap-4" href="mailto:rakaramadhani2001@gmail.com">
                <LucideMail strokeWidth={3} color="#8342EC"/>
                rakaramadhani2001@gmail.com
              </a>
              {/* Location */}
              <a className="text-gray-600 hover:text-primary flex items-center gap-4" href="https://maps.app.goo.gl/6qPuAdgLStLzZP9y8">
                <PinIcon strokeWidth={3}  color="#8342EC"/>
                Bandung, West Java, Indonesia
              </a>
            </div>
            {/* Social Media Buttons */}
            <div className="space-x-4 mt-8 flex justify-start">
              {[ 
                { icon: Linkedin, link: "https://www.linkedin.com/in/raka-ramadhani-256106221/" },
                { icon: Instagram, link: "https://www.instagram.com/rakaramadhani_/" },
                { icon: Github, link: "https://github.com/rakaramadhani" },
                { icon: Phone, link: "https://wa.me/+6281353252938" }
              ].map(({ icon: Icon, link }, index) => (
                <a key={index} href={link} className="bg-gradient-to-b from-[#502B9E] to-[#9400FF] rounded-xl p-2 hover:scale-105 transition ease-in">
                  <Icon size={24} color="#ffffff" strokeWidth={2} absoluteStrokeWidth />
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input 
                type="text"
                {...Form.register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
                name="name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <input 
                type="email"
                {...Form.register("email")}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
                name="email"
              />
              <span className="text-red-500 text-sm">{Form.formState.errors.email?.message}</span>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <textarea 
                {...Form.register("text")}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
                name="message"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" value="Send" className="w-full bg-primary-light text-white py-3 rounded-lg hover:bg-primary transition hover:cursor-pointer">
              Submit
            </button>
          </form>
        </div>

    )
}

export default ReachMe;