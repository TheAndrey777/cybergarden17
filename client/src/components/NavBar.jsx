import React from "react";
import cup from "/cup.svg";
import home from "/home.svg";
import mark from "/mark.svg";
import profile from "/profile.svg";

export default function NavBar() {
  return (
    <div className="absolute bottom-0 w-[100%] grid grid-col-4 grid-flow-col pt-[10px] items-center justify-between px-[20px] pb-[20px]">
      <div className=" box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]">
        <img
          src={home}
          alt="home"
          className="h-[32px] w-[32px] light:text-black"
        ></img>
      </div>
      <div className=" box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]">
        <img
          src={cup}
          alt="cup"
          className="h-[32px] w-[32px] light:text-black"
        ></img>
      </div>
      <div className=" box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]">
        <img
          src={mark}
          alt="mark"
          className="h-[32px] w-[32px] light:text-black"
        ></img>
      </div>
      <div className=" box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]">
        <img
          src={profile}
          alt="profile"
          className="h-[32px] w-[32px] light:text-black"
        ></img>
      </div>
    </div>
  );
}
