import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { removeUserInfo } from "store/userInfoSlice";
import { setToast } from "store/toastSlice";
import { useCheckUser } from "hooks/useCheckUser";
import { handleToken } from "util/handleToken";
import Button from "components/atom/Button";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { hasToken } = useCheckUser();

  const handleLogout = () => {
    handleToken.clearToken();
    dispatch(removeUserInfo());
    dispatch(setToast({ type: "info", text: "로그아웃 되었습니다." }));
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 flex justify-between items-end w-full min-h-fit bg-slate-300 z-20">
      <Link to="/">
        <h1 className="flex justify-center items-center w-12 h-12 p-4 m-4 rounded-full bg-green-600 text-white text-3xl font-bold cursor-pointer">
          P
        </h1>
      </Link>
      <div className="mb-4 px-4">
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
