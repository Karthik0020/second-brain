import { useRef } from "react"
import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"


export function CreateContentModal({open, onClose}: any){
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const typeRef = useRef<HTMLInputElement>()

    async function addContent(){
        const title = titleRef.current.value
        const link = linkRef.current.value
        const type = typeRef.current.value

        const response = await axios.post("http://localhost:3000/api/v1/content/",{
            title,
            link,
            type
        },{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return <div>
        {open && <div> 
            <div className="w-screen h-screen bg-slate-300 fixed  left-0 top-0 opacity-60 flex justify-center">
                </div>
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded fixed">
                        <div className="flex justify-end">
                                <div onClick={ onClose}>
                                    <CloseIcon/>
                                </div>
                            </div>
                            <div className="flex">
                                <Input reference={titleRef} placeholder="Title" ></Input> 
                                <Input reference={linkRef} placeholder="Link"> </Input>
                                <Input reference={typeRef} placeholder="type"> </Input>
                            </div>
                            <div className=" flex justify-center">
                                <Button varient="primary" text="Submit" onClick={addContent} ></Button>
                            </div>
                        </span>
                    </div>
                </div>
            
        </div>}
    </div>
}