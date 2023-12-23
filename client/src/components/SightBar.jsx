import React from 'react';
import StarRating from './StarRating';
import mark from '/mark-favourite.svg';
import arrow from '/arrow-right-circle.svg';

export default function SightBar() {
  const [open, setOpen] = React.useState(0);

  return (
    <div className='relative w-[100%] min-h-screen px-[20px] pb-[100px] bg-slate-400'>
      <div className='h-[100%] '>
        <div className='w-[100%] h-[20px] flex justify-center items-center'>
          <div className='w-[60px] h-[1px] bg-[#4D4D4D]'></div>
        </div>

        <div className='h-[180px] w-[100%] bg-white rounded-[10px] pb-[20px]'>картинка</div>

        <div className='w-[100%] relative pt-[20px]'>
          <div className='h-[80px] w-[100%] pr-[100px] rounded-[10px] bg-[#181818] light:bg-[#EBEBEB] pt-[5px] px-[10px]'>
            <div className='text-white text-nowrap text-ellipsis overflow-hidden light:text-[#0D0D0D]'>
              Имя достопримечательности
            </div>
            <div className='text-[12px] text-[#4D4D4D]'>Тип</div>
            <div className='flex'>
              <StarRating value={4.9} size={16} />
              <div className='text-white text-[12px] px-[3px]'>3.3</div>
              <div className='text-[12px] text-[#4D4D4D] text-nowrap'>12 оценок</div>
            </div>
            <div className='absolute h-[100%] w-8 right-[30px] pt-[20px] top-0 flex justify-center'>
              <img src={mark} alt='arrow'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='border-b-[1px] w-[100%] border-b-[#4D4D4D] inline-flex '>
        <div
          onClick={() => {
            setOpen(0);
          }}
          className={`${open === 0 ? 'text-[#126A3A]' : 'text-white'} p-[15px]`}
        >
          Информация
        </div>
        <div
          onClick={() => {
            setOpen(1);
          }}
          className={`${open === 1 ? 'text-[#126A3A]' : 'text-white'} p-[15px]`}
        >
          Отзывы
        </div>
      </div>
      <div className='relative w-[100%] h-[100%] pt-[20px]'>
        {open === 0 ? (
          <>
            <div className='text-white '></div>
          </>
        ) : (
          <div className='text-white'>
            <div className='w-[100%] h-20 bg-[#181818] rounded-[10px]'>
              <div className='p-[10px]'>Оцените место</div>
              <StarRating value={4.9} size={30} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
