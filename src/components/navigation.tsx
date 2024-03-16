import { PiShoppingCartThin } from "react-icons/pi";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="border-b border-gray-300">
        <div className="flex flex-row justify-between items-center p-2">
          <div className="flex items-center">
            {/*cart */}
            <div className="text-2xl border-r border-black px-4">
              <Link to="/cart">
                <PiShoppingCartThin />
              </Link>
            </div>
            {/* signIn/logIn */}
            <Link to="sign-in">
              <div className="flex items-center gap-4 border border-gray-500 ml-2 rounded-md p-2">
                <div className="text-xs">ثبت نام | ورود</div>
                <BsBoxArrowInLeft />
              </div>
            </Link>
          </div>
          <div className="flex justify-end items-center">
            {/* search bar */}
            <div className="flex flex-row w-3/5 h-12 justify-end items-center bg-gray-300 p-2 rounded-lg ">
              <input
                type="text"
                placeholder="جستجو"
                className="p-6 bg-transparent w-full outline-none border-none focus:ring-0 placeholder:font-serif placeholder:text-gray-500 placeholder:text-right"
              />
              <CiSearch />
            </div>
            {/* logo */}
            <Link to="/" className="w-[10%]">
              <img src="./images/logo.png" alt="LOGO" />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
