import { createContext, useContext, useState } from "react";

const PriceFilterContext = createContext();

export const PriceFilterProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <PriceFilterContext.Provider value={{ minPrice, maxPrice, setMinPrice, setMaxPrice }}>
      {children}
    </PriceFilterContext.Provider>
  );
};

export const usePriceFilter = () => useContext(PriceFilterContext);
