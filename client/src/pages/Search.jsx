import React from 'react';
import close from '/close-circle.svg';

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
    </div>
  );
}
