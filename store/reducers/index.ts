import { combineReducers } from "redux";
import SidebarReducer from "./SidebarReducer";
import { HYDRATE } from "next-redux-wrapper";
import PlayerReducer from "./PlayerReducer";

const combinedReducer = combineReducers({
  sidebar: SidebarReducer,
  player: PlayerReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export type CombinedState = ReturnType<typeof combinedReducer>;
