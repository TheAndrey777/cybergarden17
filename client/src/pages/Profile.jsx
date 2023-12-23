import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import Review from '../components/Review';

export default function Profile() {
  const arr = [{}, {}, {}];
  return (
    <div className='t-0 l-0 min-h-screen w-[100%]'>
      <ProfileHeader />
      {arr.map((v, i) => {
        return <Review key={i} />;
      })}
    </div>
  );
}
