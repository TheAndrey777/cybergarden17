import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Review from '../components/Review';
import arrow from '/arrow-right-mark.svg';
import CustomMap from '../components/CustomMap';
import NavBar from '../components/NavBar';

export default function Profile(props) {
  const arr = [{}, {}, {}, {}, {}];
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] h-[100%] w-[100%] pb-[100px] bg-black'>
        <NavBar page={3} />{' '}
        <div className='t-0 l-0 h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden'>
          <ProfileHeader />

          {props.arr === undefined || props.arr.length === 0 ? (
            <div className=' w-[100%]'>
              <div className='pt-[30%]'>
                <div>
                  <div className='text-white text-[15px] mb-[10px] text-center'>
                    Добавить места, которые
                    <br /> хочется посетить
                  </div>
                  <div className='text-[#126A3A] flex justify-center items-center'>
                    <div className='text-[15px] mr-[5px]'>Перейти </div>
                    <img src={arrow} alt='arrow'></img>
                  </div>
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
    </>
  );
}
