import { useState } from "react";
// import { useRef } from "react";

const Form =()=>{
    //Controlled Component
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handleSubmit = () => {
        alert("Email has been sent!"+" "+emailInput + " " + passwordInput);
    };

    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input onChange={(e) => {
                setEmailInput(e.target.value);
                        const emailValidation = emailInput.includes("@");
                        if(!emailValidation){
                            setEmailError("Email not Valid")
                        } else{
                            setEmailError("")
                        }
                    }
                }
                className="p-4 w-[360px] border border-gray-400 shadow-xs rounded-xl " id="email" type="text" placeholder="Enter your Email..." value={emailInput}/>
                <span>{emailError}</span>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <input onChange={(e) => {
                setPasswordInput(e.target.value);
                        const passwordValidation = passwordInput.length < 8;
                        if(passwordValidation){
                            setPasswordError("Password not Valid")
                        } else{
                            setPasswordError("")
                        }
                    }
                } className="p-4 w-[360px] border border-gray-400 shadow-xs rounded-xl " id="password" type="password" placeholder="Enter your Password..."/>
            <span>{passwordError}</span>
            </div>
            <button onClick={handleSubmit} className="px-12 py-2 rounded-2xl text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-300 ">Submit</button>
        </div>
    );
};

export default Form;