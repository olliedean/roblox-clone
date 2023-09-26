export default function Container({ children, title }) {
  return (
    <div>
      <div className="flex">
        <div className="font-bold text-xl flex-1">{title}</div>
        <a className="font-medium flex items-center" href="users/friends">
          See All
          <span className="icon-spritesheet-2 icon-arrow-right ml-2 opacity-90" />
        </a>
      </div>
      <div className="px-1 py-2">
        {children}
      </div>
    </div>
  );
}
