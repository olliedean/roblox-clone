import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function UserProfile() {
  return (
    <div className="max-w-5xl mx-auto mt-4">
      <NextSeo
        title="ollie"
        description="ollie is one of the millions creating and exploring the endless possibilities of Roblox. Join ollie on Roblox and explore together!"
      />
      <div className="section p-4">
        <div className="flex">
          <div
            className="placeholder-spritesheet placeholder-avatar w-32 h-32 rounded-full"
            style={{ backgroundSize: '128px', backgroundPosition: '0 256px' }}
          />
          <div className="flex flex-col leading-tight ml-3">
            <div className="flex flex-grow-0">
              <span className="text-[32px] font-extrabold mr-2">ollie</span>
              <div className="icon-premium-profile mt-1" />
            </div>
            <span className="text-gray-400 text-sm">
              @ollie
            </span>

            <div className="mt-auto font-medium flex flex-row">
              <Link href="/users/1/friends">
                902
              </Link>
              {' '}
              <span className="text-sm font-normal text-gray-400 mr-3 ml-1">Friends</span>
              <Link href="/users/1/friends/followers">
                1.5M
              </Link>
              {' '}
              <span className="text-sm font-normal text-gray-400 mr-3 ml-1">Followers</span>
              <Link href="/users/1/friends/following">
                106
              </Link>
              {' '}
              <span className="text-sm font-normal text-gray-400 ml-1">Following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section mt-4 grid grid-cols-2 text-center font-medium">
        <div
          className="p-2"
          style={{ boxShadow: 'inset 0 -4px 0 0 #fff;' }} /* active */
        >
          About
        </div>
        <div className="p-2 hover-about-boxshadow">
          Creations
        </div>
      </div>
      <div className="mt-2">
        { /* changable content through tabs */ }
        <span className="text-xl font-bold">About</span>
        <div className="text-gray-300 pb-5 border-b border-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
        </div>
        <div className="flex text-sm pt-2">
          <span className="text-gray-400">
            <div className="icon-spritesheet-4 icon-previous-usernames mr-1 opacity-50 hover:opacity-100" />
            Previous usernames
          </span>
          <a
            className="ml-auto text-red-500 font-medium"
            href="/report-abuse/?userId=1"
          >
            Report Abuse
          </a>
        </div>
      </div>
    </div>
  );
}
