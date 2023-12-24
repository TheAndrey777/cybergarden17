import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VALID = 'bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';
const INVALID = 'bg-[#501818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';

export default function Login() {
  const [emailColor, setEmailColor] = React.useState(VALID);
  const [passwordColor, setPasswordColor] = React.useState(VALID);

  const click = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log({
      email: email,
      password: password
    });

    setEmailColor(VALID);
    setPasswordColor(VALID);

    if (email === '') {
      console.log('Empty Email');
      setEmailColor(INVALID);
      return;
    }

    if (password === '') {
      console.log('Empty password');
      setPasswordColor(INVALID);
      return;
    }

    if (email === INVALID || password === INVALID) return;

    axios
      .post('http://10.131.56.212:8465/api/auth/login', {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
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
              //value={email}
              //onChange={(e) => setEmail(e)}
              type='email'
              className={emailColor}
            ></input>
          </div>
          <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Пароль'}</div>
          <div className='px-[20px]'>
            <input
              id='password'
              //onChange={(e) => setPassword(e)}
              type='password'
              className={passwordColor}
            ></input>
          </div>
          <div className='absolute bottom-[10%] w-[100%]'>
            <div
              onClick={click}
              className='rounded-[10px] flex items-center cursor-pointer justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'
            >
              <div className='text-[18px] font-medium text-white'>{'Войти'}</div>
            </div>
            <div className='relative rounded-[10px] cursor-pointer flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white'>
              <img className='absolute left-[15px]' src={google} alt='google'></img>
              <div className='text-[18px] font-medium text-white'>{'Продолжить с google'}</div>
            </div>
            <div className='relative rounded-[10px] cursor-pointer flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white'>
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
