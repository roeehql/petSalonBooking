import { useState } from "react";
import { reservationApi } from "api/reservationApi"
import { ReservationState } from "types/ReservationTypes";

export const useGetReservation = (tel:string) => {
    const [userReservationList, setUserReservationList] = useState<ReservationState[]>([])
    const [isSuccess, setIsSuccess] = useState(false);

    const getReservation = async () => {
      try{
        const result = await reservationApi.getReservation(tel);
        setUserReservationList(result);
        setIsSuccess(true)
      }catch(e){
        setIsSuccess(false)
      }
    }

    return {userReservationList,getReservation, isSuccess}
}