import React, { useRef } from "react";

const SearchBox = () => {
  const searchBox = useRef<HTMLInputElement>(null);
  return (
    <div
      ref={searchBox}
      className="py-1.5 px-3 z-10 bg-yt-900"
      style={{ outlineColor: "red" }}
    >
      <input
        className="bg-yt-900 text-base h-7 focus:outline-none"
        type="text"
        placeholder="Search"
        onFocus={() => {
          if (searchBox.current) {
            searchBox.current.className += " outline outline-1 caret-yt-200";
          }
        }}
        onBlur={() => {
          if (searchBox.current) {
            searchBox.current.className = "py-1.5 px-3 z-10 bg-yt-900";
          }
        }}
      />
    </div>
  );
};

export default SearchBox;
