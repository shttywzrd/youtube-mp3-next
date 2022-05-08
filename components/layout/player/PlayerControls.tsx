import React from "react";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { HiPause, HiPlay } from "react-icons/hi";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import useActions from "../../../hooks/useActions";
import { secondsToTimestamp } from "../../../lib";
import RangeInput from "../../ui/RangeInput";

interface PlayerControlsProps {
  onSeek: (time: number) => void;
}

const PlayerControls = (props: PlayerControlsProps) => {
  const isPaused = useTypedSelector((state) => state.player.paused);
  const currentTime = useTypedSelector((state) => state.player.currentTime);
  const currentTrack = useTypedSelector((state) => state.player.currentTrack);

  const { play, pause } = useActions();

  return (
    <div className="col-start-1 col-end-13 mb-3 flex flex-grow flex-col xs:col-start-4 xs:col-end-11 sm:col-start-5 sm:col-end-11">
      <div className="flex items-center justify-center">
        <BsSkipStartFill className="h-6 w-6 cursor-pointer" />
        {isPaused ? (
          <HiPlay className="mx-3 h-10 w-10 cursor-pointer" onClick={play} />
        ) : (
          <HiPause className="mx-3 h-10 w-10 cursor-pointer" onClick={pause} />
        )}
        <BsSkipEndFill className="h-6 w-6 cursor-pointer" />
      </div>
      <div className="flex items-center justify-center">
        <span className="text-xs">
          {secondsToTimestamp(currentTime).substring(3)}
        </span>
        <RangeInput
          value={currentTime}
          step={1}
          min={0}
          max={currentTrack ? currentTrack.duration : 0}
          className="mx-2 -my-1.5 h-6 w-40 max-w-xl flex-grow accent-yt-200"
          onChange={(e) => props.onSeek(+e.target.value)}
        />
        <span className="text-xs">
          {currentTrack
            ? secondsToTimestamp(currentTrack.duration).substring(3)
            : "00:00"}
        </span>
      </div>
    </div>
  );
};

export default PlayerControls;
