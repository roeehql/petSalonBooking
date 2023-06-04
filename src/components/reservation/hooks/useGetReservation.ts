import { useEffect, useState } from "react";
import { reservationApi } from "api/reservationApi"
import { ReservationState } from "types/ReservationTypes";

export const useGetReservation = (tel:string) => {
    const [userReservationList, setUserReservationList] = useState<ReservationState[]>([])

    const getReservation = async () => { 
        const result = await reservationApi.getReservation(tel);
        setUserReservationList(result);
    }

    useEffect(() => {
      getReservation();
    }, [])

    return {userReservationList}
}