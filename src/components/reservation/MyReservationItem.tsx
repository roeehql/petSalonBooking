import React from "react";
import Button from "components/atom/Button";
import { TextP, TitleH, Small } from "components/atom/Text";
import { ReservationState } from "types/ReservationTypes";
import { useCancelReservation } from "./hooks/useCancelReservation";

const MyReservationItem = ({
  userReservation,
}: {
  userReservation: ReservationState;
}) => {
  const { cancelReservation } = useCancelReservation();

  const handleCancelReservation = () => {
    const confirmData = { ...userReservation };
    confirmData.cancel = true;
    cancelReservation({ id: userReservation.id, confirmData });
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 my-2 border-2 border-lime-300 rounded ">
      {userReservation.cancel ? (
        <TitleH text="취소된 예약입니다." />
      ) : (
        <>
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
          {userReservation.confirm ? (
            "예약이 확정되었습니다."
          ) : (
            <div>
              <Button
                type="button"
                text="예약 취소"
                onClick={handleCancelReservation}
              />
              <Small text="예약 취소는 매장의 사정에 따라 거부될 수 있으며 확정이 된 후 취소는 불가합니다." />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyReservationItem;
