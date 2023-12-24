import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";

export default function CustomMap(props) {
  const map = React.useRef(null);
  const [used, setUsed] = React.useState(0);
  const [markers, setMarkers] = React.useState([]);
  const mapState = {
    center: [47.212584, 38.916468],
    zoom: 14,
    controls: [],
  };

  const types = [
    "museum",
    "monument",
    "theatre",
    "gallery",
    "park",
    "souvenir",
    "souvenir",
  ];

  // [
  //   {
  //     id: 6,
  //     type: 3,
  //     lat: "47.216095",
  //     lng: "38.928464",
  //     name: "Tes2t122",
  //     description: "cho",
  //     address: "korpus e-bat",
  //     averageRating: 3.47,
  //   },
  //   {
  //     id: 7,
  //     type: 5,
  //     lat: "47.206787",
  //     lng: "38.931299",
  //     name: "Tes2t122",
  //     description: "cho",
  //     address: "korpus e-bat",
  //     averageRating: 4,
  //   },
  //   {
  //     id: 8,
  //     type: 4,
  //     lat: "47.199844",
  //     lng: "38.895982",
  //     name: "Tes2t122",
  //     description: "cho",
  //     address: "korpus e-bat",
  //     averageRating: 0,
  //   },
  // ];

  React.useEffect(() => {
    axios.get("http://10.131.56.212:8465/api/sights/all", { withCredentials: true })
      .then((res) => {
        setMarkers(res.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className="w-[100%]  absolute top-0 left-0">
      <YMaps query={{ apikey: "b3e4c6b7-fc59-4a74-98b1-141c0f815ad6" }}>
        <Map
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          width="100%"
          height="100vh"
          options={{
            yandexMapDisablePoiInteractivity: true,
          }}
        >
          {markers.map((v) => {
            return (
              <Placemark
                key={v.id}
                className={v.name}
                geometry={[v.lat, v.lng]}
                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                properties={{ hintContent: v.name }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: `/placemarks/${types[v.type]}.svg`,
                  iconImageSize: [40, 40],
                  iconImageOffset: [-20, -30],
                  balloonOffset: [0, 0]
                }}
                onClick={() => {
                  setUsed(v.id);
                  console.log(used);
                }}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
}
