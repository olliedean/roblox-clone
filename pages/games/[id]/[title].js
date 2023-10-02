import { NextSeo } from 'next-seo';

export default function GamePage() {
  return (
    <div className="max-w-5xl ml-56 mt-5">
      <NextSeo
        title="MIC UP 🔊"
        description="MIC UP 🔊 is one of the millions creating and exploring the endless possibilities of Roblox. Join MIC UP 🔊 on Roblox and explore together!"
      />
      <div className="flex">
        <div className="w-[640px] h-[360px] bg-neutral-600" />
        <div className="ml-5 flex flex-col flex-grow">
          <span className="text-3xl font-black">MIC UP 🔊</span>
          <span className=" text-gray-400 font-semibold">
            By
            <a className="text-white ml-1">
              ollie
              <span className="icon-verified-small ml-1" title="Premium Badge Icon" />
            </a>
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
            className="p-2 about-boxshadow"
          >
            About
          </div>
          <div className="p-2 hover-about-boxshadow">
            Store
          </div>
          <div className="p-2 hover-about-boxshadow">
            Servers
          </div>
        </div>
      </div>

    </div>
  );
}
