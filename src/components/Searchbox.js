import React from "react";

const Searchbox = ({ onSearchChange}) => {
  
  return (
    <div>
      <input
        className="pa2 ma2 w-100 b--green bg-lightest-blue"
        type="search"
        placeholder="Search products..."
        onChange={onSearchChange} 
      />
    </div>
  );
};

export default Searchbox;
