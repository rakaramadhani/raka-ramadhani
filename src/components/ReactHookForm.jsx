import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
import { useState } from "react";

const registrationSchema = z.object({
    email: z.string().email({ message: "Invalid Email" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    repeatPassword: z.string(),
    // if u use number, u must use z.coerce.number() to convert the value to number, because the default value of input is string
}).superRefine(({repeatPassword, password}, ctx) =>{
    if (repeatPassword !== password){
        ctx.addIssue({
            code: "custom",
            message:"Password tidak sesuai!",
            path:["repeatPassword"],
        })
    }
}); 

const ReactHookForm = () => {
    const [showPassword, setShowPassword]=useState(false);
    const registerForm = useForm({
        resolver: zodResolver(registrationSchema),
        mode: "onChange", // in vanilla js, it's usually placed in atribut like this 👉 onChange={callTheFunction}
    });
    const setHandleRegister = (values) => {
        alert ("Email has been sent!" + " " + values.email + " " + values.password);
        console.log(registerForm.formState.errors);
    }
    return(
        <form onSubmit={registerForm.handleSubmit(setHandleRegister)}>
            <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                {...registerForm.register("email")}
                className="p-4 md:w-[360px] border border-gray-400 shadow-xs rounded-xl "/>
            </div>
            <span className="text-red-600">{registerForm.formState.errors.email?.message}</span>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input 
                type={showPassword ? "text" : "password"}
                {...registerForm.register("password")}
                className="p-4 md:w-[360px] border border-gray-400 shadow-xs rounded-xl"/>
                <input type="checkbox" onChange={(e) => setShowPassword(e.target.checked)} />
                <span className="text-red-600">{registerForm.formState.errors.password?.message}</span>
                <label htmlFor="repeatPassword">Confirm Password</label>
                <input 
                type={"password"}
                {...registerForm.register("repeatPassword")}
                className="p-4 md:w-[360px] border border-gray-400 shadow-xs rounded-xl"/>
                <span className="text-red-600">{registerForm.formState.errors.repeatPassword?.message}</span>
            </div>
            
            <button type="submit" className="px-12 py-2 rounded-2xl text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-300 ">Submit</button>
        </div>
        </form>
    )
}
export default ReactHookForm;