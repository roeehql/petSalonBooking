import React, { useEffect, useState } from "react";
import { useGetSalonList } from "./hooks/useGetSalonList";
import SalonItem from "./SalonItem";
import LocationList from "./LocationList";
import { SalonList } from "types/ListTypes";
import { TitleH } from "components/atom/Text";

const PetSalonList = () => {
  const [locationCode, setLocationCode] = useState(0);
  const { salonList, salons, getSalons } = useGetSalonList();
  const [selectedList, setSelectedList] = useState<SalonList[]>([]);

  const displaySalonList = () => {
    const selectedSalons = salonList.filter(
      (salon) => parseInt(salon.address.charAt(0)) === locationCode
    );
    getSalons();
    setSelectedList(selectedSalons);
  };

  useEffect(() => {
    displaySalonList();
  }, [locationCode]);

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen h-fit">
      <TitleH text="✅지역을 선택해주세요!" />
      <LocationList
        locationCode={locationCode}
        onSetLocationCode={(code: number) => setLocationCode(code)}
      />
      <ul className=" grid grid-cols-3">
        {salons?.map((salon) => (
          <SalonItem key={salon.id} item={salon} />
        ))}

        {selectedList.map((salon) => (
          <SalonItem key={salon.id} item={salon} />
        ))}
      </ul>
    </div>
  );
};

export default PetSalonList;
