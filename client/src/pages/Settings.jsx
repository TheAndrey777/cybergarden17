import React from 'react';
import close from '/close-circle.svg';
import edit from '/edit.svg';

export default function Settings() {
  return (
    <>
      <div className=' h-[180px] w-[100%] relative'>
        <div className='absolute inline-flex right-[20px] top-[20px]'>
          <img src={close} alt='close' className='ml-[3px]'></img>
        </div>
        <div className='absolute flex items-end  justify-center h-[100%] w-[100%]'>
          <div className=' justify-center text-center'>
            <div className='relative flex justify-center'>
              <div className='bg-[#4D4D4D] h-20 w-20 rounded-full'></div>
              <img src={edit} alt='edit' className='absolute right-0 bottom-0'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Имяя'}</div>
      <div className='px-[20px]'>
        <input
          type='text'
          value={'Елена Хакатон'}
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>
      <div className='mx-[20px] mb-[10px] text-[#4D4D4D]'>{'Почта'}</div>
      <div className='px-[20px]'>
        <input
          type='text'
          value={'kakakakakak@gmail.com'}
          className='bg-[#181818] mb-[20px] pl-[15px] text-white h-[45px] w-[100%] rounded-[10px]'
        ></input>
      </div>

      <div className='rounded-[10px] flex items-center justify-center  ml-[20px] mr-[20px] h-[50px] bg-[#126A3A]'>
        <div className='text-[18px] font-medium text-white'>{'Сохранить'}</div>
      </div>
    </>
  );
}
