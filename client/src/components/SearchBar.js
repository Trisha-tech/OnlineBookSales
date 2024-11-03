

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Example data list for suggestions
const data = [
  { name: "Romance", url: "/romance" },
   { name:"Action", url: "/action" },
    { name: "Thriller", url: "/thriller" },
   { name: "Fiction", url: "/fiction" },
   { name: "Technology", url: "/tech" },
   { name: "Philosophy", url: "philosophy" },
   { name: "Manga", url: "/manga" },
  // { name: "Honeydew", url: "/books/romance/honeydew" },
];

const SearchBar = () => {
  const [query, setQuery] = useState(""); // For storing user input
  const [filteredData, setFilteredData] = useState([]); // For storing filtered results
  const [showSuggestions, setShowSuggestions] = useState(false); // Toggle suggestions
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Function to handle input change
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
  
    if (userInput) {
      const suggestions = data.filter((item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase()) // Access the name field
      );
      setFilteredData(suggestions);
      setShowSuggestions(true);
    } else {
      setFilteredData([]);
      setShowSuggestions(false);
    }
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false); // Hide suggestions after selection
    navigate(suggestion.url);
  };
  

  return (
    <div className="w-[300px] my-0 mx-auto text-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        color="black"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      {showSuggestions && filteredData.length > 0 && (
        <ul className="list-none p-0 border border-[#ccc] rounded mt-3 max-h-[150px] overflow-y-auto"
          // style={{
          //   listStyleType: "none",
          //   padding: 0,
          //   border: "1px solid #ccc",
          //   borderRadius: "5px",
          //   marginTop: "5px",
          //   maxHeight: "150px",
          //   overflowY: "auto",
          // }}
        >
       {filteredData.map((suggestion, index) => (
  <li
    key={index}
    onClick={() => handleSuggestionClick(suggestion)}
    style={{
      padding: "10px",
      cursor: "pointer",
      backgroundColor: "#f9f9f9",
      borderBottom: "1px solid #ccc",
    }}
  >
    {suggestion.name} {/* Render the name, not the whole object */}
  </li>
))}
        </ul>
      )}

    </div>
  );
};
export default SearchBar;
