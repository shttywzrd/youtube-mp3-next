export interface SidebarState {
  isOpen: boolean;
}

export enum SidebarActionTypes {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  TOGGLE = "TOGGLE",
}

interface OpenAction {
  type: SidebarActionTypes.OPEN;
}

interface CloseAction {
  type: SidebarActionTypes.CLOSE;
}

interface ToggleAction {
  type: SidebarActionTypes.TOGGLE;
}

export type SidebarAction = OpenAction | CloseAction | ToggleAction;
