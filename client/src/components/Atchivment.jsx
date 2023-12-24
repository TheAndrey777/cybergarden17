import React from 'react';
import on from '/check-on.svg';
import off from '/check-off.svg';

export default function Atchivment(props) {
  return (
    <div className='w-[100%] h-[60px] px-[20px] mt-[20px]'>
      <div
        className={`relative w-[100%] h-[60px] flex items-center ${
          props.complet ? 'bg-[#181818]' : ''
        } border-[1px] border-[#181818]  rounded-[10px] p-[10px]`}
      >
        <div>
          <div className='text-white w-[100%]'>{props.name}</div>
          <div className='text-[#4D4D4D] w-[100%]'>{props.description}</div>
        </div>
        <div className='absolute right-[10px]'>
          <img src={props.complet ? on : off} alt='check' />
        </div>
      </div>
    </div>
  );
}
