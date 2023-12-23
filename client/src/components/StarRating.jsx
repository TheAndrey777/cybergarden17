import React from 'react';
import starBold from '/bold-star.svg';
import starEmpty from '/empty-star.svg';
import starHalf from '/half-star.svg';
// половинку

export default function SelectStar() {
  return (
    <div className='inline-flex'>
      <img src={starBold} alt='star' className='h-[20px] w-[20px]'></img>
      <img src={starBold} alt='star' className='h-[20px] w-[20px]'></img>
      <img src={starBold} alt='star' className='h-[20px] w-[20px]'></img>
      <img src={starBold} alt='star' className='h-[20px] w-[20px]'></img>
      <img src={starBold} alt='star' className='h-[20px] w-[20px]'></img>
    </div>
  );
}
