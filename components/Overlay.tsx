import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import clsx from "clsx";
import useActions from "../hooks/useActions";

const Overlay = () => {
  const sidebarOpen = useTypedSelector((state) => state.sidebar.isOpen);
  const { closeSidebar } = useActions();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    if (sidebarOpen) {
      setVisible(true);
      return;
    }
    const timeout = setTimeout(() => {
      setVisible(!isVisible);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [sidebarOpen]);

  return (
    <div
      className={clsx(
        "fixed top-0 z-20 h-screen w-screen bg-black opacity-0",
        "transition-opacity duration-300",
        sidebarOpen && "opacity-30",
        isVisible ? "visible" : "invisible"
      )}
      onClick={closeSidebar}
    />
  );
};

export default Overlay;
