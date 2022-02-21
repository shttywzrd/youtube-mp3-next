import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import Logo from "../icons/Logo";
import SearchBox from "../ui/SearchBox";

const Header = () => {
  return (
    <header className="flex bg-yt-800 h-14 justify-between fixed w-screen">
      <div className="flex text-yt-500 sm:ml-2">
        <div className="p-4">
          <MenuIcon />
        </div>
        <div className="p-[18px] pl-2 text-yt-200">
          <Logo />
        </div>
      </div>

      <div className="py-2 ml-12 flex flex-row ">
        <SearchBox />
        <button className="flex justify-center w-16 p-2 bg-yt-700 text-yt-200 group">
          <SearchIcon />
        </button>
      </div>

      <ul></ul>
    </header>
  );
};

export default Header;
