import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInput } from "hooks/useInput";
import { FiSearch } from "react-icons/fi";
import { useGetSalonList } from "components/List/hooks/useGetSalonList";
import Button from "components/atom/Button";

const SearchInput = () => {
  const navigate = useNavigate();
  const { salonList, salons } = useGetSalonList();
  const { value: search, handleChange: handleSearchChange } = useInput("");

  return (
    <div className="flex justify-center items-end min-h-fit mb-4">
      <span className="py-2 px-2 text-2xl text-green-800">
        <FiSearch />
      </span>
      <input
        type={"text"}
        name={"search-bar"}
        onChange={handleSearchChange}
        value={search}
        className="px-4 py-2 mt-2 rounded-xl border-2 border-green-600 outline-none"
        list="salon-info"
      />
      <datalist id="salon-info">
        {[...salonList, ...salons].map((salon, i) => (
          <>
            <option key={`${i}${salon.id}`} value={salon.name} />
            <option key={`${salon.id}${i}`} value={salon.address} />
          </>
        ))}
      </datalist>
      <Button
        type="button"
        text="검색"
        plusStyle={"ml-2"}
        onClick={() => navigate(`/search/${search}`)}
      />
    </div>
  );
};

export default SearchInput;
