import { TypedUseSelectorHook, useSelector } from "react-redux";
import { CombinedState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<CombinedState> =
  useSelector;
