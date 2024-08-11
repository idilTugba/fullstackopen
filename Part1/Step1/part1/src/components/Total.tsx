import React from "react";

const Total = (props) => {
  const posts = props.parts;
  const total = posts.reduce((acc, item) => item.exercises + acc, 0);
  return (
    <>
      <p>Number of exercises {total} </p>
    </>
  );
};

export default Total;
