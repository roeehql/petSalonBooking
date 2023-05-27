import React, { ReactNode } from "react";
import { FiHome, FiSearch, FiUser } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 w-full h-fit bg-white border-t-2 border-t-lime-200">
      <ul className="flex justify-around items-center w-full h-fit">
        <Li>
          <FiHome />
        </Li>
        <Li>
          <FiSearch />
        </Li>
        <Li>
          <FiUser />
        </Li>
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
