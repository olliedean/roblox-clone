import { faBars, faBurger, faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default function Header() {

    return (
        <div className="header flex p-1 px-3 items-center">
            <div className="flex-1 flex items-center">
                <span className="icon-spritesheet icon-burger-menu"></span>
                <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PHBhdGggZD0iTTguMyAzLjdMMy42IDIxLjhsMTguMSA0LjYgNC42LTE4LjEtMTgtNC42em04IDEzLjZsLTMuNS0uOS45LTMuNSAzLjUuOS0uOSAzLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
                    width={30}
                    height={30}
                    className="ml-3"
                />
            </div>
            <div className="flex items-center">
                <span className="icon-spritesheet icon-robux"></span>
                <span className="icon-spritesheet icon-settings"></span>
            </div>
        </div>
    )
}