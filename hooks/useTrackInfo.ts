import useSWR, { Fetcher } from "swr";

const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export default function useTrackInfo(id: string) {
  const { data, error } = useSWR(`/api/audio/${id}/info`, fetcher);
  return {
    track: data,
    isLoading: !error && !data,
    isError: error,
  };
}
