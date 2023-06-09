import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { setSalonInfo } from "store/salonInfoSlice";
import { handleToken } from "util/handleToken";
import { SalonList } from "types/ListTypes";
import { setToast } from "store/toastSlice";
import { TextP, TitleH } from "components/atom/Text";

const SalonItem = ({ item }: { item: SalonList }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (handleToken.getToken() === "empty") {
      dispatch(
        setToast({ type: "warning", text: "로그인 후 이용하실 수 있습니다." })
      );
    } else {
      dispatch(setSalonInfo(item));
      navigate(`/list/${item.name}`);
    }
  };

  return (
    <li
      onClick={handleClick}
      className="list-none flex flex-col justify-between w-48 m-4 rounded-2xl border-2 border-green-600 shadow cursor-pointer"
    >
      <TitleH text={item.name} plusStyle="w-full pt-4 px-4 mb-2" />
      <TextP text={item.address} plusStyle="pl-4" />
      <TextP text={item.tel} plusStyle="pl-4" />
      <div>
        {item.canSissorCut && (
          <TextP text="#가위컷" plusStyle="pl-4 text-gray-600" />
        )}
        {item.canCatCut && (
          <TextP text="#고양이미용" plusStyle="pl-4 text-gray-600" />
        )}
        {item.hasCctv && (
          <TextP text="#CCTV확인가능" plusStyle="pl-4 text-gray-600" />
        )}
        {item.hasPickupService && (
          <TextP text="#픽업서비스" plusStyle="pl-4 text-gray-600" />
        )}
      </div>
      <TextP
        text="예약하기"
        plusStyle="w-full p-4 mt-3 rounded-b-xl bg-green-900 text-right text-white"
      />
    </li>
  );
};

export default SalonItem;
