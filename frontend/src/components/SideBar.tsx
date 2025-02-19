import { TextIcon } from "../icons/TextIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar() {
    return <div className="h-screen bg-white boarder-r w-72 fixed left-0 top-0 border pl-4">
        <div className="flex text-2xl pl-3 pt-4 font-bold">
            <div className="p-2 text-purple-400">
                <TextIcon/>
            </div>
            <div className="py-1">
                Brainly
            </div>
        </div>
        <div className="flex flex-col font-medium pl-3 py-10">
            <SideBarItem icon = {<TextIcon/>} text = "Twitter" />
            <SideBarItem icon = {<TextIcon/>} text = "Youtube" />
            <SideBarItem icon = {<TextIcon/>} text = "Text" />
            <SideBarItem icon = {<TextIcon/>} text = "Link" />
            <SideBarItem icon = {<TextIcon/>} text = "Tags" />
        </div>
    </div>
}