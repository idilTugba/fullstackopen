import React from "react";

const Persons = ({ search, list, persons }) => {
  return (
    <ul>
      {search.length > 0
        ? list.map((item) => (
            <li key={item.name}>{item.name + " " + item.phoneNumber}</li>
          ))
        : persons.map((item) => (
            <li key={item.name}>{item.name + " " + item.phoneNumber}</li>
          ))}
    </ul>
  );
};

export default Persons;
