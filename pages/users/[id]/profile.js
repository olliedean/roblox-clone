import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState } from 'react';
import ProfileAvatarItem from '../../../components/ProfileAvatarItem';
import FriendListItem from '../../../components/FriendListItem';
import Container from '../../../components/Container';

export default function UserProfile() {
  const [avatarPreviewMode, setAvatarPreviewMode] = useState('3D');
  const isPremium = true;
  const isVerified = true;

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
            <div className="flex flex-grow-0 gap-2">
              <span className="text-[32px] font-extrabold">ollie</span>
              {(isVerified && <span className="icon-verified-large mt-1" title="Verified Badge Icon" />)
              || (isPremium && <span className="icon-premium-profile mt-1" title="Premium Badge Icon" />)}
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
          className="p-2 about-boxshadow"
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
        <div className="text-gray-300 pb-5 border-b border-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
        </div>
        <div className="flex text-sm pt-2">
          <span className="text-gray-400">
            <Tippy
              content="olliedean"
              placement="bottom"
              className="bg-neutral-900 px-3 py-1 text-sm text-gray-400"
              arrow={roundArrow}
            >
              <div className="icon-spritesheet-4 icon-previous-usernames mr-1 opacity-50 hover:opacity-100" />
            </Tippy>
            Previous usernames
          </span>
          <Link href="/report-abuse/?userId=1">
            <a
              className="ml-auto text-red-500 font-medium"
            >
              Report Abuse
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <span className="text-xl font-bold">Currently Wearing</span>
        <div className="grid grid-cols-2 mt-2">
          <div className="bg-neutral-900 h-[300px] flex flex-col">
            <div className="max-w-lg w-full flex">
              <button
                type="button"
                className="w-12 ml-auto mr-3 mt-3 p-2 bg-white rounded-md text-black font-medium"
                onClick={() => setAvatarPreviewMode((avatarPreviewMode === '3D') ? '2D' : '3D')}
              >
                {(avatarPreviewMode === '3D') ? '2D' : '3D'}
              </button>
            </div>
            <div className="3d-container h-full w-full" />
          </div>
          <div className="bg-neutral-700 py-7">
            <div className="grid grid-cols-4 gap-4 px-5">
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
              <ProfileAvatarItem />
            </div>
            <div className="pt-2 flex items-center justify-center">
              <span className="w-5 h-5 bg-gray-100 inline-block rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Container title="Friends (?)" href="users/2/friends">
          <div className="flex shrink-0 overflow-auto">
            { /* 9 items */}
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
            <FriendListItem />
          </div>
        </Container>
      </div>

      <div className="mt-4">
        <Container
          title="Statistics"
          noSeeAll
        >
          <div className="bg-neutral-700 w-full p-3 flex">
            <div className="flex flex-col flex-1 text-center">
              <span className="text-gray-400 font-medium">Join Date</span>
              <span className="text-white font-bold">04/03/2002</span>
            </div>
            <div className="flex flex-col flex-1 text-center">
              <span className="text-gray-400 font-medium">Place Visits</span>
              <span className="text-white font-bold">0</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
