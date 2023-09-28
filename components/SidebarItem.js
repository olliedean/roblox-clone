import Link from 'next/link';

export default function SidebarItem({ children, href }) {
  return (
    <li>
      <Link href={href}>
        <a
          href={href}
          className="flex items-center px-3 py-1 font-medium text-gray-100  hover:no-underline hover:brightness-200"
        >
          {children}
        </a>
      </Link>
    </li>
  );
}
