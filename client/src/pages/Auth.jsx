import React from 'react';
import arrow from '/arrow-left.svg';

export default function Auth() {
  return (
    <div className=' t-0 l-0 h-dvh w-[100%] relative'>
      <img className='absolute top-[20px] left-[20px] text-white' src={arrow} alt='arrow'></img>
      <div className='text-[20px] pt-[60%] text-white text-center'>
        {'Не совершен'}
        <br />
        {'вход в аккаунт'}
      </div>
      <div className='rounded-[10px] flex items-center justify-center mt-[60%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
        <div className='text-[18px] font-medium text-white'>{'Вход'}</div>
      </div>
      <div className='rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white'>
        <div className='text-[18px] font-medium text-white'>{'Регистрация'}</div>
      </div>
    </div>
  );
}
