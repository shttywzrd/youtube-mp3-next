import React, { useEffect, useState } from "react";
import TrackInfo from "./TrackInfo";
import PlayerControls from "./PlayerControls";
import VolumeControls from "./VolumeControls";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import clsx from "clsx";
import useActions from "../../../hooks/useActions";

interface AudioPlayer {
  audioElement: HTMLAudioElement;
  audioCtx: AudioContext;
  audioSource?: MediaElementAudioSourceNode;
  gainNode?: GainNode;
}

const Player = () => {
  const volume = useTypedSelector((state) => state.player.volume);
  const isPaused = useTypedSelector((state) => state.player.paused);
  const currentTrack = useTypedSelector((state) => state.player.currentTrack);

  const { setCurrentTime, play } = useActions();

  const [player, setPlayer] = useState<AudioPlayer>();

  useEffect(() => {
    const audioElement = new Audio();
    const audioCtx = new AudioContext();
    const gainNode = audioCtx.createGain();
    const audioSource = audioCtx.createMediaElementSource(audioElement);
    const audioAnalyser = audioCtx.createAnalyser();
    audioElement.crossOrigin = "anonymous";
    audioElement.ontimeupdate = () => {
      setCurrentTime(audioElement.currentTime);
    };
    audioSource.connect(gainNode);
    gainNode.connect(audioAnalyser);
    audioAnalyser.connect(audioCtx.destination);
    setPlayer({
      audioElement,
      audioCtx,
      audioSource,
      gainNode,
    });
  }, []);

  useEffect(() => {
    if (player) {
      isPaused ? player.audioElement.pause() : player.audioElement.play();
    }
  }, [isPaused]);

  useEffect(() => {
    if (player?.gainNode) player.gainNode.gain.value = volume / 100;
  }, [volume]);

  useEffect(() => {
    if (currentTrack === null) return;

    if (player) {
      player.audioElement.src = `/api/audio/${currentTrack.id}/download`;
      if (isPaused) play();
      else player.audioElement.play();
    }
  }, [currentTrack]);

  return player ? (
    <div
      className={clsx(
        !currentTrack && "translate-y-20",
        "lg:w- fixed bottom-0 z-20 grid h-20 w-screen grid-cols-12 items-center gap-2 border-t border-yt-600 bg-yt-800 px-2 text-yt-200 transition-transform duration-500 xs:gap-4 sm:px-4"
      )}
    >
      <TrackInfo />
      <PlayerControls
        onSeek={(time) => (player.audioElement.currentTime = time)}
      />
      <VolumeControls />
    </div>
  ) : null;
};

export default Player;
