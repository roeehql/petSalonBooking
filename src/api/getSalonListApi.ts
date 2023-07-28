import axios from "axios";
import { axiosApi } from "./authApi";

export const getListApi = axios({
    method: 'get',
    url: 'https://ec995b7d-a344-49e4-b84e-0a7ed19a8bd1.mock.pstmn.io/petSalon'
})

export const salonApi = {
    getSalons : async()=>{
        const {data} = await axiosApi.get("/salons/getSalon")
        return data
    }
}