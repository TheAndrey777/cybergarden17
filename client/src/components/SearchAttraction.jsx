import React from 'react';
import menu from '/menu2.svg';

export default function SearchAttraction() {
  return (
    <div className='md:hidden absolute px-[20px] w-[100%] h-[50px]'>
      <div className='w-[100%] h-[50px] bg-black'>
        <div className='relative w-[100%] px-[20px] h-[60px] pt-[10px] '>
          <div className=' pr-[40px] h-[40px]'>
            <input
              type='text'
              placeholder='Поиск достопримечательностей'
              className='bg-[#181818] text-white light:[#EBEBEB] h-[40px] w-[100%] rounded-[10px] text-[15px] pl-[10px] text-ellipsis overflow-hidden'
            ></input>
          </div>
          <div className='absolute h-[100%] w-[32px] light:[#0D0D0D] flex justify-center items-center bg-slate-500w-[100px] top-0 right-0 cursor-pointer'>
            <img src={menu} alt='close' className='absolute right-[20px]'></img>
          </div>
        </div>
      </div>
    </div>
  );
}
