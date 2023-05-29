import React from "react";
import Input from "../atom/Input";
import Button from "../atom/Button";
import { useInput } from "../auth/hooks/useInput";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { value: search, handleChange: handleSearchChange } = useInput("");

  return (
    <div className="fixed top-0 flex justify-evenly items-end w-full min-h-fit bg-slate-300">
      <h1 className="flex justify-center items-center w-12 h-12 p-4 m-4 rounded-full bg-green-600 text-white text-3xl font-bold cursor-pointer">
        P
      </h1>
      <div className="flex justify-center items-end min-h-fit mb-4">
        <span className="py-2 px-2 text-2xl text-green-800">
          <FiSearch />
        </span>
        <Input
          type={"text"}
          name={"search-bar"}
          onChange={handleSearchChange}
          value={search}
          labelText={""}
        />
        <Button type="button" text="검색" plusStyle={"ml-2"} />
      </div>
      <div className="mb-4">
        <Button
          type="button"
          text="로그인"
          plusStyle="w-24 font-semibold"
          onClick={() => navigate("/auth")}
        />
      </div>
    </div>
  );
};

export default Header;
