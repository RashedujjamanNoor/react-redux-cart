import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-700 w-screen h-16 flex justify-center items-center overflow-hidden">
      <div className="w-3/4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-white text-3xl">Shop.</h1>
        </div>

        <Link to="/cart">
          <div className="w-12 flex justify-center">
            <IoCartOutline className="text-4xl text-white w-12 " />{" "}
            <span className=" w-6 h-5 relative text-center rounded-full  font-bold text-yellow-400 right-2">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
