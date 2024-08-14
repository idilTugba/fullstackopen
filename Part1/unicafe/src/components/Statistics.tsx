import React from "react";
import Display from "./Display";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = Object.values(props).reduce<number>(
    (acc, item) => acc + (item as number),
    0
  );
  const avarage = (good - bad) / total;
  const positive = good / total;

  if (good == 0 && neutral == 0 && bad == 0)
    return <p>There is no feedback yet</p>;
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Display text="Good" counter={good} />
          <Display text="Neutral" counter={neutral} />
          <Display text="Bad" counter={bad} />
          <Display text="Total" counter={total} />
          <Display text="Avarage" counter={avarage} />
          <Display text="Positive" counter={`${positive}%`} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
