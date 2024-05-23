import React from "react";
import { usePriceFilter } from "../Context/PriceFilterContext";

const PriceFilter = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } = usePriceFilter();

  const handleMinPriceChange = (e) => {
    setMinPrice(parseFloat(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  return (
    <div className="flex justify-center
    flex-row gap-4">
      <label htmlFor="minPrice" className="text-sm mt-2">
        Min Price:
      </label>
      <input
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="border border-gray-300 rounded px-2 py-1 w-32 text-sm mt-1"
      />
      <label htmlFor="maxPrice" className="text-sm mt-2">
        Max Price:
      </label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="border border-gray-300 rounded px-2 py-1 w-32 text-sm mt-1"
      />
    </div>
  );
};

export default PriceFilter;
