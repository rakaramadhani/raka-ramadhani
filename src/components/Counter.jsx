import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    let [countScale, setCountScale] = useState("text-3xl font-bold scale-100 transition duration-100 ease-in-out")
    
    function handleIncrement(){
        console.log("Bertambah");
        setCountScale(countScale = "text-3xl font-bold scale-130 transition duration-100 ease-in-out ")
        setTimeout(()=> {
            setCountScale(countScale = "text-3xl font-bold scale-100 transition duration-100 ease-in-out")
        }, 50)
        setCount(count+1);
    };
    function handleDecrement(){
        console.log("Berkurang");
        setCountScale(countScale = "text-3xl font-bold scale-130 transition duration-100 ease-in-out")
        setTimeout(()=> {
            setCountScale(countScale = "text-3xl font-bold scale-100 transition duration-100 ease-in-out")
        }, 50)
        setCount(count-1);
    };

    return (
        <div className="flex gap-8">
            <button className="px-8 py-1 flex rounded-2xl w-auto justify-center text-xl font-bold hover:bg-blue-500 hover:scale-105 hover:text-white shadow-2xl transition duration-100 ease-in-out" onClick={handleDecrement}>Kurang</button>
            <p className={countScale}>{count}</p>
            <button className="px-8 py-1 flex rounded-2xl w-auto justify-center text-xl font-bold hover:bg-blue-500 hover:scale-105 hover:text-white shadow-2xl transition duration-100 ease-in-out" onClick={handleIncrement}>Tambah</button>
        </div>
    )
};

export default Counter;