import React, { useState, useEffect } from "react";
import { getListApi } from "../../api/getSalonListApi";
import { SalonList } from "../../types/ListTypes";
import SalonItem from "./SalonItem";
import LocationList from "./LocationList";

const PetSalonList = () => {
  const [salonList, setSalonList] = useState<SalonList[]>([]);
  const getSalonList = async () => {
    const response = await getListApi;
    setSalonList(response.data);
  };

  useEffect(() => {
    getSalonList();
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-fit">
      <LocationList />
      <ul className=" grid grid-cols-3">
        {salonList.slice(0, 20).map((salon) => (
          <SalonItem key={salon.id} item={salon} />
        ))}
      </ul>
    </div>
  );
};

export default PetSalonList;
