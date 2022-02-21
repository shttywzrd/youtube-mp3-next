import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Player from "./Player";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />

      <Sidebar />
      {children}
      <Player />
    </div>
  );
};

export default Layout;
