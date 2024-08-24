import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item, i) => (
        <Part key={item.id + i} part={item.name} exercises={item.exercises} />
      ))}
    </>
  );
};

export default Content;
