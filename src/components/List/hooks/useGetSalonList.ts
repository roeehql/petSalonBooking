import { useState, useEffect } from "react";
import { getListApi, salonApi } from "api/getSalonListApi";
import { SalonList, Salons } from "types/ListTypes";


export const useGetSalonList = () => {
    const [salonList, setSalonList] = useState<SalonList[]>([]);
    const [salons,setSalons] = useState<SalonList[]>([]);
    
    const getSalonList = async () => {
      const response = await getListApi;
      setSalonList(response.data);
    };


    const removePassword = (data:Salons[]) => {
      return data.map((item)=>{
        delete item.password
        return item
      })
    }

    const getSalons = async () => {
      const {data} = await salonApi.getSalons()
      setSalons(removePassword(data))
    }
  
    useEffect(() => {
      getSalonList();
      getSalons();
    });

    return {salonList , salons}
}