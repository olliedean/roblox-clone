import Link from "next/link";
import NavItem from "../NavItem";
import Image from "next/image";
import { auth } from "@/auth";
import ClientWrapper from "./ClientWrapper";
import HeaderUserSection from "./HeaderUserSection";

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
            <HeaderUserSection session={session} />
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