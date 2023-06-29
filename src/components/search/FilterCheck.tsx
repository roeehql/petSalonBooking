import React, { useState } from "react";
import Checkbox from "./CheckBox";
import Button from "components/atom/Button";

export interface FilterState {
  catCut: boolean;
  scissorsCut: boolean;
  cctv: boolean;
  pickupService: boolean;
}
const FilterCheck = ({
  onSearch,
}: {
  onSearch: (filters: FilterState) => void;
}) => {
  const [filters, setFilters] = useState<FilterState>({
    catCut: false,
    scissorsCut: false,
    cctv: false,
    pickupService: false,
  });

  const handleFilterChange = (
    filterName: keyof FilterState,
    checked: boolean
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: checked,
    }));
  };

  const handleSearch = () => {
    // Call the search function and pass the selected filters
    onSearch(filters);
  };

  return (
    <div className="flex justify-center items-center">
      <Checkbox
        label="고양이 미용"
        checked={filters.catCut}
        onChange={(checked) => handleFilterChange("catCut", checked)}
      />
      <Checkbox
        label="가위컷"
        checked={filters.scissorsCut}
        onChange={(checked) => handleFilterChange("scissorsCut", checked)}
      />

      <Checkbox
        label="CCTV"
        checked={filters.cctv}
        onChange={(checked) => handleFilterChange("cctv", checked)}
      />

      <Checkbox
        label="픽업 서비스"
        checked={filters.pickupService}
        onChange={(checked) => handleFilterChange("pickupService", checked)}
      />
      <Button type="button" onClick={handleSearch} text="적용" />
    </div>
  );
};

export default FilterCheck;
