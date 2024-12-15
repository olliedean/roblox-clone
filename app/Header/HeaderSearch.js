"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import { useState } from "react";


export default function HeaderSearch() {
    const [searchMenuOpen, setSearchMenuOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    function getSanitizedSearchValue() {
        return searchValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    
    return (
        <>
        <FontAwesomeIcon icon={faSearch} className="absolute ml-2 text-slate-300" />
        <Tippy
          visible={searchMenuOpen}
          onClickOutside={() => setSearchMenuOpen(false)}
          placement="bottom"
          className="w-[385px] !max-w-none bg-neutral-800"
          content={(
            <div dangerouslySetInnerHTML={{
              __html: `
              <div class="flex flex-col w-full text-neutral-400 font-medium">
                <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                  <span class="icon-spritesheet-6 icon-search-user mr-1"></span>
                  <span class=" text-white">${getSanitizedSearchValue()}</span>
                  <span> in People</span>
                </a>
                <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                  <span class="icon-spritesheet-6 icon-search-play mr-1"></span>
                  <span class=" text-white">${getSanitizedSearchValue()}</span>
                  <span> in Experiences</span>
                </a>
                <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                  <span class="icon-spritesheet-6 icon-search-shopping mr-1"></span>
                  <span class=" text-white">${getSanitizedSearchValue()}</span>
                  <span> in Marketplace</span>
                </a>
                <a href="/search/users?keyword=olliedean" class="search-menu-item p-4 border-b-[1px] border-neutral-600">
                  <span class="icon-spritesheet-6 icon-search-users mr-1"></span>
                  <span class=" text-white">${getSanitizedSearchValue()}</span>
                  <span> in Groups</span>
                </a>
                <a href="/search/users?keyword=olliedean" class="search-menu-item p-4">
                  <span class="icon-spritesheet-6 icon-search-library mr-1"></span>
                  <span class=" text-white">${getSanitizedSearchValue()}</span>
                  <span> in Creator Marketplace</span>
                </a>
              </div>
              `,
            }}
            />
          )}
        >
          <input
            className="bg-black bg-opacity-50 pt-[2px] px-3 pl-9 font-light placeholder:text-gray-600 rounded-lg border-[1px] border-gray-700 focus:border-gray-800 w-96"
            onInput={(e) => {
              setSearchMenuOpen(e.target.value.length > 0);
              setSearchValue(e.target.value);
            }}
            onClick={(e) => { setSearchMenuOpen(e.target.value.length > 0); }}
            type="text"
            placeholder="Search"
          />
        </Tippy>
        </>
    )
}