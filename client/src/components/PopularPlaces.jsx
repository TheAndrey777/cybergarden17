import React from "react";
import mark from "/mark-favourite.svg";
import arrow from "/arrow-right-circle.svg";
import StarRating from "./StarRating";

export default function PopularPlaces() {
  return (
    <div className="w-[100%] px-[20px] relative pt-[20px]">
      <div className="h-[80px] w-[100%] pr-[100px] rounded-[10px] bg-[#181818] light:bg-[#EBEBEB] p-[10px]">
        <div className="text-white text-nowrap text-ellipsis overflow-hidden light:text-[#0D0D0D]">
          Имя достопримечательности
        </div>
        <div className="text-[12px] text-[#4D4D4D]">Тип</div>
        <StarRating value={4.9} size={16} />
        <div className="absolute h-[100%] w-8 right-[45px] pt-[20px] top-0 flex justify-center">
          <img src={arrow} alt="arrow"></img>
        </div>
        <div className="absolute h-[100%] w-8 right-[80px] top-[35px] light:[#0D0D0D>]">
          <img src={mark} alt="mark"></img>
        </div>
      </div>
    </div>
  );
}
