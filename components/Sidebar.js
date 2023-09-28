import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <div className="w-[175px] h-[calc(100vh-42px)] bg-[#191b1d]">
      <div className="w-full border-b border-gray-600 flex items-center p-2 font-medium">
        <div
          className="placeholder-spritesheet rounded-full placeholder-avatar w-6 h-6 mr-2"
          style={{ backgroundSize: '24px', backgroundPosition: '0 48px' }}
        />
        ollie
      </div>

      <div className="flex flex-col mt-2">
        <ul className="flex flex-col">
          <SidebarItem href="/">
            <div className="icon-spritesheet icon-nav-home mr-2" />
            Home
          </SidebarItem>
          <SidebarItem href="/users/2/profile">
            <div className="icon-spritesheet icon-nav-profile mr-2" />
            Profile
          </SidebarItem>
          <SidebarItem href="/my/messages">
            <div className="icon-spritesheet icon-nav-messages mr-2" />
            Messages
          </SidebarItem>
          <SidebarItem href="/users/friends/friend-requests">
            <div className="icon-spritesheet icon-nav-friends mr-2" />
            Friends
          </SidebarItem>
          <SidebarItem href="/my/avatar">
            <div className="icon-spritesheet icon-nav-avatar mr-2" />
            Avatar
          </SidebarItem>
          <SidebarItem href="/users/1/inventory">
            <div className="icon-spritesheet icon-nav-inventory mr-2" />
            Inventory
          </SidebarItem>
          <SidebarItem href="/trades">
            <div className="icon-spritesheet icon-nav-trade mr-2" />
            Trade
          </SidebarItem>
          <SidebarItem href="/my/groups">
            <div className="icon-spritesheet icon-nav-groups mr-2" />
            Groups
          </SidebarItem>
          <SidebarItem href="/blog">
            <div className="icon-spritesheet icon-nav-blog mr-2" />
            Blog
          </SidebarItem>
          <SidebarItem href="https://store.roblox.com">
            <div className="icon-spritesheet icon-nav-store mr-2" />
            Official Store
          </SidebarItem>
          <SidebarItem href="/giftcards">
            <div className="icon-spritesheet icon-nav-giftcards mr-2" />
            Gift Cards
          </SidebarItem>
        </ul>
        <button
          className="w-10/12 rounded-lg py-[6px] mt-2 bg-white
          text-gray-700 font-medium mx-auto text-center"
          type="button"
        >
          Premium
        </button>
      </div>
    </div>
  );
}
