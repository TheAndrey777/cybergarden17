import React from "react";
import close from "/close-circle.svg";
import museum from "/bank.svg";
import ship from "/ship.svg";
import theatre from "/theatre.svg";
import gallery from "/gallery.svg";
import sunfog from "/sun-fog.svg";
import bag from "/bag.svg";
import PopularPlaces from "../components/PopularPlaces";

export default function Search() {
  const arr = [
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
  ];

  const menu = [
    { title: "Музеи", icon: museum },
    { title: "Галереи", icon: gallery },
    { title: "Памятники", icon: ship },
    { title: "Парки", icon: sunfog },
    { title: "Театры", icon: theatre },
    { title: "Сувениры", icon: bag },
  ];

  return (
    <div className="t-0 l-0 h-vh w-[100%]">
      <div className="relative w-[100%] px-[20px] h-[60px] pt-[10px]">
        <div className=" pr-[40px] h-[40px]">
          <input
            type="text"
            placeholder="Поиск достопримечательностей"
            className="bg-[#181818] text-white light:[#EBEBEB] h-[40px] w-[100%] rounded-[10px] text-[15px] pl-[10px] text-ellipsis overflow-hidden"
          ></input>
        </div>
        <div className="absolute h-[100%] w-[32px] light:[#0D0D0D] flex justify-center items-center bg-slate-500w-[100px] top-0 right-0">
          <img src={close} alt="close" className="absolute right-[20px]"></img>
        </div>
      </div>
      <div className="text-[18px] text-white light:[#0D0D0D] px-[20px]">
        Категории
      </div>

      <div className="grid grid-col-3 grid-rows-2 grid-flow-col justify-between px-[20px] pt-[20px]">
        {menu.map((v, i) => {
          return (
            <div
              key={i}
              className="h-[120px] w-[80px] relative light:[#EBEBEB]"
            >
              <div className="h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center light:[#0D0D0D]">
                <img src={v.icon} alt="museum"></img>
              </div>
              <div className="h-[30px] w-[80px] relative flex my-[5px] justify-center items-center text-white light:[#0D0D0D]">
                {v.title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-[18px] text-white light:[#0D0D0D] px-[20px] py-[7px]">
        Популярные места
      </div>

      {arr.map((v, i) => {
        return <PopularPlaces key={i} />;
      })}
    </div>
  );
}
