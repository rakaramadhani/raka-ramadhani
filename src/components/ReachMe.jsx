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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-xl border border-gray-300 shadow-md backdrop-blur-sm">
  {/* Contact Info */}
  <div className="space-y-4">
    <h1 className="font-semibold text-left text-xl">Get in Touch 👇</h1>
    <p className="text-gray-700">
      I'm always open to new opportunities and interesting projects. Let's discuss how we can work together!
    </p>

    {/* Email */}
    <a className="flex items-center gap-2 text-blue-600 hover:underline" href="mailto:rakaramadhani2001@gmail.com">
      <Mail strokeWidth={2} />
      rakaramadhani2001@gmail.com
    </a>

    {/* Location */}
    <a className="flex items-center gap-2 text-blue-600 hover:underline" href="#">
      <LocateIcon strokeWidth={2} />
      Bandung, West Java, Indonesia
    </a>
  </div>

  {/* Contact Form */}
  <form onSubmit={Form.handleSubmit(setHandleSubmit)} className="flex flex-col gap-4 border rounded-2xl p-6 md:p-8 border-gray-200 bg-light shadow-sm">
    {/* Name */}
    <div className="flex flex-col gap-2">
      <input 
        type="text"
        {...Form.register("name")}
        placeholder="Your Name"
        className="p-3 w-full border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-2">
      <input 
        type="email"
        {...Form.register("email")}
        placeholder="Your Email"
        className="p-3 w-full border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-red-500 text-sm">{Form.formState.errors.email?.message}</span>
    </div>

    {/* Message */}
    <div className="flex flex-col gap-2">
      <textarea 
        {...Form.register("text")}
        placeholder="Your Message"
        className="p-3 w-full h-32 md:h-48 border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-500 transition">
      Submit
    </button>
  </form>
</div>

    )
}

export default ReachMe;