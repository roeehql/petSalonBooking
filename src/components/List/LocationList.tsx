import React from "react";
import locationList from "./data/locationData.json";

const LocationList = ({
  locationCode,
  onSetLocationCode,
}: {
  locationCode: number;
  onSetLocationCode: (code: number) => void;
}) => {
  return (
    <ol className="grid grid-cols-4 mt-6">
      {locationList.map((location) => (
        <li
          key={location.code}
          onClick={() => onSetLocationCode(location.code)}
          className={`list-none min-w-fit px-6 py-3 m-3 text-center text-green-900 text-base tracking-tighter font-medium border-2 border-gray-300 cursor-pointer last:border-r-2 hover:bg-green-600 hover:text-white ${
            location.code === locationCode && "bg-green-600 text-white"
          }`}
        >
          {location.name}
        </li>
      ))}
    </ol>
  );
};

export default LocationList;
