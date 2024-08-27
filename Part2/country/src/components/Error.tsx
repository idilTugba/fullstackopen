import React from "react";

const Error = ({ msg, err }) => {
  const error = {
    color: err ? "red" : "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={msg === null ? { display: "none" } : error}>{msg}</div>;
};

export default Error;
