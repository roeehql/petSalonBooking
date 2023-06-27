import { reservationApi } from "api/reservationApi"
import { useAppDispatch } from "store/hooks"
import { setToast } from "store/toastSlice"
import { ReservationState } from "types/ReservationTypes"

export const useCancelReservation = () => {
    const dispatch = useAppDispatch()
    
    const cancelReservation = async ({id, confirmData}:{id:string, confirmData:ReservationState}) => {
        const result = await reservationApi.cancelReservation({id,confirmData})
        if(result === 200){
            dispatch(setToast({type:"success", text:"취소 되었습니다."}))
        }else{
            dispatch(setToast({type:"error", text:"예약 취소에 실패했습니다. 다시 시도해주세요."}))
        }
    }

    return {cancelReservation}
}

