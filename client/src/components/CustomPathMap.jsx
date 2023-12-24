import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";

const geoOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const useGeolocation = () => {
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  const successLocating = position => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }

  const errorLocating = () => {
    setStatus('Unable to retrieve your location');
  }

  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(successLocating, errorLocating, geoOptions);
  }

  return [lat, lng, status];
}

export default function CustomPathMap(props) {
  const map = React.useRef(null);
  const mapState = {
    center: [47.212584, 38.916468],
    zoom: 14,
    controls: [],
  };

  const [ltd, lng] = useGeolocation();

  const addRoute = (ymaps) => {
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [[lat, lng], props.pointB],
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
  
  React.useEffect(() => {
    if (ymaps) {
      let geocoder = YMaps.geocode([lng, ltd]);
      geocoder.then(res => setMyAddress(res.geoObjects.get(0).properties.get('text')));
    }
  }, [lng, ltd]);

  return (
    <div className="w-[100%]  absolute top-0 left-0">
      <YMaps query={{ apikey: "b3e4c6b7-fc59-4a74-98b1-141c0f815ad6" }}>
        <Map
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          width="100%"
          height="100vh"
          onLoad={addRoute}
          options={{
            yandexMapDisablePoiInteractivity: true,
          }}
        >
        </Map>
      </YMaps>
    </div>
  );
}


// const mapState = { center: [55.76, 37.64], zoom: 10 };

// const OrdersPin = React.memo(({ id, mapInstanceRef, onClick }) => {
// // Тут я достаю все данные для моего пина из редакса
// const pin = useSelector(createMapPlacemarkByIdSelector(id));
// if (!mapInstanceRef) return null;

// // Тут создаю template для проброса в iconLayout, о createPinTemplateFactory дальше
// const template = createPinTemplateFactory(mapInstanceRef)({
// onPinClick: onClick,
// description: pin.description,
// isActive: pin.isActive,
// isViewed: pin.isViewed
// });

// return (
// <Placemark
// // Проброс позиции пина на карте
// geometry={[pin.coordinates.lat, pin.coordinates.lon]}
// options={{
// // Проброс темплейта
// iconLayout: template
// }}
// />
// );
// });

// function App() {
// const map = React.useRef(null);
// const mapState = {
// center: [47.208735, 38.936394],
// zoom: 10,
// controls: []
// };

// const addRoute = (ymaps) => {
// const pointA = [47.208636, 38.936694]; // Москва
// const pointB = [47.208736, 38.936674]; // Санкт-Петербург
// const pointС = [47.200006, 38.930694]; // Санкт-Петербург

// const multiRoute = new ymaps.multiRouter.MultiRoute(
// {
// referencePoints: [pointA, pointB, pointС],
// params: {
// routingMode: 'pedestrian'
// }
// },
// {
// boundsAutoApply: true
// }
// );

// map.current.geoObjects.add(multiRoute);
// };

// React.useEffect(() => {}, [addRoute]);

// return (
// <div>
// <YMaps query={{ apikey: 'b3e4c6b7-fc59-4a74-98b1-141c0f815ad6' }}>
// <Map
// modules={['multiRouter.MultiRoute']}
// state={mapState}
// instanceRef={map}
// onLoad={addRoute}
// width='100%'
// height='100vh'
// /*отключаем интерактивность меток*/
// options={{
// yandexMapDisablePoiInteractivity: true
// }}
// ></Map>
// </YMaps>
// </div>
// );
// }