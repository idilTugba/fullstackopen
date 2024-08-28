import React from "react";

const Filter = ({ search, onChange }) => {
  return (
    <div>
      <span>find countries</span>
      <input value={search} onChange={(e) => onChange(e.target)} />
    </div>
  );
};

export default Filter;
