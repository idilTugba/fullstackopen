import React from "react";

const Filter = ({ search, onSearchHandle }) => {
  return (
    <div>
      <span>filter shown with</span>
      <input
        value={search}
        onChange={(event) => onSearchHandle(event.target)}
      />
    </div>
  );
};

export default Filter;
