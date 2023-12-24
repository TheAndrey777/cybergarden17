import React from 'react';
import picture from '/welcome.png';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <div className='z-10 absolute top-0 left-0 h-[100%] w-[100%] bg-black flex items-center'>
        <div>
          <img src={picture} alt='picture' className='w-[100%] '></img>
          <div className='text-[16px] text-white text-center my-[20px]'>
            Читайте и оставляйте отзывы. Выбирайте места, которые хотите посетить, и узнайте, как к
            ним добраться
          </div>
          <Link
            to={'/auth'}
            className='rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'
          >
            <div className='text-[18px] font-medium text-white'>{'Понятно'}</div>
          </Link>
        </div>
      </div>
    </>
  );
}
