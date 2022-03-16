export default function NavItem({children}) {
    return (
        <div className="flex h-full items-center font-medium px-4
            bg-black bg-opacity-0 hover:bg-opacity-10 pt-1
            hover:border-b-2
            ">
            {children}
        </div>
    )
}