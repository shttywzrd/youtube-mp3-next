import Track from "../store/types/track";

const ytdl = require("ytdl-core");

export async function getInfo(id: string) {
  const data = await ytdl.getBasicInfo(id);
  const { title, author, thumbnails, lengthSeconds, video_url } =
    data.videoDetails;
  return {
    id,
    title,
    video_url,
    author: author.name,
    channel_url: `https://www.youtube.com/channel/${author.id}`,
    thumbnail: thumbnails[thumbnails.length - 1].url,
    duration: lengthSeconds,
  };
}

export function getAudioStream<ReadableStream>(id: string) {
  return ytdl(id, {
    quality: "highestaudio",
    filter: "audioonly",
  });
}
