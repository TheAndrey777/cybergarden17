import React from 'react';
import close from '/close-circle.svg';
import edit from '/edit.svg';
import CustomMap from '../components/CustomMap';

export default function Settings() {
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] h-[100%] bg-black'>
        <div className=' h-[180px] w-[100%] relative'>
          <div className='absolute inline-flex right-[20px] top-[20px]'>
            <img src={close} alt='close' className='ml-[3px] cursor-pointer z-10'></img>
          </div>
          <div className='absolute flex items-end  justify-center h-[100%] w-[100%]'>
            <div className=' justify-center text-center'>
              <div className='relative flex justify-center'>
                <div className='bg-[#4D4D4D] h-20 w-20 rounded-full'></div>
                <img
                  src={edit}
                  alt='edit'
                  className='absolute right-0 bottom-0 cursor-pointer'
                ></img>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Имя'}</div>
        <div className='px-[20px]'>
          <input
            type='text'
            value={'Елена Хакатон'}
            className='bg-[#181818] light:bg-[#EBEBEB] mb-[20px] pl-[15px] text-white light:text-black h-[45px] w-[100%] rounded-[10px]'
          ></input>
        </div>
        <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
        <div className='px-[20px]'>
          <input
            type='text'
            value={'kakakakakak@gmail.com'}
            className='bg-[#181818] light:bg-[#EBEBEB] mb-[20px] pl-[15px] text-white light:text-black h-[45px] w-[100%] rounded-[10px]'
          ></input>
        </div>

        <div className='rounded-[10px] flex items-center justify-center  ml-[20px] mr-[20px] h-[50px] bg-[#126A3A] cursor-pointer'>
          <div className='text-[18px] font-medium text-white'>{'Сохранить'}</div>
        </div>
      </div>
      <CustomMap />
    </>
  );
}
