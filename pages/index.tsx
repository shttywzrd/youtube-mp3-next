import Playlist from "../components/tracks/Playlist";
import { GetStaticProps } from "next";

interface HomePageProps {
  tracks: Array<string>;
}

function HomePage(props: HomePageProps) {
  return (
    <div className="pt-20">
      {props.tracks ? <Playlist items={props.tracks} /> : null}
    </div>
  );
}

export default HomePage;

async function fetchVideo() {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&maxResults=10&regionCode=UA&videoCategoryId=10&key=${process.env.YOUTUBE_API_KEY}`
  );
  return await res.json();
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tracks: Array<string> = [];
  const data = await fetchVideo();
  if (data) {
    for (let item of data.items) {
      tracks.push(item.id);
    }
  }
  return { props: { tracks } };
};
