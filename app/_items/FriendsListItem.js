import Link from 'next/link';

export default function FriendListItem() {
  return (
    <Link href="/users/1/profile" passHref>
      <div className="flex flex-col text-center w-[90px] mr-5">
        <div className="w-[90px] h-[90px] placeholder-spritesheet placeholder-avatar rounded-full" />
        <div className="font-medium text-xs mt-1">ROBLOX</div>
      </div>
    </Link>
  );
}