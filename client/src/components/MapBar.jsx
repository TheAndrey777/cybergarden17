import React from 'react';
import cup from '/cup.svg';
import cupa from '/cup-active.svg';
import home from '/home.svg';
import homea from '/home-active.svg';
import mark from '/mark.svg';
import marka from '/save-active.svg';
import profile from '/profile-circle.svg';
import profilea from '/profile.svg';
import search from '/search.svg';
import searcha from '/search-active.svg';
import { Link } from 'react-router-dom';

export default function MapBar(props) {
  return (
    <>
      <div className='max-md:hidden absolute top-0 right-[5px] z-20'>
        <div className='grid grid-row-4 grid-flow-row'>
          <Link
            to='/sightbar'
            className={`mt-[5px] box-border flex h-[50px] w-[50px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
          >
            <img
              src={props.page === 0 ? homea : home}
              alt='home'
              className='h-[32px] w-[32px] light:text-black'
            ></img>
          </Link>
          <Link
            to='/achievements'
            className={`mt-[5px] box-border flex h-[50px] w-[50px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
          >
            <img
              src={props.page === 2 ? cupa : cup}
              alt='cup'
              className='h-[32px] w-[32px] light:text-black'
            ></img>
          </Link>
          <Link
            to='/favourite'
            className={`mt-[5px] box-border flex h-[50px] w-[50px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
          >
            <img
              src={props.page === 1 ? marka : mark}
              alt='mark'
              className='h-[32px] w-[32px] light:text-black'
            ></img>
          </Link>
          <Link
            to='/profile'
            className={`mt-[5px] box-border flex h-[50px] w-[50px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
          >
            <img
              src={props.page === 3 ? profilea : profile}
              alt='profile'
              className='h-[32px] w-[32px] light:text-black'
            ></img>
          </Link>
          <Link
            to='/search'
            className={`mt-[5px] box-border flex h-[50px] w-[50px] items-center justify-center bg-[#181818] light:bg-[#EBEBEB] rounded-[10px]`}
          >
            <img
              src={props.page === 4 ? searcha : search}
              alt='profile'
              className='h-[32px] w-[32px] light:text-black'
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
