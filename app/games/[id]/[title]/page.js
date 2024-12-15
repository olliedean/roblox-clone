import Link from "next/link";
import GameTabs from "./Tabs";
import React from "react";


export const metadata = {
  title: "MIC UP 🔊",
}

export async function generateStaticParams() {
  return Array.from(Array(20).keys()).map((value) => ({variable: value}));
}

export default async function GamePage({ params }) {
  const { id } = await params;
  return (
    <div className="max-w-5xl ml-56 mt-5">
      <div className="flex">
        <div className="w-[640px] h-[360px] bg-neutral-600" />
        <div className="ml-5 flex flex-col flex-grow">
          <span className="text-3xl font-black">MIC UP 🔊</span>
          <span className=" text-gray-400 font-semibold">
            By
            <Link href="/users/1/profile" className="text-white ml-1">
              ollie
              <span className="icon-verified-small ml-1" title="Premium Badge Icon" />
            </Link>
          </span>
          <span className="text-gray-400">
            All Ages
          </span>

          <div className="flex flex-col mt-auto">
            <button
              className="bg-emerald-500 w-full rounded-xl p-3 text-4xl"
              type="button"
            >
              ▶
            </button>
            { /* favourite, follow and rating buttons here */ }
          </div>
        </div>
      </div>

      <GameTabs />

    </div>
  );
}