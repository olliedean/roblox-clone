import Link from "next/link";
import NavItem from "../NavItem";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { auth } from "@/auth";
import ClientWrapper from "./ClientWrapper";

export default async function Header() {
  const session = await auth();

  return (
    <div className="header flex px-3 items-stretch">
      <div className="flex-1 flex items-stretch">
        <div className="flex items-center ml-2">
          <Link href="/home" className="flex items-center">
            <Image
              src="/roblox-logo-dark.svg"
              width={118}
              height={30}
            />
          </Link>
        </div>
        <div className="pl-3 flex">
          <NavItem href="/chart">Charts</NavItem>
          <NavItem href="/catalog">Marketplace</NavItem>
          <NavItem href="/404">Create</NavItem>
          <NavItem href="/upgrades/robux">Robux</NavItem>
        </div>

        <div className="ml-5 flex items-center">
          <ClientWrapper />
        </div>
      </div>
      <div className="flex items-center py-1">
        {session?.user ? (
          <>
            <div className="flex items-center mr-3">
              <Link href="/users/2/profile" className="flex items-center">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjxnIGlkPSJ1bmFwcHJvdmVkXzFfIj48cGF0aCBpZD0iYmdfMl8iIGZpbGw9IiM2NTY2NjgiIGQ9Ik0wIDBoOTB2OTBIMHoiLz48ZyBpZD0idW5hcHByb3ZlZCIgb3BhY2l0eT0iLjMiPjxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjQ1IiBjeT0iNDguOCIgcj0iMTAiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzggNDEuN2wxNCAxNC4xTTMyLjUgMjMuNWgtNHY0TTI4LjUgNjIuNXY0aDRNMjguNSAzMS44djZNMjguNSA0MnY2TTI4LjUgNTIuMnY2TTU3LjUgNjYuNWg0di00TTYxLjUgNTguMnYtNk02MS41IDQ4di02TTYxLjUgMzcuOHYtNE0zNi44IDY2LjVoNk00Ny4yIDY2LjVoNk0zNi44IDIzLjVoNk00Ny4yIDIzLjVoNE01MS40IDIzLjhMMzUuNSAzMC4xbDMuNSAzLjVNNTEuMiAyMy44djNNNTguNSAzMy44aDNtLTcuMy0zLjZ2My42aDMuNiIvPjwvZz48L2c+PC9zdmc+"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-xs font-medium ml-1">
                  @Zenternal
                </span>
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
                className="p-[2.5px] pr-[3px] rounded-lg bg-white bg-opacity-0 hover:bg-opacity-20 mr-2"
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
                className="p-[2.5px] pr-[3px] rounded-lg hover:no-underline bg-white bg-opacity-0 hover:bg-opacity-20 flex items-center"
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
                className="ml-3 p-[2.5px] pr-[3px] rounded bg-white bg-opacity-0 hover:bg-opacity-20"
              >
                <span className="icon-spritesheet icon-settings" />
              </a>
            </Tippy>
          </>
        ) : (
          <>
            <Link href="/signup" className="mr-2">
              <button className="bg-emerald-600 py-1 px-2 rounded-lg">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="border border-slate-400 py-1 px-2 rounded-lg">
                Log In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}