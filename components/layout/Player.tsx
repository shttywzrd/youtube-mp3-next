import React from "react";
import PlayIcon from "../icons/PlayIcon";

const Player = () => {
  return (
    <div className="flex justify-between fixed bottom-0 w-screen h-24 border-t bg-yt-800 text-yt-200 border-yt-600 px-4 items-center">
      <div>Info</div>

      <div className="">
        <PlayIcon />
      </div>

      <div>Volume</div>
    </div>
  );
};

export default Player;
