import React, { useState } from "react";
import { useAppSelector } from "store/hooks";
import { useInput } from "hooks/useInput";
import Button from "components/atom/Button";
import Input from "components/atom/Input";
import { useGetToday } from "./hooks/useGetToday";
import { useHandleReservation } from "./hooks/useHandleReservation";
import { OptionBox } from "./OptionBox";
import Toast from "components/atom/Toast";

const Reservation = () => {
  const salonInfo = useAppSelector((state) => state.salonInfo.value);
  const userInfo = useAppSelector((state) => state.userInfo.value);
  const timeList = ["9:00", "11:00", "14:00", "16:00"];
  const { minDay, maxDay } = useGetToday();
  const { value: beautyDay, handleChange } = useInput(minDay);
  const { value: petName, handleChange: handlePetNameChange } = useInput("");
  const { value: petWeight, handleChange: handlePetWeightChange } =
    useInput("");
  const { value: option, handleTextareaChange } = useInput("");
  const [beautyTime, setBeautyTime] = useState("");
  const [catCut, setCatCut] = useState(false);
  const [pickUpService, setPickupService] = useState(false);
  const [sissorCut, setSissorCut] = useState(false);

  const { handleSubmit, resultMessage, isSuccess } = useHandleReservation({
    name: userInfo.name,
    tel: userInfo.tel,
    shop: salonInfo.name,
    petName,
    petWeight,
    date: beautyDay,
    time: beautyTime,
    requestMemo: option,
    sissorCut,
    catCut,
    pickUpService,
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-28 p-6 border-2 border-gray-300 rounded shadow"
      >
        <h1 className="pb-6 text-3xl text-center">예약페이지</h1>
        <h1 className="pl-4 text-base tracking-tight">
          매장명 : {salonInfo.name}
        </h1>
        <div className="p-4 my-4 border-2 border-dotted border-gray-300">
          <p className="text-base tracking-tight">위치 : {salonInfo.address}</p>
          <p className="text-base tracking-tight">전화 : {salonInfo.tel}</p>
          {salonInfo.hasCctv && (
            <p className="text-base tracking-tight">
              CCTV로 미용과정을 보실 수 있습니다.
            </p>
          )}
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="beauty_date" className="pb-3 text-2xl text-center">
            미용날짜
          </label>
          <input
            type="date"
            id="beauty_date"
            name="beauty_date"
            className="p-4 rounded border-2 border-gray-300 text-xl"
            value={beautyDay}
            onChange={handleChange}
            min={minDay}
            max={maxDay}
          />
        </div>
        <h4 className="py-3 text-2xl text-center">시간 선택</h4>
        <div className="grid grid-cols-2">
          {timeList.map((time) => (
            <Button
              key={time}
              type="button"
              text={time}
              plusStyle={`m-2 text-xl ${beautyTime === time && "bg-red-400"}`}
              onClick={() => setBeautyTime(time)}
            />
          ))}
        </div>
        <Input
          type="text"
          name="pet_name"
          onChange={handlePetNameChange}
          value={petName}
          labelText="펫 이름"
        />
        <Input
          type="text"
          name="pet_name"
          onChange={handlePetWeightChange}
          value={petWeight}
          labelText="펫 몸무게 (kg)"
        />
        <div className="flex flex-col justify-center items-center my-6">
          <h3 className="py-3 text-2xl text-center">추가 서비스 이용 여부</h3>
          <small className="h-5 text-xs text-red-600">
            서비스 이용에 따라 비용의 증가가 발생할 수 있습니다.
          </small>
          {salonInfo.canSissorCut && (
            <OptionBox
              optionTitle="가위컷 여부"
              onUseClick={() => setSissorCut(true)}
              onUnuseClick={() => setSissorCut(false)}
              optionValue={sissorCut}
            />
          )}
          {salonInfo.canCatCut && (
            <OptionBox
              optionTitle="고양이 미용 여부"
              onUseClick={() => setCatCut(true)}
              onUnuseClick={() => setCatCut(false)}
              optionValue={catCut}
            />
          )}
          {salonInfo.hasPickupService && (
            <OptionBox
              optionTitle="픽업 서비스 이용 여부"
              onUseClick={() => setPickupService(true)}
              onUnuseClick={() => setPickupService(false)}
              optionValue={pickUpService}
            />
          )}
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="option_request" className="pb-3 text-2xl text-center">
            특이사항
          </label>
          <textarea
            id="option_request"
            name="option_request"
            className=" resize-none p-4 outline-none border-2 border-gray-300 text-base"
            rows={5}
            cols={30}
            onChange={handleTextareaChange}
            placeholder="요청사항이나 특이사항을 알려주세요!"
            value={option}
          />
        </div>
        <Button
          type="submit"
          text="예약하기"
          plusStyle={`w-full my-5 text-2xl`}
        />
      </form>
      <Toast isSuccess={isSuccess} title={resultMessage} />
    </>
  );
};

export default Reservation;
