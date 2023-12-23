import React from "react";
import SelectStar from "./StarRating";

export default function Review() {
  return (
    <div className="w-[100%] px-[20px] pt-[20px]">
      <div className="h-[180px] w-[100%] bg-[#181818] rounded-[10px] box-border p-[10px] relative">
        <div className="text-[14px] overflow-hidden text-white light:text-black">
          Имя достопримечательности
        </div>
        <div className="text-[12px] overflow-hidden text-[#4D4D4D] mb-[3px]">
          Тип
        </div>
        <SelectStar value={0} />
        <div className=" bottom-[40px] text-[14px] h-[65px] w-[100%] text-ellipsis overflow-hidden text-white light:text-black">
          Текстотзыва Текстотзы ва Текстотзыва Текстотз ыва Текстотзыва
          Текстотзыва Т екстотзыва Текстотзыва перыеав ар праиапавраиарваиава
          пвиапви Текстотзыва Текстотзыва Т екстотзыва Текстотзыва перыеав ар
          праиапавраиарваиава пвиапви
        </div>
        <div className="absolute right-[10px] bottom-[10px] text-[14px] text-[#4D4D4D]">
          12.08.2022
        </div>
        <div className="absolute left-[10px] bottom-[10px] text-[14px] text-[#126A3A]">
          Редактировать
        </div>
      </div>
    </div>
  );
}
