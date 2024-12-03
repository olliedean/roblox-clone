"use client";
import Link from "next/link";
import { useState } from "react";

export default function GamePage() {
  const [activeTab, setActiveTab] = useState('about');
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

      <div className="mt-5">
        <div className="section grid grid-cols-3 font-medium text-center">
          <div
            className={"p-2 " + (activeTab === 'about' ? 'about-boxshadow' : 'hover-about-boxshadow')}
            onClick={() => setActiveTab('about')}
          >
            About
          </div>
          <div
            className={"p-2 " + (activeTab === 'store' ? 'about-boxshadow' : 'hover-about-boxshadow')}
            onClick={() => setActiveTab('store')}  
          >
            Store
          </div>
          <div
            className={"p-2 " + (activeTab === 'servers' ? 'about-boxshadow' : 'hover-about-boxshadow')}
            onClick={() => setActiveTab('servers')}
          >
            Servers
          </div>
        </div>
        { activeTab === 'about' && (
        <div>
          <div className="font-bold text-2xl mt-2">Description</div>
          <p className="text-gray-400">
            MIC UP is a game where you can talk to your friends and play games with them. 
            You can also listen to music and play with the bots in the game. 
            This game is a fun and interactive game where you can meet new people and make new friends.
          </p>
          <div className="bg-black rounded-lg w-fit py-4 px-5 font-bold mt-3">
            Content Maturity <span className="ml-3 text-gray-300 font-medium">N/A</span>
          </div>

          <div className="mt-5 border-y border-gray-500 py-3 flex">
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Active</span>
              <span className="text-white text-base">0</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Favorites</span>
              <span className="text-white text-base">0</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Visits</span>
              <span className="text-white text-base">0</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Voice Chat</span>
              <span className="text-white text-base">Not Supported</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Camera</span>
              <span className="text-white text-base">Not Supported</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Created</span>
              <span className="text-white text-base">Jan 26, 2021</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Updated</span>
              <span className="text-white text-base">Jan 26, 2021</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Server Size</span>
              <span className="text-white text-base">10</span>
            </div>
            <div className="flex flex-col text-center flex-grow">
              <span className="text-sm font-semibold text-gray-400">Genre</span>
              <span className="text-white text-base">All</span>
            </div>
          </div>
        </div>
        )}
      </div>

    </div>
  );
}