import {
  SidebarAction,
  SidebarActionTypes,
  SidebarState,
} from "../types/sidebar";

const initialState: SidebarState = {
  isOpen: false,
};

export default function SidebarReducer(
  state: SidebarState = initialState,
  action: SidebarAction
): SidebarState {
  switch (action.type) {
    case SidebarActionTypes.OPEN:
      return { ...state, isOpen: true };
    case SidebarActionTypes.CLOSE:
      return { ...state, isOpen: false };
    case SidebarActionTypes.TOGGLE:
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}
