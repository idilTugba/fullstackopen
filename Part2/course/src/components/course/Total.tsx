import React from "react";

const Total = ({ parts }) => {
  console.log(parts);
  const total = parts.reduce((acc, item) => {
    console.log("what happening here", acc, item.exercises);
    return item.exercises + acc;
  }, 0);
  return (
    <>
      <p>Total of {total} exercises </p>
    </>
  );
};

export default Total;
