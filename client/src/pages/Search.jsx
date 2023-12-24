import React from 'react';
import close from '/close-circle.svg';
import museum from '/bank.svg';
import ship from '/ship.svg';
import theatre from '/theatre.svg';
import gallery from '/gallery.svg';
import sunfog from '/sun-fog.svg';
import bag from '/bag.svg';
import PopularPlaces from '../components/PopularPlaces';
import CustomMap from '../components/CustomMap';
import axios from 'axios';
import MapBar from '../components/MapBar';

const TAGS = ['Музеи', 'Галереи', 'Памятники', 'Парки', 'Театры', 'Сувениры'];

let setPlaces1, setActive1, setMap1;

let TEST_PLACES = [
  // { name: "Парк Петра", value: 3.7, desk: "Крутое место", tag: "Парки" },
  // { name: "Парк Гоголя", value: 2.2, desk: "Крутое место", tag: "Парки" },
  // { name: "Парк Гоголя", value: 2.2, desk: "Крутое место", tag: "Парки" },
  // { name: "Парк Гоголя", value: 2.2, desk: "Крутое место", tag: "Парки" },
  // { name: "Парк Гоголя", value: 2.2, desk: "Крутое место", tag: "Парки" },
  // { name: "Парк Гоголя", value: 2.2, desk: "Крутое место", tag: "Парки" },
  // {
  //   name: "Памятник Петру",
  //   value: 5,
  //   desk: "Здесь можно побухать",
  //   tag: "Памятники",
  // },
];

/*
{
"status": "success",
"data": [
{
"id": 3,
"type": 6,
"lat": "14.880",
"lng": "17.992",
"name": "Test",
"description": "cho",
"address": "korpus e-bat"
},
{
"id": 4,
"type": 6,
"lat": "14.880",
"lng": "17.992",
"name": "Tes2t",
"description": "cho",
"address": "korpus e-bat"
},
{
"id": 5,
"type": 6,
"lat": "14.880",
"lng": "17.992",
"name": "Tes2t1",
"description": "cho",
"address": "korpus e-bat"
},
{
"id": 6,
"type": 3,
"lat": "14.880",
"lng": "17.992",
"name": "Tes2t122",
"description": "cho",
"address": "korpus e-bat"
}
]
}

*/
let prevTag = 'ALL';

let load = (tag) => {
  if (tag == prevTag) {
    tag = 'ALL';
    setActive1(-1);
  }
  let select = [];
  for (let i = 0; i < TEST_PLACES.length; i++) TEST_PLACES[i].key = i;
  TEST_PLACES.forEach((el) => {
    if (el.tag === tag || tag === 'ALL') select.push(el);
  });
  prevTag = tag;

  setPlaces1(
    <div>
      {select.map((v, i) => {
        console.log(v.value);
        return (
          <PopularPlaces key={v.key} name={v.name} desk={v.desk} value={v.value} tag={v.tag} />
        );
      })}
    </div>
  );
  ReloadPoints(select);
};

