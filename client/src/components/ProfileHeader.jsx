import React from 'react';
import moon from '/moon.svg';

export default function ProfileHeader() {
  return (
    <div className='bg-red-400 h-[280px] w-[100%] relative'>
      <div></div>
      <div className='absolute flex items-center  justify-center bg-slate-300 h-[100%] w-[100%]'>
        <div className=' justify-center text-center'>
          <div className='flex justify-center'>
            <div className='bg-[#4D4D4D] h-20 w-20 rounded-full'></div>
          </div>
          <div className='text-[18px] text-white mt-[10px]'>Елена Хахатонова</div>
          <div className='text-[14px] text-[#4D4D4D]'>kakayatopochta@gmail.com</div>
        </div>
      </div>

      <div></div>
      <div>Отзывы</div>
    </div>
  );
}
