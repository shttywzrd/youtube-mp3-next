import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";

const Sidebar = () => {
  const [isMinified, setMinified] = useState(true);

  return (
    <div
      className="bg-yt-800 top-14 h-[calc(100vh-56px)] w-[15rem] text-sm font-medium fixed overflow-y-scroll scrollbar-thin scrollbar-thumb-yt-600 hover:scrollbar-thumb-yt-700"
      style={{
        scrollbarColor: "#4b4b4b #232323",
        scrollbarWidth: "thin",
      }}
    >
      <ul className="flex flex-col py-3">
        {["Home", "Explore", "Subscriptions"].map((li, index) => (
          <li
            key={index}
            className="flex px-6 min-h-[40px] items-center group hover:bg-yt-700 cursor-pointer"
          >
            <SearchIcon />
            <h1 className="ml-6 leading-[20px] text-yt-200 group-hover:text-yt-red-100">
              {li}
            </h1>
          </li>
        ))}
      </ul>
      <div className="flex-grow border-t border-yt-700" />
    </div>
  );
};

export default Sidebar;
