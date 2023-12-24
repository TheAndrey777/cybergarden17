import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Review from '../components/Review';
import arrow from '/arrow-right-mark.svg';
import CustomMap from '../components/CustomMap';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import MapBar from '../components/MapBar';

export default function Profile(props) {
  const arr = [{}, {}, {}, {}, {}];
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] h-[100%] w-[100%] pb-[100px] bg-black'>
        <NavBar page={3} />{' '}
        <div
          className='t-0 l-0 h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden       [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-track]:bg-[#000000]
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-[#000000]
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
    [&::-webkit-scrollbar-thumb]:rounded-full'
        >
          <ProfileHeader />

          {props.arr === undefined || props.arr.length === 0 ? (
            <div className=' w-[100%]'>
              <div className='pt-[30%]'>
                <div>
                  <div className='text-white text-[15px] mb-[10px] text-center'>
                    Добавить места, которые
                    <br /> хочется посетить
                  </div>
                  <Link
                    to={'/search'}
                    className='text-[#126A3A] flex justify-center items-center cursor-pointer'
                  >
                    <div className='text-[15px] mr-[5px]'>Перейти </div>
                    <img src={arrow} alt='arrow'></img>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            arr.map((v, i) => {
              return <Review key={i} />;
            })
          )}
        </div>
      </div>
      <CustomMap />
      <MapBar page={3} />
    </>
  );
}
