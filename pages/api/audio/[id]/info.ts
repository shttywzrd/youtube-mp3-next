import { NextApiRequest, NextApiResponse } from "next";
import { getInfo } from "../../../../lib/ytdl";
import Track from "../../../../store/types/track";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Track | { status: number; message: string }>
) {
  const { id } = req.query;
  if (typeof id === "string") {
    getInfo(id).then((track) => res.status(200).json(track));
  }
}
