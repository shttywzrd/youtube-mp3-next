import Track from "./track";

export interface PlayerState {
  paused: boolean;
  currentTrack: Track | null;
  volume: number;
  currentTime: number;
}

export enum PlayerActionTypes {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  SET_VOLUME = "SET_VOLUME",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_CURRENT_TRACK = "SET_CURRENT_TRACK",
}

interface PlayAction {
  type: PlayerActionTypes.PLAY;
}

interface PauseAction {
  type: PlayerActionTypes.PAUSE;
}

interface SetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

interface SetCurrentTrackAction {
  type: PlayerActionTypes.SET_CURRENT_TRACK;
  payload: Track | null;
}

export type PlayerAction =
  | PlayAction
  | PauseAction
  | SetVolumeAction
  | SetCurrentTimeAction
  | SetCurrentTrackAction;
