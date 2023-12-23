import React from "react";
import starBold from "/bold-star.svg";
import starEmpty from "/empty-star.svg";
import starHalf from "/half-star.svg";

const STATES = [starEmpty, starHalf, starBold];

function Star(props) {
  console.log(props.state);
  console.log(STATES[props.state]);
  return (
    <img
      src={STATES[props.state]}
      alt="star"
      className="h-[20px] w-[20px]"
    ></img>
  );
}

export default function SelectStar(props) {
  const [value, setValue] = React.useState(props.value);
  //console.log(value);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    //console.log(value - i);
    stars.push(
      new Star({
        state: value - i >= 1 ? 2 : Math.max(Math.ceil(value - i), 0),
      })
    );
  }

  return (
    <div className="inline-flex">
      {stars[0]}
      {stars[1]}
      {stars[2]}
      {stars[3]}
      {stars[4]}
    </div>
  );
}
