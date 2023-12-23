import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';

function CustomMap() {
  const map = React.useRef(null);
  const mapState = {
    center: [47.208735, 38.936394],
    zoom: 10,
    controls: []
  };

  const addRoute = (ymaps) => {
    const pointA = [47.208636, 38.936694]; // Москва
    const pointB = [47.208736, 38.936674]; // Санкт-Петербург
    const pointС = [47.200006, 38.930694]; // Санкт-Петербург

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB, pointС],
        params: {
          routingMode: 'pedestrian'
        }
      },
      {
        boundsAutoApply: true
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  React.useEffect(() => {}, [addRoute]);

  return (
    <div className='md:w-[100%] w-0  absolute top-0 left-0'>
      <YMaps query={{ apikey: 'b3e4c6b7-fc59-4a74-98b1-141c0f815ad6' }}>
        <Map
          modules={['multiRouter.MultiRoute']}
          state={mapState}
          instanceRef={map}
          //onLoad={addRoute}
          width='100%'
          height='100vh'
          /*отключаем интерактивность меток*/
          options={{
            yandexMapDisablePoiInteractivity: true
          }}
        ></Map>
      </YMaps>
    </div>
  );
}

export default CustomMap;
