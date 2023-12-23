import React from "react";
import StarRating from "./StarRating";

export default function SelectStar() {
  return (
    <div>
      SelectStar
      <StarRating value={4.9} size={16} interactive={true} />
    </div>
  );
}
