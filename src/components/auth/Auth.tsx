import React, { useState } from "react";
import { useInput } from "hooks/useInput";
import { useHandleAuth } from "./hooks/useHandleAuth";
import Input from "components/atom/Input";
import Button from "components/atom/Button";
import { Small, TextP, TitleH } from "components/atom/Text";

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const { value: phoneNumber, handleChange: hadlePhonNumberChange } =
    useInput("");
  const { value: password, handleChange: hadlePasswordChange } = useInput("");
  const { value: userName, handleChange: hadleUserNameChange } = useInput("");
  const { handleSubmit } = useHandleAuth({
    data: { tel: phoneNumber, name: userName, password },
    isNewAccount: isNewUser,
  });

  return (
    <div className="flex flex-col justify-around items-center w-full min-h-full h-fit my-20">
      <TitleH text={isNewUser ? "회원가입" : "로그인"} plusStyle="pb-6" />
      <form
        className="flex flex-col justify-center items-center p-8 rounded border-2 border-gray-300 shadow"
        onSubmit={handleSubmit}
      >
        {isNewUser && (
          <TextP
            text={`✅예약확인을 위한 정보로 사용되니 정확한 정보를 입력해주세요.`}
            plusStyle="mb-8 text-center"
          />
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
          <Small
            text={phoneNumber.length > 11 ? "연락처를 확인해주세요." : ""}
          />
        )}
        <Input
          type={"password"}
          name={"password"}
          onChange={hadlePasswordChange}
          value={password}
          labelText={"비밀번호를 입력해주세요"}
        />
        {isNewUser && (
          <Small
            text={
              password.length > 0 && password.length < 8
                ? "비밀번호는 8자 이상으로 입력해주세요"
                : ""
            }
          />
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
    </div>
  );
};

export default Auth;
