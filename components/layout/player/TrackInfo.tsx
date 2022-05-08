import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Image from "next/image";
import { HiDownload, HiHeart, HiOutlineHeart } from "react-icons/hi";

const TrackInfo = () => {
  const track = useTypedSelector((state) => state.player.currentTrack);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  function handleLike() {}

  function handleDownload() {
    if (track) {
      fetch(`${backendUrl}/audio/${track.id}/download`)
        .then((res) => res.blob())
        .then((blob) => URL.createObjectURL(blob))
        .then((url) => {
          const a = document.createElement("a");
          a.href = url;
          a.download = "name.mp3";
          a.click();
          URL.revokeObjectURL(url);
        });
    }
  }

  return track ? (
    <div className="col-end-4 hidden gap-2 xs:col-start-1 xs:flex xs:gap-5 sm:col-end-5 lg:gap-4">
      <div className=" hidden h-16 w-16 min-w-[64px] border-[1px] border-solid border-black xs:block">
        <Image
          src={track.thumbnail}
          alt="image"
          width={128}
          height={128}
          objectFit="cover"
        />
      </div>
      <div className="hidden overflow-hidden sm:block">
        <h1 className="translate-y-0 whitespace-nowrap transition-transform ease-linear hover:-translate-x-full hover:translate-y-0 hover:delay-[1s] hover:duration-[3s]">
          {track.title}
        </h1>
        <p className="text-xs">{track.author}</p>
      </div>
      <div className="mt-1.5 flex sm:items-center" onClick={handleLike}>
        {track.isLiked ? (
          <HiHeart className="h-6 w-6" />
        ) : (
          <HiOutlineHeart className="h-6 w-6" />
        )}
      </div>
      <div className="mt-1.5 flex sm:items-center" onClick={handleDownload}>
        <HiDownload className="h-6 w-6" />
      </div>
    </div>
  ) : null;
};

export default TrackInfo;
