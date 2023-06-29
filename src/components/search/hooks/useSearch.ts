import { useState } from "react";
import { SalonList } from "types/ListTypes";

export const useSearch = (salons:SalonList[]) => {
  const [resultList , setResultList] = useState<SalonList[]>([])

  const getSearchResult = (query:string) => {
    const normalizedQuery = query.toLowerCase();
    setResultList(salons.filter((salon)=>{
     return salon.name.toLowerCase().includes(normalizedQuery) || salon.address.toLowerCase().includes(normalizedQuery)}))
  }

  return {resultList, getSearchResult}
}
