import { ReservationInput, ReservationState } from "types/ReservationTypes";
import { axiosApi } from "./authApi";

export const reservationApi = {
    createReservation : async(data :ReservationInput)=> {
        const {status} = await axiosApi.post("/reservations",{
            data
        })
        return status;
    },
    getReservation : async (tel:string) => {
        const {data} = await axiosApi.get(`/reservations/${tel}`)
        return data.data
    },
    cancelReservation : async ({id, confirmData}:{id:string, confirmData:ReservationState}) => {
        const {status} = await axiosApi.put(`/reservations/${id}`,{
            confirmData
        })
        return status
    }
}