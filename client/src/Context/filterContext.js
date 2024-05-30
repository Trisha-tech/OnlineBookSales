import React, { createContext, useContext, useState } from "react";

// Create context
const FilterContext = createContext();

// Create provider component
export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('Classic');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the FilterContext
export const useFilter = () => useContext(FilterContext);
