import React from 'react';
import close from '/close-circle.svg';
import museum from '/bank.svg';
import ship from '/ship.svg';
import theatre from '/theatre.svg';
import gallery from '/gallery.svg';
import sunfog from '/sun-fog.svg';
import bag from '/bag.svg';

export default function Search() {
  const arr = [{}, {}, {}, {}, {}];
  return (
    <div className='relative t-0 l-0 h-dvh w-[100%]'>
      <div className='relative w-[100%] px-[20px] h-[60px] pt-[10px]'>
        <div className=' pr-[40px] h-[40px]'>
          <input
            type='text'
            className='bg-[#181818] text-white h-[40px] w-[100%] rounded-[10px]'
          ></input>
        </div>
        <div className='absolute h-[100%] w-[32px] flex justify-center items-center bg-slate-500w-[100px] top-0 right-0'>
          <img src={close} alt='close' className='absolute right-[20px]'></img>
        </div>
      </div>

      <div className='text-[18px] text-white px-[20px]'>Категории</div>

      <div className='grid grid-col-3 grid-rows-2 grid-flow-col justify-between px-[20px] pt-[20px]'>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
        <div className='h-[110px] w-[80px] relative'>
          <div className='h-[80px] w-[80px] relative rounded-[10px] bg-[#181818] flex justify-center items-center'>
            <img src={museum} alt='museum'></img>
          </div>
        </div>
      </div>
    </div>
  );
}
