interface InputProp {
    placeholder: string,
    reference:any
}

export function Input({placeholder, reference}: any) {
    return <div> 
        <input placeholder={placeholder} ref={reference} type={"text"} className="px-4 py-2 boarder rounded m-2" />
    </div>
}