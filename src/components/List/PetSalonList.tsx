import React, { useState, useEffect } from "react";
import { getListApi } from "../../api/getSalonListApi";
import { SalonList } from "../../types/ListTypes";
import SalonItem from "./SalonItem";

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
    <div>
      <ul className="flex ">
        {salonList.map((salon) => (
          <SalonItem key={salon.id} item={salon} />
        ))}
      </ul>
    </div>
  );
};

export default PetSalonList;
