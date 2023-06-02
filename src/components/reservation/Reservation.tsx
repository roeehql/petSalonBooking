import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Button from "../atom/Button";
import { useGetToday } from "./util/useGetToday";
import { useInput } from "../../hooks/useInput";

const Reservation = () => {
  const salonInfo = useAppSelector((state) => state.salonInfo.value);
  const timeList = ["9:00", "11:00", "14:00", "16:00"];
  const { minDay, maxDay } = useGetToday();
  const { value: beautyDay, handleChange } = useInput(minDay);
  const { value: option, handleTextareaChange } = useInput("");
  const [beautyTime, setBeautyTime] = useState("");

  return (
    <form className="my-28 p-6 border-2 border-gray-300 rounded shadow">
      <h1 className="pb-6 text-3xl text-center">예약페이지</h1>
      <h1 className="pl-4 text-base tracking-tight">{salonInfo.name}</h1>
      <div className="p-4 my-4 border-2 border-dotted border-gray-300">
        <p className="text-base tracking-tight">{salonInfo.address}</p>
        <p className="text-base tracking-tight">{salonInfo.tel}</p>
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
        >
          {option}
        </textarea>
      </div>
      <Button
        type="submit"
        text="예약하기"
        plusStyle={`w-full my-5 text-2xl`}
      />
    </form>
  );
};

export default Reservation;
