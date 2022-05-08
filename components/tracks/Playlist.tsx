import React from "react";
import TrackItem from "./TrackItem";

interface PlaylistProps {
  items: Array<string>;
}

const Playlist = (props: PlaylistProps) => {
  const { items } = props;
  return (
    <div className="">
      <ul className="mb-20 flex flex-col gap-2 pl-64 pb-6">
        {items.map((id) => (
          <TrackItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
