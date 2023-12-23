import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import Sender from '../Axios/Sender';

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
export default function Login() {
  const click = () => {
    const request = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      password_repeat: document.getElementById('password_repeat').value
    };

    console.log(request);

    if (request.name.length == 0) {
      console.log('Empty name');
      return;
    }

    if (request.email.length == 0) {
      console.log('Empty email');
      return;
    }

    if (!validateEmail(request.email)) {
      console.log('Email is not valid');
      return;
    }

    if (request.password.length == 0) {
      console.log('Empty password');
      return;
    }

    if (request.password != request.password_repeat) {
      console.log('Passwords are not the same');
      return;
    }

    console.log('Form is Valid');
  };
  return (
    <div className=' t-0 l-0 min-h-screen w-[100%] relative'>
      <img className='absolute top-[20px] left-[20px] text-white' src={arrow} alt='arrow'></img>
      <div className='text-[20px] pt-[20%] text-white text-center'>{'Регистрация'}</div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Имя'}</div>
      <div className='px-[20px]'>
        <input
          id='name'
          type='text'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
      <div className='px-[20px]'>
        <input
          id='email'
          type='email'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Пароль'}</div>
      <div className='px-[20px]'>
        <input
          id='password'
          type='password'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Повтор пароля'}</div>
      <div className='px-[20px]'>
        <input
          id='password_repeat'
          type='password'
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='absolute bottom-[10%] w-[100%]'>
        <div className='rounded-[10px] flex items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
          <button onClick={click} className='text-[18px] font-medium text-white'>
            {'Зарегистрировать'}
          </button>
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
    </div>
  );
}
