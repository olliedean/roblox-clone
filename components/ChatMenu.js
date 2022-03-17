import { useState } from "react";
import ChatMenuItem from "./ChatMenuItem";

export default function ChatMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-72 bottom-0 right-1 mr-1 bg-[#191b1d]
        absolute border-[1px] border-slate-700 border-b-0">
            <div className="flex">
                <div className="flex-1" onClick={() => setIsOpen(!isOpen)}>
                    <div className="text-xs p-2 font-bold">
                        Chat
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <span className="bg-white text-black px-2 py-1 text-xs rounded-full mr-2">
                            1
                        </span>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div>
                    <ul>
                        <ChatMenuItem />
                    </ul>
                </div>
            )}
        </div>
    )
}