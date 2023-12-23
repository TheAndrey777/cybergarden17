import React from "react";
import moon from "/moon.svg";
import setting from "/setting.svg";

export default function ProfileHeader() {
  return (
    <div className=" h-[280px] w-[100%] relative">
      <div className="absolute inline-flex right-[20px] top-[20px]">
        <img src={moon} alt="theme" className="ml-[3px]"></img>
        <img src={setting} alt="theme" className="ml-[3px]"></img>
      </div>
      <div className="absolute flex items-center  justify-center h-[100%] w-[100%]">
        <div className=" justify-center text-center">
          <div className="flex justify-center">
            <div className="bg-[#4D4D4D] h-20 w-20 rounded-full"></div>
          </div>
          <div className="text-[18px] text-white light:text-black mt-[10px]">
            Елена Хахатонова
          </div>
          <div className="text-[14px] text-[#4D4D4D]">
            kakayatopochta@gmail.com
          </div>
        </div>
      </div>

      <div className="absolute top-[240px] w-[100%] h-[1px] bg-[#4D4D4D]"></div>
      <div className="absolute bottom-0 text-[18px] left-[20px] text-white">
        Отзывы
      </div>
    </div>
  );
}
