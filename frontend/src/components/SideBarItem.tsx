export function SideBarItem({text, icon}: any) {
    return <div className="flex cursor-pointer hover:bg-purple-200 rounded max-w-48 pl-2">
        <div className="p-2">
            {icon}    
        </div> 
        <div className="p-2">
            {text}
        </div>
    </div>
}