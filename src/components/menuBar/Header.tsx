import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "hooks/useInput";
import { useCheckUser } from "hooks/useCheckUser";
import { FiSearch } from "react-icons/fi";
import Input from "components/atom/Input";
import Button from "components/atom/Button";
import { useAppDispatch } from "store/hooks";
import { handleToken } from "util/handleToken";
import { removeUserInfo } from "store/userInfoSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { value: search, handleChange: handleSearchChange } = useInput("");
  const { hasToken } = useCheckUser();

  const handleLogout = () => {
    handleToken.clearToken();
    dispatch(removeUserInfo());
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 flex justify-evenly items-end w-full min-h-fit bg-slate-300 z-20">
      <Link to="/">
        <h1 className="flex justify-center items-center w-12 h-12 p-4 m-4 rounded-full bg-green-600 text-white text-3xl font-bold cursor-pointer">
          P
        </h1>
      </Link>
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
        {hasToken ? (
          <Button
            type="button"
            text="로그아웃"
            plusStyle="w-24 font-semibold"
            onClick={handleLogout}
          />
        ) : (
          <Button
            type="button"
            text="로그인"
            plusStyle="w-24 font-semibold"
            onClick={() => navigate("/auth")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
