import React from "react";
import starBold from "/bold-star.svg";
import starEmpty from "/empty-star.svg";
import starHalf from "/half-star.svg";

const STATES = [starEmpty, starHalf, starBold];

export default function StarRating(props) {
  const [value, setValue] = React.useState(props.value || 0);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <div
        className={`h-[${props.size != undefined ? props.size : "20"}px] w-[${
          props.size != undefined ? props.size : "20"
        }px]`}
      >
        <img
          src={STATES[value - i >= 1 ? 2 : Math.max(Math.ceil(value - i), 0)]}
          onClick={
            props.interactive
              ? () => setValue((value != i + 1) * (i + 1))
              : () => {}
          }
          alt="star"
        ></img>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex max-w-[${
        props.size != undefined ? props.size * 5 : "100"
      }px]`}
    >
      {stars[0]}
      {stars[1]}
      {stars[2]}
      {stars[3]}
      {stars[4]}
    </div>
  );
}
