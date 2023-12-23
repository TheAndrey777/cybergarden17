import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';

export default function Register() {
  return (
    <div className=' t-0 l-0 h-dvh w-[100%] relative'>
      <img className='absolute top-[20px] left-[20px] text-white' src={arrow} alt='arrow'></img>
      <div className='text-[20px] pt-[20%] text-white text-center'>{'Регистрация'}</div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Имя'}</div>
      <div className='px-[20px]'>
        <input
          type='text'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
      <div className='px-[20px]'>
        <input
          type='email'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Пароль'}</div>
      <div className='px-[20px]'>
        <input
          type='password'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Повтор пароля'}</div>
      <div className='px-[20px]'>
        <input
          type='password'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>

      <div className='rounded-[10px] flex items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
        <div className='text-[18px] font-medium text-white'>{'Вход'}</div>
      </div>
      <div className='relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white'>
        <img className='absolute left-[15px]' src={google} alt='google'></img>
        <div className='text-[18px] font-medium text-white'>{'Продолжить с google'}</div>
      </div>
      <div className='relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white'>
        <img className='absolute left-[15px]' src={vk} alt='vk'></img>
        <div className='text-[18px] font-medium text-white'>{'Продолжить с VK'}</div>
      </div>
    </div>
  );
}
