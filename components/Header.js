/* eslint-disable react/no-danger */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import NavItem from './NavItem';

export default function Header() {
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  function getSanitizedSearchValue() {
    return searchValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return (
    <div className="header flex px-3 items-stretch">
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
          <NavItem href="/upgrades/robux">Robux</NavItem>
        </div>

        <div className="ml-5 flex items-center">
          <FontAwesomeIcon icon={faSearch} className="absolute ml-2 text-slate-300" />
          <Tippy
            visible={searchMenuOpen}
            onClickOutside={() => setSearchMenuOpen(false)}
            placement="bottom"
            className="w-[385px] !max-w-none bg-neutral-800"
            content={(
              <div dangerouslySetInnerHTML={{
                __html: `
                <div class="flex flex-col w-full text-neutral-400 font-medium">
                  <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                    <span class=" text-white">${getSanitizedSearchValue()}</span>
                    <span> in People</span>
                  </a>
                  <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                    <span class=" text-white">${getSanitizedSearchValue()}</span>
                    <span> in Experiences</span>
                  </a>
                  <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                    <span class=" text-white">${getSanitizedSearchValue()}</span>
                    <span> in Marketplace</span>
                  </a>
                  <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                    <span class=" text-white">${getSanitizedSearchValue()}</span>
                    <span> in Groups</span>
                  </a>
                  <a href="/search/users?keyword=olliedean" class="search-menu-item p-4">
                    <span class=" text-white">${getSanitizedSearchValue()}</span>
                    <span> in Creator Marketplace</span>
                  </a>
                </div>
                `,
              }}
              />
            )}
          >
            <input
              className="bg-black bg-opacity-50 pt-[2px] px-3 pl-9 font-light placeholder:text-gray-600
                              rounded-lg border-[1px] border-gray-700 focus:border-gray-800
                              w-96"
              onInput={(e) => {
                if (e.target.value.length > 0) {
                  setSearchMenuOpen(true);
                } else {
                  setSearchMenuOpen(false);
                }
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Search"
            />
          </Tippy>
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
        <Tippy
          trigger="click"
          className="p-0 mr-4 text-neutral-400 bg-neutral-900 text-lg h-96 w-[400px] flex flex-col"
          content={(
            <div dangerouslySetInnerHTML={{
              __html: `
              <div class="flex flex-col h-96">
                <div class="flex text-xs p-3 bg-neutral-900">
                  <span class="flex-1">Notifications</span>
                  <a href="/my/account#/notifications" class="text-white">Settings</a>
                </div>
                <div class="p-3 bg-black bg-opacity-30 flex-grow">
                  ${/* notifications */+`
                </div>
              </div>
              `}`,
            }}
            />
          )}
        >
          <a
            className="p-[2.5px] pr-[3px] rounded-lg
                  bg-white bg-opacity-0 hover:bg-opacity-20 mr-2"
          >
            <span className="icon-spritesheet icon-notification-stream" />
          </a>
        </Tippy>
        <Tippy
          trigger="click"
          className="p-0 mr-4 text-neutral-400 bg-neutral-700 font-medium text-lg"
          content={(
            <div dangerouslySetInnerHTML={{
              __html: `
              <a href="/upgrades/robux" class="settings-menu-item">
                Buy Robux
              </a>
              <a href="/my/transactions" class="settings-menu-item">
                My Transactions
              </a>
              <a href="/redeem" class="settings-menu-item">
                Redeem Roblox Codes
              </a>
              `,
            }}
            />
          )}
        >
          <a
            className="p-[2.5px] pr-[3px] rounded-lg hover:no-underline
                bg-white bg-opacity-0 hover:bg-opacity-20 flex items-center"
          >
            <span className="icon-spritesheet-5 icon-robux" />
            <span className="font-medium ml-1">202.1K</span>
          </a>
        </Tippy>
        <Tippy
          trigger="click"
          className="p-0 mr-4 text-neutral-400 bg-neutral-700 font-medium text-lg"
          content={(
            <div dangerouslySetInnerHTML={{
              __html: `
              <a href="/my/account" class="settings-menu-item">
                Settings
              </a>
              <a href="/crossdevicelogin/ConfirmCode" class="settings-menu-item">
                Quick Log In
              </a>
              <a href="/info/help" class="settings-menu-item">
                Help
              </a>
              <a href="/logout" class="settings-menu-item">
                Logout
              </a>
            `,
            }}
            />
          )}
        >
          <a
            className="ml-3 p-[2.5px] pr-[3px] rounded
                bg-white bg-opacity-0 hover:bg-opacity-20"
          >
            <span className="icon-spritesheet icon-settings" />
          </a>
        </Tippy>
      </div>
      <style jsx>
        {`
          .tippy-content {
            @apply p-0;
          }
        `}
      </style>
    </div>
  );
}
