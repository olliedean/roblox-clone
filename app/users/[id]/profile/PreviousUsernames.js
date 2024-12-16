"use client";

import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';

export default function ProfilePreviousUsernames() {
    return (
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
    )
}