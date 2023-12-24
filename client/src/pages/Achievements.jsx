import React from 'react';
import Atchivment from '../components/Atchivment';
import NavBar from '../components/NavBar';
import MapBar from '../components/MapBar';
import CustomMap from '../components/CustomMap';

export default function Achievements() {
  return (
    <>
      <div className='z-10 absolute h-[100%] top-0 left-0 md:w-[400px] w-[100%] pb-[100px] bg-black'>
        <div
          className='h-[100%] overflow-y-scroll overflow-x-hidden 
    [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-[#000000]
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-[#000000]
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
  [&::-webkit-scrollbar-thumb]:rounded-full'
        >
          <div className='text-[18px] text-white light:[#0D0D0D] px-[20px] pt-[20px]'>
            Достижения
          </div>
          <Atchivment
            name='С моим мнением считаются'
            description='Напишите 20 отзывов'
            complet={1}
          />
          <Atchivment
            name='С моим мнением считаются'
            description='Напишите 20 отзывов'
            complet={1}
          />
          <Atchivment
            name='С моим мнением считаются'
            description='Напишите 20 отзывов'
            complet={1}
          />
          <NavBar page={2} />
        </div>
      </div>
      <MapBar />
      <CustomMap />
    </>
  );
}
