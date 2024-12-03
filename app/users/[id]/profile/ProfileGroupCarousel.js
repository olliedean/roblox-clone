export default function ProfileGroupCarousel() {
  return (
    <div className="flex relative group">
      <div className="absolute h-[300px] max-w-5xl mx-auto w-full pointer-events-none hidden group-hover:block">
        <div className="flex items-center justify-between h-full">
          <span
            className="
              w-12 h-12 bg-black bg-opacity-75 border-[1px] border-black inline-block rounded-full ml-4
              pointer-events-auto cursor-pointer
            "
          />
          <span
            className="
              w-12 h-12 bg-black bg-opacity-75 border-[1px] border-black inline-block rounded-full mr-4
              pointer-events-auto cursor-pointer
            "
          />
        </div>
      </div>
      <div className=" px-32 flex items-center justify-center bg-neutral-900 h-[300px]">
        <div
          className="w-[225px] h-[225px] bg-neutral-700 rounded-lg"
        />
      </div>
      <div className="flex-grow flex flex-col bg-neutral-700 h-[300px] py-5 px-9">
        <div className="w-full font-bold text-white text-2xl pb-2 border-b-[1px] border-neutral-400">Group Name</div>
        <div className="w-full text-neutral-400 pt-2">Group Description</div>
        <div className="mt-auto flex">
          <div className="flex-grow w-1/2">
            <span className="text-neutral-400 font-medium">Members</span>
            <br />
            <span className="text-white">0</span>
          </div>
          <div className="flex-grow w-1/2">
            <span className="text-neutral-400 font-medium">Rank</span>
            <br />
            <span className="text-white">Member</span>
          </div>
        </div>
      </div>
    </div>
  );
}