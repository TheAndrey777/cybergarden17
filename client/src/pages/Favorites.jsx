import React from 'react';
import PopularPlaces from '../components/PopularPlaces';
import arrow from '/arrow-right-mark.svg';
import CustomMap from '../components/CustomMap';
import NavBar from '../components/NavBar';

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
    { 1: 1 }
  ];
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] h-[100%] w-[100%] pb-[100px] bg-black'>
        <div
          className='t-0 l-0 h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden
      [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-track]:bg-[#000000]
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-[#000000]
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
    [&::-webkit-scrollbar-thumb]:rounded-full'
        >
          <div className=' text-[18px] text-white light:text-black px-[20px] pt-[30px] py-[7px]'>
            Избранное
          </div>
          {arr == undefined || arr.length == 0 ? (
            <div className='h-[100%] w-[100%] flex justify-center items-center min-h-screen '>
              <div>
                <div className='text-white light:text-black text-[15px] mb-[10px] text-center'>
                  Добавить места, которые
                  <br /> хочется посетить
                </div>
                <div className='text-[#126A3A] flex justify-center items-center'>
                  <div className='text-[15px] mr-[5px]'>Перейти </div>
                  <img src={arrow} alt='arrow'></img>
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
        <NavBar page={1} />
      </div>
      <CustomMap />
    </>
  );
}