export default function Search() {
  if (TEST_PLACES.length === 0) {
    //axios.get("http://10.131.56.212:8465/api/sights/all", {}).then((res) => {
    //console.log(res);
    let response = {
      status: 'success',
      data: [
        {
          id: 3,
          picture: null,
          type: 6,
          lat: parseFloat('14.880'),
          lng: parseFloat('17.992'),
          name: 'Test',
          description: 'cho',
          address: 'korpus e-bat',
          averageRating: 5,
          reviewCount: 1
        },
        {
          id: 3,
          type: 6,
          lat: parseFloat('14.880'),
          lng: parseFloat('17.992'),
          name: 'Test',
          description: 'cho',
          address: 'korpus e-bat',
          averageRating: NaN,
          reviewCount: 0
        },
        {
          id: 4,
          type: 6,
          lat: parseFloat('14.880'),
          lng: parseFloat('17.992'),
          name: 'Tes2t',
          description: 'cho',
          address: 'korpus e-bat',
          averageRating: 3.47,
          reviewCount: 1
        },
        {
          id: 5,
          type: 6,
          lat: parseFloat('14.880'),
          lng: parseFloat('17.992'),
          name: 'Tes2t1',
          description: 'cho',
          address: 'korpus e-bat',
          averageRating: 2.83,
          reviewCount: 1
        },
        {
          id: 6,
          type: 3,
          lat: parseFloat('14.880'),
          lng: parseFloat('17.992'),
          name: 'Tes2t122',
          description: 'cho',
          address: 'korpus e-bat',
          averageRating: 4.6,
          reviewCount: 1
        }
      ]
    };
    TEST_PLACES = [];
    response.data.forEach((el) => {
      TEST_PLACES.push({
        address: el.address,
        desk: el.description,
        name: el.name,
        lat: el.lat,
        lng: el.lng,
        value: el.reviewCount === 0 ? 0 : el.averageRating,
        tag: TAGS[el.type - 1]
      });
    });
  }

  const [map, setMap] = React.useState(<CustomMap arr={TEST_PLACES} />);
  setMap1 = setMap;
  //);

  const arr = [
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 }
  ];

  const menu = [
    {
      title: 'Музеи',
      icon: museum,
      bg: 'bg-[#EA3597]',
      bordercolor: 'border-[#EA3597]'
    },
    {
      title: 'Галереи',
      icon: gallery,
      bg: 'bg-[#EA4335]',
      bordercolor: 'border-[#EA4335]'
    },
    {
      title: 'Памятники',
      icon: ship,
      bg: 'bg-[#7A4FF4]',
      bordercolor: 'border-[#7A4FF4]'
    },
    {
      title: 'Парки',
      icon: sunfog,
      bg: 'bg-[#35C9EA]',
      bordercolor: 'border-[#35C9EA]'
    },
    {
      title: 'Театры',
      icon: theatre,
      bg: 'bg-[#54A93F]',
      bordercolor: 'border-[#54A93F]'
    },
    {
      title: 'Сувениры',
      icon: bag,
      bg: 'bg-[#EEA516]',
      bordercolor: 'border-[#EEA516]'
    }
  ];

  const [active, setActive] = React.useState(0);
  setActive1 = setActive;

  {
    /* <div>
  {popPlaces.map((v, i) => {
    return <PopularPlaces key={i} />;
  })}
</div> */
  }

  const [places, setPlaces] = React.useState([]);
  setPlaces1 = setPlaces;
  return (
    <>
      <div className='z-10 absolute top-0 left-0 md:w-[400px] w-[100%] h-[100%] bg-black'>
        <div
          className='t-0 l-0 h-[100%] w-[100%] overflow-y-scroll overflow-x-hidden 
      [&::-webkit-scrollbar]:w-1
    [&::-webkit-scrollbar-track]:bg-[#000000]
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-[#000000]
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
    [&::-webkit-scrollbar-thumb]:rounded-full'
        >
          <div className='relative w-[100%] px-[20px] h-[60px] pt-[10px]'>
            <div className=' pr-[40px] h-[40px]'>
              <input
                type='text'
                placeholder='Поиск достопримечательностей'
                className='bg-[#181818] text-white light:[#EBEBEB] h-[40px] w-[100%] rounded-[10px] text-[15px] pl-[10px] text-ellipsis overflow-hidden'
              ></input>
            </div>
            <div className='absolute h-[100%] w-[32px] light:[#0D0D0D] flex justify-center items-center bg-slate-500w-[100px] top-0 right-0 cursor-pointer'>
              <img src={close} alt='close' className='absolute right-[20px]'></img>
            </div>
          </div>
          <div className='text-[18px] text-white light:[#0D0D0D] px-[20px]'>Категории</div>
          <div className='grid grid-col-3 grid-rows-2 grid-flow-col justify-between px-[20px] pt-[20px]'>
            {menu.map((v, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setActive(i);
                    load(TAGS[i]);
                  }}
                  className='h-[120px] w-[80px] relative light:bg-[#EBEBEB] cursor-pointer'
                >
                  <div
                    className={`h-[80px] w-[80px] relative rounded-[10px] ${
                      i === active ? v.bg : 'bg-[#181818]'
                    } border-2 ${
                      v.bordercolor
                    } flex justify-center items-center light:bg-[#0D0D0D]`}
                  >
                    <img src={v.icon} alt={v.title}></img>
                  </div>
                  <div className='h-[30px] w-[80px] relative flex my-[5px] justify-center items-center text-white light:bg-[#0D0D0D]'>
                    {v.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='text-[18px] text-white light:[#0D0D0D] px-[20px] py-[7px]'>
            Популярные места
          </div>
          places
          <li>{places}</li>
        </div>
      </div>
      {map}
      {/* <CustomMap arr={TEST_PLACES} /> */}
      <MapBar />
    </>
  );
}
