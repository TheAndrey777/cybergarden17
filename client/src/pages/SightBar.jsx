import React from 'react';
import StarRating from '../components/StarRating';
import mark from '/mark-favourite.svg';
import SelectStar from '../components/SelectStar';
import CustomMap from '../components/CustomMap';
import NavBar from '../components/NavBar';
import MapBar from '../components/MapBar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Header = (props) => {
  return (
    <div className=''>
      <div className='w-[100%] h-[20px] flex justify-center items-center'>
        <div
          className='w-[60px] h-[5px] bg-[#4D4D4D] rounded-full'
          onClick={() => {
            props.setHeight(0);
          }}
        ></div>
      </div>
      <div className='h-[180px] w-[100%] bg-white rounded-[10px] pb-[20px]'><img src={props.simg} alt="" /></div>
      <div className='w-[100%] relative pt-[20px]'>
        <div className='h-[90px] w-[100%] pr-[100px] rounded-[10px] bg-[#181818] pt-[5px] px-[10px]'>
          <div className='text-white text-nowrap text-ellipsis overflow-hidden'>
            {props.sightName}
          </div>
          <div className='text-[12px] text-[#4D4D4D]'>Тип</div>
          <div className='flex items-center'>
            <StarRating value={0} size={16} />
            <div className='text-white text-[12px] px-[3px]'>{props.avg}</div>
            <div className='text-[12px] text-[#4D4D4D] text-nowrap'>{props.cnt}</div>
          </div>
          <div className='absolute h-[100%] w-8 right-[30px] pt-[20px] top-0 flex justify-center cursor-pointer'>
            <img src={mark} alt='arrow'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonMenu = (props) => {
  return (
    <div className='border-b-[1px] w-[100%] border-b-[#4D4D4D] inline-flex '>
      <div
        onClick={() => {
          props.setOpen(0);
        }}
        className={`${props.open === 0 ? 'text-[#126A3A]' : 'text-white'} p-[15px] cursor-pointer`}
      >
        Информация
      </div>
      <div
        onClick={() => {
          props.setOpen(1);
        }}
        className={`${props.open === 1 ? 'text-[#126A3A]' : 'text-white'} p-[15px] cursor-pointer`}
      >
        Отзывы
      </div>
    </div>
  );
};

export default function SightBar(props) {
  const [height, setHeight] = React.useState(1);
  const [open, setOpen] = React.useState(0);
  const location = useLocation();
  console.log(location.state.id);
  const [sight, setSight] = React.useState({});
  
  
  React.useEffect(() => {
    axios.get(`http://10.131.56.212:8465/api/sights/${location.state.id}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.data);
        setSight(res.data.data);
        if (sight.picture == null)
          sight.picture = "https://extrasvyaz.ru/upload/iblock/867/ed2hp485p3dtmzqj8biva59uuforqqjj.jpg";
        console.log(sight.picture);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div
        className={`z-10 absolute  left-0 md:w-[400px] w-[100%] md:h-[100%] h-[50%] ${
          height ? 'bottom-0' : '-bottom-[80%]'
        } bg-black`}
      >
        <div
          className={`relative w-[100%] h-[100%] px-[20px] pb-[100px] overflow-y-scroll overflow-x-hidden 
  [&::-webkit-scrollbar]:w-1
[&::-webkit-scrollbar-track]:bg-[#000000]
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-[#000000]
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
[&::-webkit-scrollbar-thumb]:rounded-full`}
        >
          <Header setHeight={setHeight} height={height} sightName={sight.name} avg={sight.averageRating} cnt={sight.reviewCount} simg={sight.picture} />
          <ButtonMenu setOpen={setOpen} open={open} />
          <div className='pt-[20px]'>
            {open === 0 ? (
              <>
                <div className='text-white'>
                  {sight.description}
                </div>
              </>
            ) : (
              <>
                <div className='text-white'>
                  <div className='w-[100%] h-20 bg-[#181818] rounded-[10px]'>
                    <div className='p-[10px] w-[100%] text-center'>Оцените место</div>
                    <div className='w-[100%] flex justify-center'>
                      <SelectStar value={0} size={30} />
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder='Поделитесь впечатлениями'
                  className='text-[14px] w-[100%] h-[200px] mt-[20px] bg-[#181818] rounded-[10px]  text-white p-[10px]'
                ></textarea>

                <div className='rounded-[10px] flex mt-[20px] items-center justify-center h-[50px] bg-[#126A3A]'>
                  <div className='text-[14px] font-medium text-white'>{'Отправить отзыв'}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <CustomMap />
      <NavBar page={0} />
      <MapBar page={0} />
    </>
  );
}
