import React from "react";
import Logo from "../../ui/Logo";
import useActions from "../../../hooks/useActions";
import { HiMenu } from "react-icons/hi";
import { useRouter } from "next/router";

const StartMenu = () => {
  const { toggleSidebar } = useActions();

  const router = useRouter();

  return (
    <div className="flex text-yt-500 sm:ml-2">
      <div className="p-4" onClick={toggleSidebar}>
        <HiMenu className="text-yt-secondary h-6 w-6 cursor-pointer hover:text-yt-red-200" />
      </div>
      <div
        className="p-[18px] pl-2 text-yt-200"
        onClick={() => {
          router.push(`/`);
        }}
      >
        <Logo className="text-yt-secondary h-[20px] w-[90px] cursor-pointer" />
      </div>
    </div>
  );
};

export default StartMenu;
