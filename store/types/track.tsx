export default interface Track {
  id: string;
  title: string;
  video_url: string;
  author: string;
  channel_url: string;
  thumbnail: string;
  duration: number;
  isLiked?: boolean;
}
