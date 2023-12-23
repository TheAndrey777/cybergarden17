import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Review from '../components/Review';
import arrow from '/arrow-right-mark.svg';

export default function Profile(props) {
  return (
    <div className='t-0 l-0 min-h-screen w-[100%]'>
      <ProfileHeader />

      {props.arr === undefined || props.arr.length === 0 ? (
        <div className='h-[100%] w-[100%]'>
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
        props.arr.map((v, i) => {
          return <Review key={i} />;
        })
      )}
    </div>
  );
}
