import { PlayerAction, PlayerActionTypes, PlayerState } from "../types/player";

const initialState: PlayerState = {
  paused: true,
  volume: 50,
  currentTime: 0,
  currentTrack: null,
};

export default function PlayerReducer(
  state = initialState,
  action: PlayerAction
): PlayerState {
  switch (action.type) {
    case PlayerActionTypes.PLAY:
      return { ...state, paused: false };
    case PlayerActionTypes.PAUSE:
      return { ...state, paused: true };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.payload,
        currentTime: 0,
      };
    default:
      return state;
  }
}
