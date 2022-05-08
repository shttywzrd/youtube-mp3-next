import React from "react";
import Index from "./header";
import Sidebar from "./sidebar/Sidebar";
import Player from "./player";
import Overlay from "../Overlay";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Index />
      {children}
      <Player />
      <Overlay />
      <Sidebar />
    </div>
  );
};

export default Layout;
