import React from "react";
import { useGetReservation } from "./hooks/useGetReservation";
import { useAppSelector } from "store/hooks";
import { TitleH, TextP } from "components/atom/Text";
import Button from "components/atom/Button";

const MyReservationList = () => {
  const userInfo = useAppSelector((state) => state.userInfo.value);
  const { userReservationList, getReservation, isSuccess } = useGetReservation(
    userInfo.tel
  );

  const handleRetry = () => {
    getReservation();
  };

  return (
    <div className="my-28 p-6 border-2 border-gray-300 rounded shadow">
      <h1 className="pb-6 text-3xl text-center">예약 확인</h1>
      {userReservationList.length === 0 && (
        <TitleH text="예약내역이 없습니다." />
      )}
      {isSuccess ? (
        userReservationList.map((userReservation) => (
          <div
            key={userReservation.id}
            className="flex flex-col justify-center items-center p-5 my-2 border-2 border-lime-300 rounded "
          >
            <TitleH text={`매장명 : ${userReservation.shop}`} />
            <div className="flex flex-col justify-center items-center w-full p-4 my-2 rounded bg-gray-200">
              <TitleH text="예약 날짜 " />
              <TextP text={userReservation.date} />
              <TitleH text="예약 시간" />
              <TextP text={userReservation.time} />
            </div>
            <div className="flex flex-col justify-center items-center w-full p-4 my-2 border-2 border-gray-300 border-dotted rounded">
              <TitleH text="예약 정보" />
              <TextP text={"이름 : " + userReservation.petName} />
              <TextP text={"몸무게 : " + userReservation.petWeight + "kg"} />
              <TitleH text="추가 요청 사항" />
              <TextP text={userReservation.catCut ? "고양이 미용" : ""} />
              <TextP text={userReservation.sissorCut ? "가위컷 이용" : ""} />
              <TextP
                text={userReservation.pickUpService ? "픽업 서비스 이용" : ""}
              />
              <TitleH text="요청 메세지" />
              <TextP text={userReservation.requestMemo} />
            </div>
          </div>
        ))
      ) : (
        <Button type="button" text="내역 보기" onClick={handleRetry} />
      )}
    </div>
  );
};

export default MyReservationList;
