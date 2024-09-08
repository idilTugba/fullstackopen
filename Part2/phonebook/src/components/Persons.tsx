import React from "react";

const Persons = ({ search, list, persons, onDeleteHandle }) => {
  return (
    <ul>
      {search.length > 0
        ? list.map((item, i) => (
            <li key={item.name + i}>
              {item.name + " " + item.number}{" "}
              <button onClick={() => onDeleteHandle(item.id)}>Delete</button>
            </li>
          ))
        : persons.map((item, i) => (
            <li key={item.name + i}>
              {item.name + " " + item.number}{" "}
              <button onClick={() => onDeleteHandle(item.id)}>Delete</button>
            </li>
          ))}
    </ul>
  );
};

export default Persons;
