import Link from 'next/link';

/* eslint-disable react/no-danger */
export default function Container({
  children, title, href, titlehref = false,
}) {
  let customtitle;
  if (!titlehref) customtitle = title;
  else customtitle = `<Link href='${href}'><a>${title}</a></Link>`;

  return (
    <div className="mb-10">
      <div className="flex">
        <div
          className="font-bold text-xl flex-1"
          dangerouslySetInnerHTML={
          { __html: customtitle }
        }
        />
        <Link href={href}>
          <a className="font-medium flex items-center">
            See All
            <span className="icon-spritesheet-2 icon-arrow-right ml-2 opacity-90" />
          </a>
        </Link>
      </div>
      <div className="px-1 py-2">
        {children}
      </div>
    </div>
  );
}
