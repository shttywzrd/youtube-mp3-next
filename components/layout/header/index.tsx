import SearchBox from "./SearchBox";
import StartMenu from "./StartMenu";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="fixed z-20 flex h-14 w-screen justify-between bg-yt-800">
      <StartMenu />
      <div className="ml-6 mr-0 flex flex-grow justify-end py-2 xs:mr-6 sm:ml-12 sm:justify-center">
        <SearchBox />
      </div>
      <div className="mx-2 flex border-yt-500 px-2">
        <button className="group bg-yt-r flex items-center justify-center py-2 text-yt-200 sm:min-w-[7rem] sm:space-x-4">
          <h1 className="hidden text-yt-500 group-hover:text-yt-red-100 sm:block">
            LOG IN
          </h1>
          <CgProfile className="h-8 w-8 text-yt-500 group-hover:text-yt-red-100" />
        </button>
      </div>
    </header>
  );
};

export default Header;
