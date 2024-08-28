import React from "react";

const CountriesList = ({ name, onClick, setNewPerson }) => {
  return (
    <div>
      <span>{name}</span> <button onClick={() => onClick(name)}>GET</button>
    </div>
  );
};

export default CountriesList;
