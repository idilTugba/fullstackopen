import React from "react";

const Button = ({ content, onClick }) => (
  <button onClick={onClick}>{content}</button>
);

export default Button;
