import React from "react";

const Total = (props) => {
  const { good, neutral, bad } = props;

  const total = Object.values(props).reduce<number>(
    (acc, item) => acc + (item as number),
    0
  );
  const avarage = (good - bad) / total;
  const positive = good / total;
  return (
    <>
      <table>
        <tr>
          <p>all {total} </p>
        </tr>
        <tr>
          <p>avarage {avarage} </p>
        </tr>
        <tr>
          <p>positive {positive + "%"} </p>
        </tr>
      </table>
    </>
  );
};

export default Total;
