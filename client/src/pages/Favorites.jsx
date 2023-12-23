import React from "react";
import PopularPlaces from "../components/PopularPlaces";
import arrow from "/arrow-right-mark.svg";
import CustomMap from "../components/CustomMap";

export default function Favorites() {
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
  return (
    <>
      <div className="z-10 absolute top-0 left-0 md:w-[400px] h-[100%] w-[100%] bg-black">
        <div className="t-0 l-0 h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden">
          <div className=" text-[18px] text-white light:text-black px-[20px] py-[7px]">
            Избранное
          </div>
          {arr == undefined || arr.length == 0 ? (
            <div className="h-[100%] w-[100%] flex justify-center items-center min-h-screen ">
              <div>
                <div className="text-white light:text-black text-[15px] mb-[10px] text-center">
                  Добавить места, которые
                  <br /> хочется посетить
                </div>
                <div className="text-[#126A3A] flex justify-center items-center">
                  <div className="text-[15px] mr-[5px]">Перейти </div>
                  <img src={arrow} alt="arrow"></img>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {arr.map((v, i) => {
                return <PopularPlaces key={i} />;
              })}
            </div>
          )}
        </div>
      </div>
      <CustomMap />
    </>
  );
}
