import React from "react";
import Image from "next/image";
import useActions from "../../hooks/useActions";
import Loader from "../ui/Loader";
import clsx from "clsx";
import useTrackInfo from "../../hooks/useTrackInfo";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface TrackItemProps {
  id: string;
}
const TrackItem = (props: TrackItemProps) => {
  const { id } = props;
  const { track, isLoading, isError } = useTrackInfo(id);
  const { setCurrentTrack } = useActions();

  const currentTrack = useTypedSelector((state) => state.player.currentTrack);

  function handleClick() {
    if (track) setCurrentTrack(track);
  }

  if (isError)
    return (
      <li className="flex h-24 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200">
        <h1 className="text-white">{isError}</h1>
      </li>
    );
  if (isLoading)
    return (
      <li className="flex h-24 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200">
        <Loader />
      </li>
    );
  return (
    <li
      className={clsx(
        "flex h-28 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200 hover:cursor-pointer",
        currentTrack === track && "bg-white"
      )}
      onClick={handleClick}
    >
      <div className="z-10 w-24">
        <Image
          src={track.thumbnail}
          width={480}
          height={480}
          objectFit={"cover"}
        />
      </div>
      <div>
        <h1>{track.title}</h1>
        <h2>{track.author}</h2>
      </div>
    </li>
  );
};

export default TrackItem;
