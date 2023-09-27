export default function HomeGameListItem() {
  return (
    <div className="flex flex-col mr-5 mx-auto">
      <div className="w-[150px] h-[150px] placeholder-spritesheet placeholder-game rounded-lg" />
      <div className="font-bold mt-1">Mic UP 🔊</div>
      <div className="text-xs text-gray-400 font-semibold flex">
        <span className="icon-spritesheet-2 icon-thumbs-up mr-1" />
        95%
        <span className="icon-spritesheet-2 icon-user-play ml-3 mr-1" />
        101k
      </div>
    </div>
  );
}
