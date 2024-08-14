import React from "react";

const Display = ({ counter, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  );
};

export default Display;
