import React from "react";
import { useGetSalonList } from "./hooks/useGetSalonList";
import SalonItem from "./SalonItem";
import LocationList from "./LocationList";

const PetSalonList = () => {
  const { salonList } = useGetSalonList();
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen h-fit">
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
