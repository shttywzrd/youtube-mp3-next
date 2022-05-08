import React, { useRef } from "react";
import { useRouter } from "next/router";
import { HiSearch } from "react-icons/hi";

const SearchBox = () => {
  const searchBox = useRef<HTMLFormElement>(null);
  const searchField = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSearch() {
    if (searchField.current) {
      const query = encodeURIComponent(searchField.current.value);
      console.log(query);
      router.push(`/search/${query}`);
    }
  }

  return (
    <>
      <form
        id="search"
        ref={searchBox}
        className="z-10 hidden max-w-xl flex-grow bg-yt-900 py-1.5 px-3 xs:flex"
        style={{ outlineColor: "red" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          ref={searchField}
          className="h-7 w-full bg-yt-900 text-yt-200 focus:outline-none"
          type="text"
          placeholder="Search"
          onFocus={() => {
            if (searchBox.current) {
              searchBox.current.className += " outline outline-1 caret-yt-200";
            }
          }}
          onBlur={() => {
            if (searchBox.current) {
              searchBox.current.className =
                "py-1.5 px-3 z-10 bg-yt-900 flex-grow max-w-xl";
            }
          }}
        />
      </form>
      <button
        className="group flex w-10 justify-center bg-yt-700 p-2 text-yt-200 xs:w-16"
        type="submit"
        form="search"
      >
        <HiSearch className="h-6 w-6 text-yt-500 group-hover:text-yt-red-100" />
      </button>
    </>
  );
};

export default SearchBox;
