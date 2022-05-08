import Playlist from "../../components/tracks/Playlist";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

interface SearchPageProps {
  tracks: Array<string>;
}

function SearchPage(props: SearchPageProps) {
  const [array, setArray] = useState<Array<string>>([]);

  useEffect(() => {
    setArray(props.tracks);
  }, [props]);

  return (
    <div className="pt-20">
      <Playlist items={array} />
    </div>
  );
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.query;

  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=25&q=${query}&type=video&videoCategoryId=10&videoDuration=short&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  const tracks: Array<string> = [];
  if (data) {
    for (let item of data.items) {
      tracks.push(item.id.videoId);
    }
  }
  return { props: { tracks } };
};
