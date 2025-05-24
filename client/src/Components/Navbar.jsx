import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  // Function for Logout
  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    location.reload();
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 items-center cursor-pointer"
      >
        <img
          className="w-16"
          src="https://cdn-icons-png.freepik.com/256/10947/10947801.png?ga=GA1.1.581657608.1739173084&semt=ais_hybrid"
          alt=""
        />
        <p className="text-2xl md:text-3xl">To Do</p>
      </div>
      <ul className="hidden md:flex items-start gap-20 font-medium">
        <NavLink to="/">
          <li className="pt-1 text-xl">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="pt-1 text-xl">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-indigo-700 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <button
            onClick={logout}
            className="text-red-600 cursor-pointer text-base max-sm:hidden md:block border-2 border-red-600 rounded-md p-2 bg-red-50"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-indigo-700 text-white px-8 py-3 cursor-pointer rounded-full font-medium hidden md:block "
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-9 md:hidden cursor-pointer"
          src="https://cdn-icons-png.freepik.com/256/10024/10024326.png?ga=GA1.1.1216306819.1739192753&semt=ais_hybrid"
          alt=""
        />

        {/*------------------------Mobile Menu------------------- */}

        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                className="w-16"
                src="https://cdn-icons-png.freepik.com/256/10947/10947801.png?ga=GA1.1.581657608.1739173084&semt=ais_hybrid"
                alt=""
              />
              <p className="text-2xl">To Do</p>
            </div>
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src="https://cdn-icons-png.freepik.com/256/594/594598.png?ga=GA1.1.581657608.1739173084&semt=ais_hybrid"
              alt=""
            />
          </div>
          <ul className="flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            {token ? (
              <p
                className="px-4 py-2 rounded inline-block cursor-pointer"
                onClick={logout}
              >
                LOGOUT
              </p>
            ) : (
              <NavLink onClick={() => setShowMenu(false)} to="/login">
                <p className="px-4 py-2 rounded inline-block">LOGIN</p>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
