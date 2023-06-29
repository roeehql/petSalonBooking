import React from "react";
import SalonItem from "components/List/SalonItem";
import { SalonList } from "types/ListTypes";

const SearchResult = ({
  filteredServices,
  resultList,
}: {
  filteredServices: SalonList[];
  resultList: SalonList[];
}) => {
  if (filteredServices.length === 0) {
    return (
      <div className="grid grid-cols-3">
        {resultList.map((result) => (
          <SalonItem key={result.id} item={result} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3">
      {filteredServices.map((result) => (
        <SalonItem key={result.id} item={result} />
      ))}
    </div>
  );
};

export default SearchResult;
