"use client";

import ProfileAvatarItem from "@/app/_items/ProfileAvatarItem";
import { useState } from "react";

export default function AvatarPreviewer() {
    const [avatarPreviewMode, setAvatarPreviewMode] = useState('3D');

    return (
        <>
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
        </>
    );
}