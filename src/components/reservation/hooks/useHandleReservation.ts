import {FormEvent} from "react"
import { useNavigate } from "react-router-dom"
import { ReservationInput } from "types/ReservationTypes";
import { reservationApi } from "api/reservationApi";
import { useAppDispatch } from "store/hooks";
import { setToast } from "store/toastSlice";

export const useHandleReservation = (data: ReservationInput) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            const result = await reservationApi.createReservation(data);
            if(result === 200)
            dispatch(setToast({type:"success", text:"예약이 완료되었습니다."}))
            navigate("/myReservation")
        }catch(e){
            dispatch(setToast({type:"error", text:"죄송합니다. 다시 시도해주세요."}))
        }
    }

    return { handleSubmit}
}