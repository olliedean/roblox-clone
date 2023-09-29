import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import NavItem from './NavItem';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="header flex px-3 items-center items-stretch">
      <div className="flex-1 flex items-stretch">
        <div className="flex items-center ml-2">
          {/* OLD BURGER MENU
          <a
            href="/menu"
            className="p-[2.5px] pr-[3px] rounded
                    bg-white bg-opacity-0 hover:bg-opacity-20 flex mr-3"
          >
            <span className="icon-spritesheet icon-burger-menu" />
          </a>
          */}
          <Link href="/">
            <a
              className="flex items-center"
            >
              <Image
                src="/roblox-logo-dark.svg"
                width={118}
                height={30}
              />
            </a>
          </Link>
        </div>
        <div className="pl-3 flex">
          <NavItem>Discover</NavItem>
          <NavItem>Marketplace</NavItem>
          <NavItem>Create</NavItem>
          <NavItem>Robux</NavItem>
        </div>
        <div className="ml-5 flex items-center">
          <FontAwesomeIcon icon={faSearch} className="absolute ml-2 text-slate-300" />
          <input
            className="bg-black bg-opacity-50 pt-[2px] px-3 pl-9 font-light placeholder:text-gray-600
                            rounded-lg border-[1px] border-gray-700 focus:border-gray-800
                            w-96"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center py-1">
        <div className="flex items-center mr-3">
          <Link href="/users/2/profile">
            <a className="flex items-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJ1bmFwcHJvdmVkXzFfIj48cGF0aCBpZD0iYmdfMl8iIGZpbGw9IiM2NTY2NjgiIGQ9Ik0wIDBoOTB2OTBIMHoiLz48ZyBpZD0idW5hcHByb3ZlZCIgb3BhY2l0eT0iLjMiPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjQ1IiBjeT0iNDguOCIgcj0iMTAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzggNDEuN2wxNCAxNC4xTTMyLjUgMjMuNWgtNHY0TTI4LjUgNjIuNXY0aDRNMjguNSAzMS44djZNMjguNSA0MnY2TTI4LjUgNTIuMnY2TTU3LjUgNjYuNWg0di00TTYxLjUgNTguMnYtNk02MS41IDQ4di02TTYxLjUgMzcuOHYtNE0zNi44IDY2LjVoNk00Ny4yIDY2LjVoNk0zNi44IDIzLjVoNk00Ny4yIDIzLjVoNE01MS40IDIzLjZsMy41IDMuNU01Ny45IDMwLjFsMy41IDMuNU01MS4yIDIzLjh2M001OC41IDMzLjhoM001MS4yIDMwLjJ2My42aDMuNiIvPjwvZz48L2c+PC9zdmc+"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="text-xs font-medium ml-1">
                @Zenternal
              </span>
            </a>
          </Link>
          <span className="text-xs text-gray-300 ml-1">
            13+
          </span>
        </div>
        <a
          href="/notifications"
          className="p-[2.5px] pr-[3px] rounded-lg
                bg-white bg-opacity-0 hover:bg-opacity-20 mr-2"
        >
          <span className="icon-spritesheet icon-notification-stream" />
        </a>
        <a
          href="/robux"
          className="p-[2.5px] pr-[3px] rounded-lg hover:no-underline
                bg-white bg-opacity-0 hover:bg-opacity-20 flex items-center"
        >
          <span className="icon-spritesheet icon-robux" />
          <span className="font-medium ml-1">202.1K</span>
        </a>
        <a
          href="/settings"
          className="ml-3 p-[2.5px] pr-[3px] rounded
                bg-white bg-opacity-0 hover:bg-opacity-20"
        >
          <span className="icon-spritesheet icon-settings" />
        </a>
      </div>
    </div>
  );
}
