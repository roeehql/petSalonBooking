import React, { useState } from "react";
import locationList from "./data/locationData.json";

const LocationList = () => {
  const [locationCode, setLocationCode] = useState(0);

  return (
    <ol className="flex justify-center min-w-fit w-full m-6">
      {locationList.map((location) => (
        <li
          key={location.code}
          onClick={() => setLocationCode(location.code)}
          className="list-none min-w-fit px-6 py-3 text-center text-green-900 text-base tracking-tighter font-medium border-2 border-r-0 border-gray-300 cursor-pointer last:border-r-2 hover:bg-green-600 hover:text-white"
        >
          {location.name}
        </li>
      ))}
    </ol>
  );
};

export default LocationList;
