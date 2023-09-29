import Link from 'next/link';

export default function NavItem({ children, href = '/' }) {
  return (
    <Link href={href}>
      <a className="hover:no-underline">
        <div className="flex h-full items-center font-medium px-12
                bg-black bg-opacity-0 hover:bg-opacity-5
                hover:border-b-2 hover:pt-[2px]
                "
        >
          {children}
        </div>
      </a>
    </Link>
  );
}
