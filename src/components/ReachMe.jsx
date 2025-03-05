import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
import { LocateIcon, Mail } from "lucide-react";

const contactSchema = z.object({
    name: z.string(),
    email: z.string().email({message: "- Alert: Your email is invalid"}),
    text: z.string(), 
})


const ReachMe = () => {
    const Form = useForm({
            resolver: zodResolver(contactSchema),
            mode: "onChange"
        });
        const setHandleSubmit = () => {
            alert ("Successfull")
        }
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
                <Mail strokeWidth={2} />
                rakaramadhani2001@gmail.com
              </a>

              {/* Location */}
              <a className="text-gray-600 hover:text-primary flex items-center gap-4" href="#">
                <LocateIcon strokeWidth={2} />
                Bandung, West Java, Indonesia
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={Form.handleSubmit(setHandleSubmit)} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <input 
                type="text"
                {...Form.register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <input 
                type="email"
                {...Form.register("email")}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
              />
              <span className="text-red-500 text-sm">{Form.formState.errors.email?.message}</span>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <textarea 
                {...Form.register("text")}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-0 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-primary-light text-white py-3 rounded-lg hover:bg-primary transition">
              Submit
            </button>
          </form>
        </div>

    )
}

export default ReachMe;