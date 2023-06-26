import React, { ReactNode } from "react";
import { FiHome, FiSearch, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 w-full h-fit bg-white border-t-2 border-t-lime-200">
      <ul className="flex justify-around items-center w-full h-fit">
        <Link to="/">
          <Li>
            <FiHome />
          </Li>
        </Link>
        <Li>
          <FiSearch />
        </Li>
        <Link to="/myReservation">
          <Li>
            <FiUser />
          </Li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;

export const Li = ({ children }: { children: ReactNode }) => {
  return (
    <li className="list-none flex justify-center items-center py-3 px-5 text-2xl cursor-pointer text-green-800 hover:bg-green-800 hover:text-white">
      {children}
    </li>
  );
};
