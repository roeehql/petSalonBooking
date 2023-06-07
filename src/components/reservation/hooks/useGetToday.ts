import { useEffect, useState } from "react"

export const getToday = () => {
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = (date.getDate() + 1);
    if(month === 2 && day === 29){
        day = 1
        month = 3
    }
    if((month === 4 || month === 6 || month === 9 || month === 11) && day === 31){
      day = 1
      month =+ 1
    }
    if((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day === 32){
      day = 1
      month = month === 12 ? 1 : month + 1
    }
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
        if(month === 2 && day > 28){
          day = Math.ceil(day % 28)
          month = 3
        }
        if(day > 30){
            day = Math.ceil(day % 30)
            month = month === 12 ? 1 : month + 1
        }
        setMaxDay(`${date.getFullYear()}-${month < 10 ? "0"+ month : month}-${day < 10 ? "0"+day : day}`)
      };

      useEffect(()=>{getDay()})

    return {minDay, maxDay}
}