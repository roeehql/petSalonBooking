import { useEffect, useState } from "react";
import { reservationApi } from "api/reservationApi"
import { ReservationState } from "types/ReservationTypes";

export const useGetReservation = (tel:string) => {
    const [userReservationList, setUserReservationList] = useState<ReservationState[]>([])
    const [isSuccess, setIsSuccess] = useState(false);
    const [resultMessage, setResultMessage] = useState("");

    const getReservation = async () => { 
      try{
        const result = await reservationApi.getReservation(tel);
        if(result.length > 0){
          setUserReservationList(result);
          setIsSuccess(true);
        }else{
          setIsSuccess(true);
          setResultMessage("예약내역이 없습니다.")
        }
      }catch(error){
        setIsSuccess(false);
        setResultMessage("죄송합니다. 다시 시도해주세요.")
      }
    }

    useEffect(() => {
      getReservation();
    }, [])

    return {userReservationList, isSuccess, resultMessage}
}