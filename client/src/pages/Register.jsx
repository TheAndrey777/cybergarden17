import React from 'react';
import arrow from '/arrow-left.svg';
import google from '/google.svg';
import vk from '/vk.svg';
import CustomMap from '../components/CustomMap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VALID = 'bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';
const INVALID = 'bg-[#501818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]';

export default function Register() {
  const [nameColor, setNameColor] = React.useState(VALID);
  const [emailColor, setEmailColor] = React.useState(VALID);
  const [passColor, setPassColor] = React.useState(VALID);
  const [reppassColor, setRepPassColor] = React.useState(VALID);

  const click = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let reppas = document.getElementById('password_repeat').value;

    setNameColor(VALID);
    setEmailColor(VALID);
    setPassColor(VALID);
    setRepPassColor(VALID);

    if (name === '') {
      console.log('Empty Name');
      setNameColor(INVALID);
    }

    if (email === '') {
      console.log('Empty Email');
      setEmailColor(INVALID);
    }

    if (pass === '') {
      console.log('Empty password');
      setPassColor(INVALID);
    }

    if (pass !== reppas) {
      console.log('Empty password');
      setPassColor(INVALID);
      setRepPassColor(INVALID);
    }

    if (
      nameColor === INVALID ||
      emailColor === INVALID ||
      passColor === INVALID ||
      reppassColor === INVALID
    )
      return;

    //if (pass != reppass) return;
    axios
      .post('http://10.131.56.212:8465/api/auth/register', {
        username: name,
        email: email,
        password: pass
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] bg-black'>
        <div className=' t-0 l-0 h-dvh w-[100%] relative flex items-center justify-center'>
          <div className='w-[100%]'>
            <Link to={'/auth'}>
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
                //onChange={(e) => setName(e)}
                className={nameColor}
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Почта'}
            </div>
            <div className='px-[20px]'>
              <input
                id='email'
                type='email'
                //onChange={(e) => setEmail(e)}
                className={emailColor}
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Пароль'}
            </div>
            <div className='px-[20px]'>
              <input
                id='password'
                type='password'
                //onChange={(e) => setPass(e)}
                className={passColor}
              ></input>
            </div>
            <div className='mx-[20px] mb-[5px] text-[#4D4D4D] light:text-[#181818] mt-[5px]'>
              {'Повтор пароля'}
            </div>
            <div className='px-[20px]'>
              <input
                id='password_repeat'
                type='password'
                //onChange={(e) => setRepPass(e)}
                className={reppassColor}
              ></input>
            </div>
            <div className='w-[100%] '>
              <div
                onClick={click}
                className='rounded-[10px] cursor-pointer flex  items-center justify-center mt-[10%] ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'
              >
                <div className='text-[18px] font-medium text-white light:text-black'>
                  {'Зарегистрировать'}
                </div>
              </div>
              <div className='relative cursor-pointer rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black'>
                <img className='absolute left-[15px]' src={google} alt='google'></img>
                <div className='text-[18px] font-medium text-white light:text-black'>
                  {'Продолжить с google'}
                </div>
              </div>
              <div className='relative cursor-pointer rounded-[10px] flex items-center justify-center mt-[20px] ml-[20px] mr-[20px] h-[50px] bg-transparent box-border border-[1px] border-white light:border-black'>
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
