import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../shared/assets/header/logo.svg";
import {
  Clapperboard,
  Film,
  Heart,
  Search,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <header className="relative dark:bg-[#000000]">
      <nav className="container h-20 flex items-center gap-[152px]">
        <div className="flex justify-between items-center w-[65%] dark:text-[#C61F1F]">
          <div>
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <ul className="flex max-[1100px]:hidden">
            <li className="px-4.5">
              <NavLink
                to={"/"}
                className={"flex flex-col justify-center items-center gap-2"}
              >
                <Film />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="px-4.5">
              <NavLink
                to={"/movie"}
                className={"flex flex-col justify-center items-center gap-2"}
              >
                <Clapperboard />
                <span>Movie</span>
              </NavLink>
            </li>
            <li className="px-4.5">
              <NavLink
                to={"/"}
                className={"flex flex-col justify-center items-center gap-2"}
              >
                <Search />
                <span>Search</span>
              </NavLink>
            </li>

            <li className="px-4.5">
              <NavLink
                to={"/"}
                className={"flex flex-col justify-center items-center gap-2"}
              >
                <Heart />
                <span>Favorite</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-[1100px]:hidden">
          <div className="relative inline-block px-4 py-2">
            <select className="appearance-none bg-transparent pr-6 pl-2 py-1 text-sm font-medium text-gray-800 focus:outline-none dark:text-[#C61F1F]">
              <option value="eng" selected>
                eng
              </option>
              <option value="uzb">uzb</option>
              <option value="ru">ru</option>
            </select>
            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
              ▼
            </div>
          </div>

          <div>
            <button className="py-[14px] px-[66px] rounded-[12px] bg-[#C61F1F] text-[white] cursor-pointer hover:opacity-85">
              Login
            </button>
          </div>
        </div>

        <Menu className="min-[1100px]:hidden min-[1100px]: ml-auto" />
      </nav>
      <div
        className="absolute top-7 right-72 cursor-pointer select-none"
        onClick={handleMode}
      >
        {!darkMode ? <Moon className="text-[#C61F1F]"/> : <Sun className="text-[#111111]" />}
      </div>
    </header>
  );
};

export default memo(Header);
