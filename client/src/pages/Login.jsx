import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';

const VALID = 'bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';
const INVALID = 'bg-[#501818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export default function Login() {
  console.log('test@gmail.com\npassword');
  const [emailColor, setEmailColor] = React.useState(VALID);
  const [passwordColor, setPasswordColor] = React.useState(VALID);

  const click = () => {
    const request = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };

    setEmailColor(VALID);
    setPasswordColor(VALID);

    if (request.email.length == 0) {
      console.log('Empty email');
      setEmailColor(INVALID);
    }

    if (!validateEmail(request.email)) {
      console.log('Email is not valid');
      setEmailColor(INVALID);
      return;
    }

    if (request.password.length == 0) {
      console.log('Empty password');
      setPasswordColor(INVALID);
      return;
    }
    if (emailColor == INVALID || passwordColor == INVALID) return;
    Sender.sendPost({
      adress: '10.131.56.212:8465/api/auth/login',
      message: request,
      f: (data) => localStorage.setItem('token', data.token)
    });
    console.log('Form is Valid');
  };

  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black'>
        <div className=' t-0 l-0 h-dvh w-[100%] relative flex items-center justify-center'>
          <div className='w-[100%]'>
            <Link to={'/auth'} reloadDocument={false}>
              <img
                className='absolute top-[20px] left-[20px] text-white'
                src={arrow}
                alt='arrow'
              ></img>
            </Link>
            <div className='text-[20px] text-white text-center'>{'Авторизация'}</div>
            <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
            <div className='px-[20px]'>
              <input id='email' type='email' className={emailColor}></input>
            </div>
            <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Пароль'}</div>
            <div className='px-[20px]'>
              <input id='password' type='password' className={passwordColor}></input>
            </div>
            <div className='bottom-[20px] w-[100%]'>
              <div className='rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
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
      </div>
      <CustomMap />
    </>
  );
}
