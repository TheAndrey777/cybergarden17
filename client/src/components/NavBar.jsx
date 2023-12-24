import React from 'react';
import cup from '/cup.svg';
import cupa from '/cup-active.svg';
import home from '/home.svg';
import homea from '/home-active.svg';
import mark from '/mark.svg';
import marka from '/save-active.svg';
import profile from '/profile-circle.svg';
import profilea from '/profile.svg';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className='absolute bottom-0 w-[100%] grid grid-col-4 grid-flow-col pt-[10px] items-center justify-between px-[20px] pb-[20px] bg-black'>
      <Link
        to='/sightbar'
        className={`box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
      >
        <img
          src={props.page === 0 ? homea : home}
          alt='home'
          className='h-[32px] w-[32px] light:text-black'
        ></img>
      </Link>
      <Link
        to='/achievements'
        className={`box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
      >
        <img
          src={props.page === 2 ? cupa : cup}
          alt='cup'
          className='h-[32px] w-[32px] light:text-black'
        ></img>
      </Link>
      <Link
        to='/favourite'
        className={`box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
      >
        <img
          src={props.page === 1 ? marka : mark}
          alt='mark'
          className='h-[32px] w-[32px] light:text-black'
        ></img>
      </Link>
      <Link
        to='/profile'
        className={`box-border flex h-[60px] w-[60px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
      >
        <img
          src={props.page === 3 ? profilea : profile}
          alt='profile'
          className='h-[32px] w-[32px] light:text-black'
        ></img>
      </Link>
    </div>
  );
}
