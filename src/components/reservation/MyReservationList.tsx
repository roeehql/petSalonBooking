import React, { useEffect } from "react";
import { useGetReservation } from "./hooks/useGetReservation";
import { useAppSelector } from "store/hooks";
import { TitleH } from "components/atom/Text";
import Button from "components/atom/Button";
import MyReservationItem from "./MyReservationItem";

const MyReservationList = () => {
  const userInfo = useAppSelector((state) => state.userInfo.value);
  const { userReservationList, getReservation, isSuccess } = useGetReservation(
    userInfo.tel
  );

  const handleRetry = () => {
    getReservation();
  };

  useEffect(() => {
    getReservation();
  }, [userReservationList]);

  return (
    <div className="my-28 p-6 border-2 border-gray-300 rounded shadow">
      <h1 className="pb-6 text-3xl text-center">예약 확인</h1>
      {userReservationList.length === 0 && (
        <TitleH text="예약내역이 없습니다." />
      )}
      {isSuccess ? (
        userReservationList.map((userReservation) => (
          <MyReservationItem
            key={userReservation.id}
            userReservation={userReservation}
          />
        ))
      ) : (
        <Button type="button" text="내역 보기" onClick={handleRetry} />
      )}
    </div>
  );
};

export default MyReservationList;
