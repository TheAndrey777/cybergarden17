import React from 'react';
import arrow from '/arrow-left.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';

export default function Auth() {
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black'>
        <div className=' t-0 l-0 min-h-screen w-[100%] relative'>
          <img className='absolute top-[20px] left-[20px] text-white' src={arrow} alt='arrow'></img>
          <div className='text-[20px] pt-[60%] text-white light:[#0D0D0D] text-center'>
            {'Не совершен'}
            <br />
            {'вход в аккаунт'}
          </div>
          <Link
            to={'login'}
            className='rounded-[10px] flex items-center justify-center mt-[60%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'
          >
            <div className='text-[18px] font-medium text-white'>{'Вход'}</div>
          </Link>
          <Link
            to={'register'}
            className='rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-[#0D0D0D]'
          >
            <div className='text-[18px] font-medium text-white light:[#0D0D0D]'>
              {'Регистрация'}
            </div>
          </Link>
        </div>
      </div>

      <CustomMap />
    </>
  );
}
