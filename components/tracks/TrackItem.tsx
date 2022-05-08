import React, { useEffect, useState } from "react";
import Image from "next/image";
import Track from "../../store/types/track";
import useActions from "../../hooks/useActions";
import Loader from "../ui/Loader";

interface TrackItemProps {
  id: string;
}
const TrackItem = (props: TrackItemProps) => {
  const { id } = props;

  const [track, setTrack] = useState<Track | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/audio/${id}/info`).then((res) =>
      res.json().then((data) => {
        if (data.statusCode === 410) {
          setError("410");
          return;
        }
        const { title, author, thumbnails, lengthSeconds, video_url } =
          data.videoDetails;
        const track: Track = {
          id,
          title,
          video_url,
          author: author.name,
          channel_url: `https://www.youtube.com/channel/${author.id}`,
          thumbnail: thumbnails[thumbnails.length - 1].url,
          duration: lengthSeconds,
        };
        setTrack(track);
      })
    );
  }, []);

  const { setCurrentTrack } = useActions();

  function handleClick() {
    setCurrentTrack(track);
  }

  if (error === "410")
    return (
      <li className="flex h-24 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200">
        <h1 className="text-white">NO ACCESS</h1>
      </li>
    );
  if (!track)
    return (
      <li className="flex h-24 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200">
        <Loader />
      </li>
    );
  return (
    <li
      className="flex h-28 gap-2 rounded border-yt-500 bg-yt-500 bg-opacity-10 p-2 text-yt-200 hover:cursor-pointer"
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
