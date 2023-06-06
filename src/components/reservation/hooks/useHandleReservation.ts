import {FormEvent, useState} from "react"
import { useNavigate } from "react-router-dom"
import { ReservationInput } from "types/ReservationTypes";
import { reservationApi } from "api/reservationApi";

export const useHandleReservation = (data: ReservationInput) => {
    const [resultMessage, setResultMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            console.log(data)
            const result = await reservationApi.createReservation(data);
            if(result === 200)
            setResultMessage("예약이 완료되었습니다.")
            setIsSuccess(true)
            navigate("/myReservation")
        }catch(e){
            setIsSuccess(false)
            setResultMessage("죄송합니다. 다시 시도해주세요.")
        }
    }

    return { handleSubmit, resultMessage , isSuccess}
}