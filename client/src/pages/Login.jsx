import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const click = () => {
    console.log({
      username: name,
      email: email,
      password: pass
    });
    axios
      .post('http://10.131.56.212:8465/api/auth/login', {
        username: name,
        email: email,
        password: pass
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black'>
        <div className=' t-0 l-0 h-dvh w-[100%] relative'>
          <Link to={'/auth'} reloadDocument={false}>
            <img
              className='absolute top-[20px] left-[20px] text-white'
              src={arrow}
              alt='arrow'
            ></img>
          </Link>
          <div className='text-[20px] pt-[20%] text-white text-center'>{'Авторизация'}</div>
          <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
          <div className='px-[20px]'>
            <input
              id='email'
              onChange={(e) => setEmail(e)}
              type='email'
              className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
            ></input>
          </div>
          <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Пароль'}</div>
          <div className='px-[20px]'>
            <input
              id='password'
              onChange={(e) => setPassword(e)}
              type='password'
              className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
            ></input>
          </div>
          <div className='absolute bottom-[10%] w-[100%]'>
            <div className='rounded-[10px] flex items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
              <button onClick={click} className='text-[18px] font-medium text-white'>
                {'Войти'}
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
      </div>
      <CustomMap />
    </>
  );
}
