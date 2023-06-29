import React, { useEffect, useState } from "react";
import { useGetSalonList } from "components/List/hooks/useGetSalonList";
import { useSearch } from "./hooks/useSearch";
import SearchResult from "./SearchResult";
import FilterCheck, { FilterState } from "./FilterCheck";
import { useParams } from "react-router-dom";
import SearchInput from "./SearchInput";

const Search = () => {
  const { searchValue } = useParams();
  const { salonList, salons } = useGetSalonList();
  const { resultList, getSearchResult } = useSearch([...salonList, ...salons]);

  const [filteredServices, setFilteredServices] = useState(resultList);

  const handleSearch = (filters: FilterState) => {
    const filteredResults = resultList.filter((service) => {
      return (
        (!filters.catCut || service.canCatCut) &&
        (!filters.scissorsCut || service.canSissorCut) &&
        (!filters.cctv || service.hasCctv) &&
        (!filters.pickupService || service.hasPickupService)
      );
    });

    setFilteredServices(filteredResults);
  };

  useEffect(() => {
    if (searchValue) getSearchResult(searchValue);
  }, [searchValue]);

  return (
    <div className="my-24">
      <SearchInput />
      <FilterCheck onSearch={handleSearch} />
      <SearchResult
        resultList={resultList}
        filteredServices={filteredServices}
      />
    </div>
  );
};

export default Search;
