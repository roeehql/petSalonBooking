import { useState, useEffect } from "react";
import { getListApi } from "../../../api/getSalonListApi";
import { SalonList } from "../../../types/ListTypes";


export const useGetSalonList = () => {
    const [salonList, setSalonList] = useState<SalonList[]>([]);
    const getSalonList = async () => {
      const response = await getListApi;
      setSalonList(response.data);
    };
  
    useEffect(() => {
      getSalonList();
    });

    return {salonList}
}