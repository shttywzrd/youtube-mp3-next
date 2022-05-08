import React from "react";
import {
  MdOutlineHome,
  MdOutlineExplore,
  MdPlaylistPlay,
} from "react-icons/md";
import clsx from "clsx";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import StartMenu from "../header/StartMenu";

const Sidebar = () => {
  const isOpen = useTypedSelector((state) => state.sidebar.isOpen);

  return (
    <div
      className={clsx(
        "fixed top-0 z-20 h-screen w-[15rem] bg-yt-800 text-sm",
        "overflow-y-scroll scrollbar-thin scrollbar-thumb-yt-600 hover:scrollbar-thumb-yt-700",
        "-translate-x-[15rem] transition-transform duration-300 ease-in-out ",
        isOpen && "translate-x-0"
      )}
      style={{
        scrollbarColor: "#4b4b4b #232323",
        scrollbarWidth: "thin",
      }}
    >
      <StartMenu />
      <ul className="flex flex-col py-3">
        <li className="group flex min-h-[2.5rem] cursor-pointer items-center px-6 hover:bg-yt-700">
          <MdOutlineHome className="h-6 w-6 text-yt-500 group-hover:text-yt-red-200" />
          <h1 className="ml-6 text-yt-200 group-hover:text-yt-red-100">Home</h1>
        </li>
        <li className="group flex min-h-[2.5rem] cursor-pointer items-center px-6 hover:bg-yt-700">
          <MdOutlineExplore className="h-6 w-6 text-yt-500 group-hover:text-yt-red-200" />
          <h1 className="ml-6 text-yt-200 group-hover:text-yt-red-100">
            Browse
          </h1>
        </li>
        <li className="group flex min-h-[2.5rem] cursor-pointer items-center px-6 hover:bg-yt-700">
          <MdPlaylistPlay className="h-6 w-6 text-yt-500 group-hover:text-yt-red-200" />
          <h1 className="ml-6 text-yt-200 group-hover:text-yt-red-100">
            My Playlists
          </h1>
        </li>
      </ul>
      <div className="flex-grow border-t border-yt-700" />
      <ul className="flex flex-col py-3 text-yt-200">
        <li className="my-1 ml-6 hover:cursor-pointer hover:text-yt-red-100">
          Playlist #1
        </li>
        <li className="my-1 ml-6 hover:cursor-pointer hover:text-yt-red-100">
          Playlist #2
        </li>
        <li className="my-1 ml-6 hover:cursor-pointer hover:text-yt-red-100">
          Playlist #3
        </li>
        <li className="my-1 ml-6 hover:cursor-pointer hover:text-yt-red-100">
          Playlist #4
        </li>
        <li className="my-1 ml-6 hover:cursor-pointer hover:text-yt-red-100">
          Playlist #10
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
