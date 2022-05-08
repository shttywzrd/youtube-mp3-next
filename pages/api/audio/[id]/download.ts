import { NextApiRequest, NextApiResponse } from "next";
import { getAudioStream } from "../../../../lib/ytdl";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: number; message: string }>
) {
  const { id } = req.query;
  const data = getAudioStream(id);
  console.log(data);
  res.status(200).json(data);
}
