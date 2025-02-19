import { ReactElement } from "react";

interface ButtonProp {
    varient: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean,
    loading?: boolean
}

const varientclass = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyle = "px-2 py-2 rounded-md font-light flex item-center"
export function Button({varient, text, startIcon, onClick, fullWidth, loading}: ButtonProp) {
    return <button onClick={onClick} className={varientclass[varient] + " " + defaultStyle + `${fullWidth ? " w-full flex justify-center item-center" : ""} ${loading ? "opacity-45" : ""} `} disabled = { loading }>
        <div className=" pr-2 ">
            {startIcon}        
        </div>
        {text}    
    </button>
}