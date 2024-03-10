import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-between px-60 bg-slate-100 py-4 items-center">
      <Link
        className=" text-3xl items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"
        to="/home"
      >
        C
      </Link>
      <div className="flex gap-6">
        <NavLink to="/home">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "black" : "transparent",
                color: isActive ? "white" : "black",
              }}
            >
              Home
            </span>
          )}
        </NavLink>

        <NavLink to="/products">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "black" : "transparent",
                color: isActive ? "white" : "black",
              }}
            >
              Products
            </span>
          )}
        </NavLink>
        <NavLink to="/card">
          {({ isActive }) => (
            <span
              className="px-3 py-2 rounded-lg"
              style={{
                backgroundColor: isActive ? "black" : "transparent",
                color: isActive ? "white" : "black",
              }}
            >
              Card
            </span>
          )}
        </NavLink>
      </div>
      <Link to="/card">
        <div className="indicator">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
          </svg>
          <span className="badge badge-sm badge-primary indicator-item">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
