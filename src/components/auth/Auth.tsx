import React, { useState } from "react";
import { useInput } from "hooks/useInput";
import { useHandleAuth } from "./hooks/useHandleAuth";
import Input from "components/atom/Input";
import Button from "components/atom/Button";
import Toast from "components/atom/Toast";

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { value: phoneNumber, handleChange: hadlePhonNumberChange } =
    useInput("");
  const { value: password, handleChange: hadlePasswordChange } = useInput("");
  const { value: userName, handleChange: hadleUserNameChange } = useInput("");
  const { handleSubmit, resultMessage, showToast } = useHandleAuth({
    data: { tel: phoneNumber, name: userName, password },
    isNewAccount: isNewUser,
  });

  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="p-6 text-2xl font-semibold text-green-950">
        {isNewUser ? "회원가입" : "로그인"}
      </h1>
      <form
        className="flex flex-col justify-center items-center p-8 rounded border-2 border-gray-300 shadow"
        onSubmit={handleSubmit}
      >
        {isNewUser && (
          <h4 className="mb-8 text-center tracking-tighter text-green-950">
            ✅예약확인을 위한 정보로 사용되니 <br />
            정확한 정보를 입력해주세요.
          </h4>
        )}
        {isNewUser && (
          <Input
            type={"text"}
            name={"user-name"}
            onChange={hadleUserNameChange}
            value={userName}
            labelText={"보호자 분의 이름을 입력해주세요"}
          />
        )}
        <Input
          type={"text"}
          name={"phone-number"}
          onChange={hadlePhonNumberChange}
          value={phoneNumber}
          labelText={"연락처를 입력해주세요"}
        />
        {isNewUser && (
          <small className="h-5 text-xs text-red-600">
            {phoneNumber.length > 11 && "연락처를 확인해주세요."}
          </small>
        )}
        <Input
          type={"password"}
          name={"password"}
          onChange={hadlePasswordChange}
          value={password}
          labelText={"비밀번호를 입력해주세요"}
        />
        {isNewUser && (
          <small className="h-5 text-xs text-red-600">
            {password.length > 0 &&
              password.length < 8 &&
              "비밀번호는 8자 이상으로 입력해주세요"}
          </small>
        )}
        <Button
          type="submit"
          text={isNewUser ? "회원가입" : "로그인"}
          plusStyle="mt-4"
        />
        <p
          className="mt-8 border-b-2 border-b-white text-gray-400 cursor-pointer hover:text-green-800 hover:border-b-gray-400"
          onClick={() => setIsNewUser(!isNewUser)}
        >
          {isNewUser ? "이미 계정이 있습니다." : "아직 회원이 아닙니다."}
        </p>
      </form>
      {showToast && (
        <Toast
          isSuccess={
            resultMessage === "죄송합니다. 다시 시도해주세요." ? false : true
          }
          title={resultMessage}
        />
      )}
    </div>
  );
};

export default Auth;
