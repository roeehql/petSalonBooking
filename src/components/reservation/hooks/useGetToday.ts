import { useEffect, useState } from "react"

export const getToday = () => {
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = (date.getDate());
    return `${date.getFullYear()}-${month < 10 ? "0"+ month : month}-${day < 10 ? "0"+day : day}`;
  };

export const useGetToday = () => {
    const [minDay, setMinDay] = useState(getToday())
    const [maxDay, setMaxDay] = useState(getToday())

    const getDay = () => {
        setMinDay(getToday())
        let date = new Date();
        let month = (date.getMonth() + 1);
        let day = (date.getDate() + 14);
        if(day > 30){
            day = day % 30
            month = month === 12 ? 1 : month + 1
        }
        setMaxDay(`${date.getFullYear()}-${month < 10 ? "0"+ month : month}-${day < 10 ? "0"+day : day}`)
      };

      useEffect(()=>{getDay()})

    return {minDay, maxDay}
}