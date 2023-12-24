import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [reppass, setRepPass] = React.useState('');

  const click = () => {
    if (pass != reppass) return;
    axios.post({ username: name, email: email, password: pass }).then((res) => console.log(res));
  };

  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black'>
        <div className=' t-0 l-0 h-dvh w-[100%] relative flex items-center justify-center'>
          <div className='w-[100%]'>
            <Link to={'/auth'} reloadDocument={false}>
              <img
                className='absolute top-[20px] left-[20px] text-white light:text-black'
                src={arrow}
                alt='arrow'
              ></img>
            </Link>
            <div className='text-[20px] text-white light:text-black text-center'>
              {'Регистрация'}
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Имя'}
            </div>
            <div className='px-[20px]'>
              <input
                id='name'
                type='text'
                onChange={(e) => setName(e)}
                className='bg-[#181818] pb-0 pl-[20px] text-white h-[45px] w-[100%] rounded-[10px]'
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Почта'}
            </div>
            <div className='px-[20px]'>
              <input
                id='email'
                type='email'
                onChange={(e) => setEmail(e)}
                className='bg-[#181818] pb-0 pl-[20px] text-white h-[45px] w-[100%] rounded-[10px]'
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Пароль'}
            </div>
            <div className='px-[20px]'>
              <input
                id='password'
                type='password'
                onChange={(e) => setPass(e)}
                className='bg-[#181818] pb-0 pl-[20px] text-white h-[45px] w-[100%] rounded-[10px]'
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Повтор пароля'}
            </div>
            <div className='px-[20px]'>
              <input
                id='password_repeat'
                type='password'
                onChange={(e) => setRepPass(e)}
                className='bg-[#181818] pb-0 pl-[20px] text-white h-[45px] w-[100%] rounded-[10px]'
              ></input>
            </div>
            <div className='w-[100%]'>
              <div className='rounded-[10px] flex items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
                <button
                  onClick={click}
                  className='text-[18px] font-medium text-white light:text-black'
                >
                  {'Зарегистрировать'}
                </button>
              </div>
              <div className='relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black'>
                <img className='absolute left-[15px]' src={google} alt='google'></img>
                <div className='text-[18px] font-medium text-white light:text-black'>
                  {'Продолжить с google'}
                </div>
              </div>
              <div className='relative rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black'>
                <img className='absolute left-[15px]' src={vk} alt='vk'></img>
                <div className='text-[18px] font-medium text-white light:text-black'>
                  {'Продолжить с VK'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomMap />
    </>
  );
}
