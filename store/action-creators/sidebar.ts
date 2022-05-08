import { SidebarAction, SidebarActionTypes } from "../types/sidebar";

export const openSidebar = (): SidebarAction => {
  return { type: SidebarActionTypes.OPEN };
};
export const closeSidebar = (): SidebarAction => {
  return { type: SidebarActionTypes.CLOSE };
};
export const toggleSidebar = (): SidebarAction => {
  return { type: SidebarActionTypes.TOGGLE };
};
