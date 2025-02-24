import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string(),
    email: z.string().email({message: "- Alert: Your email is invalid"}),
    text: z.string(), 
})

const ContactMe = () => {
    const Form = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onChange"
    });
    const setHandleSubmit = () => {
        alert ("Successfull")
    }
    return (
        <form onSubmit={Form.handleSubmit(setHandleSubmit)} className="flex shadow border rounded-2xl w-full md:w-6xl h-fit py-8 justify-center border-gray-200">
            <div className="flex flex-col gap-4 items-center text-sm md:text-md">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    {...Form.register("name")}
                    className="p-4 w-[320px] h-fit md:w-[640px] border border-gray-400 shadow-xs rounded-xl " />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    {...Form.register("email")}
                    className="p-4 w-[320px] h-fit md:w-[640px] border border-gray-400 shadow-xs rounded-xl " />
                    <span className="text-red-500 font-semibold text-left"> {Form.formState.errors.email?.message}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="text">Message</label>
                    <textarea 
                    type="text"
                    {...Form.register("text")}
                    className="p-4 w-[320px] md:w-[640px] md:h-64 border border-gray-400 shadow-xs rounded-xl " />
                </div>

                <button type="submit" className="w-full px-12 py-2 rounded-xl text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-300 ">Submit</button>
            </div>
        </form>
    )
};

export default ContactMe;