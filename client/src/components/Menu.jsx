import React from 'react';
import cup from '/cup.svg';
import home from '/home.svg';
import mark from '/mark.svg';
import profile from '/profile.svg';

export default function Menu() {
  return (
    <div className='w-[100%]'>
      <div className='grid grid-col-4 grid-flow-col w-[100%] bg-red-400 justify-content: center'>
        <div className=' box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] rounded-[10px]'>
          <img src={cup} alt='cup' className='h-[32px] w-[32px]'></img>
        </div>
        <div className=' box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] rounded-[10px]'>
          <img src={home} alt='home' className='h-[32px] w-[32px]'></img>
        </div>
        <div className=' box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] rounded-[10px]'>
          <img src={mark} alt='mark' className='h-[32px] w-[32px]'></img>
        </div>
        <div className=' box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] rounded-[10px]'>
          <img src={profile} alt='profile' className='h-[32px] w-[32px]'></img>
        </div>
      </div>
    </div>
  );
}
