import { faBars, faBurger, faIcons, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import NavItem from "./NavItem";


export default function Header() {

    return (
        <div className="header flex px-3 items-center">
            <div className="flex-1 flex items-center">
                <span className="icon-spritesheet icon-burger-menu"></span>
                <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHBhdGggZD0iTTguMyAzLjdMMy42IDIxLjhsMTguMSA0LjYgNC42LTE4LjEtMTgtNC42em04IDEzLjZsLTMuNS0uOS45LTMuNSAzLjUuOS0uOSAzLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
                    width={30}
                    height={30}
                    className="ml-3"
                />
                <div className="pl-3 flex">
                    <NavItem>Discover</NavItem>
                    <NavItem>Avatar Shop</NavItem>
                    <NavItem>Create</NavItem>
                    <NavItem>Robux</NavItem>
                </div>
                <div className="ml-5">
                    <FontAwesomeIcon icon={faSearch} className="absolute ml-2 mt-[6.5px] text-slate-300"/>
                    <input
                        className="bg-black bg-opacity-25 px-3 pl-9 text-lg placeholder:text-slate-500
                            rounded border-[1px] border-slate-700 focus:border-slate-600"
                        type="text"
                        placeholder="Search"
                    >
                    
                    </input>
                </div>
            </div>
            <div className="flex items-center py-1">
                <span className="icon-spritesheet icon-robux"></span>
                <span className="icon-spritesheet icon-settings"></span>
            </div>
        </div>
    )
}