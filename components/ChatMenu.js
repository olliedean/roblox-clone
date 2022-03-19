import { useState } from 'react';
import ChatMenuItem from './ChatMenuItem';

export default function ChatMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-72 bottom-0 right-1 mr-1 bg-[#191b1d]
        absolute border-[1px] border-slate-700 border-b-0"
    >
      <div className="flex">
        <div className="flex-1 pointer" aria-hidden="true" onClick={() => setIsOpen(!isOpen)}>
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
        <div className="bg-[#393b3d]">
          <span className="icon-spritesheet-3 icon-chat-search absolute mt-8 ml-2" />
          <input
            type="text"
            placeholder="Search for friends"
            className="bg-black placeholder:text-gray-500 w-full rounded-lg
            text-xs py-2 pl-7"
          />
          <ul>
            <ChatMenuItem />
          </ul>
        </div>
      )}
    </div>
  );
}
