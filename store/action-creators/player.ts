import { PlayerAction, PlayerActionTypes } from "../types/player";
import Track from "../types/track";

export function play(): PlayerAction {
  return { type: PlayerActionTypes.PLAY };
}
export function pause(): PlayerAction {
  return { type: PlayerActionTypes.PAUSE };
}

export function setVolume(volume: number): PlayerAction {
  return { type: PlayerActionTypes.SET_VOLUME, payload: volume };
}

export function setCurrentTime(time: number): PlayerAction {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload: time };
}

export function setCurrentTrack(track: Track): PlayerAction {
  return { type: PlayerActionTypes.SET_CURRENT_TRACK, payload: track };
}
