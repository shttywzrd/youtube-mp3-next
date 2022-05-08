import { createStore, Store } from "redux";
import { rootReducer, CombinedState } from "./reducers";
import { Context, createWrapper } from "next-redux-wrapper";

const makeStore = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<Store<CombinedState>>(makeStore);
