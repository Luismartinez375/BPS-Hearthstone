'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import back from '../../../../public/heroicons-outline_arrow-left.svg';
import { PlaceClass } from '../../../../types';
import Maps from './maps';
import ShopCard from './shopCard';
import ShopDetail from './shopDetail';
type props = {
  places: PlaceClass[];
};

export default function ScrollMaps({ places }: props) {
  const [showDetail, setShowDetail] = useState(false);
  const [showList, setShowList] = useState(true);
  const [place, setPlace] = useState<PlaceClass>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  // const [placesList, setPlacesList] = useState<PlaceClass[]>([]);
  // const data = async ({ lat, lng }: any) => {
  //   let places = await getPlaceDetail({
  //     lat: lat,
  //     lng: lng,
  //   });
  //   setPlacesList(places);
  // };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  // console.log('center', center);

  const goToDetail = (card: PlaceClass) => {
    setCenter({
      lat: card.geometry.location.lat,
      lng: card.geometry.location.lng,
    });
    setPlace(card);
    setShowDetail(!showDetail);
  };

  const goToList = () => {
    if (showDetail) {
      setShowDetail(!showDetail);
    } else if (showList) {
      setShowList(!showList);
    }
  };
  const handleShowList = () => {
    setShowList(true);
  };
  // useEffect(() => {
  //   console.log('center', center);
  //   data(center);
  // }, [placesList]);
  // console.log('places', placesList);
  return (
    <>
      {showList && (
        <div className="w-full absolute top-20 z-10 md:flex flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-hearthstone_bg shadow-black no-scrollbar py-3 text-white md:w-1/4 h-[89.5%]">
          <div className="flex items-center mt-12 md:justify-center">
            <Image
              className="md:hidden p -9"
              src={back}
              alt={'left'}
              onClick={goToList}
            />
            <h1 className="text-5xl flex z-10 md:text-7xl text-white drop-shadow-lg">
              SHOPS
            </h1>
          </div>

          {showDetail ? (
            <div className="mt-12 mx-9 ">
              <ShopDetail
                place={place as PlaceClass}
                clickBack={() => {
                  setShowDetail(!showDetail);
                }}
              />
            </div>
          ) : (
            <div className="mt-12 mx-9">
              {places.map((place, index) => (
                <div key={index}>
                  <ShopCard
                    name={place.name}
                    address={place.vicinity}
                    open={place.opening_hours?.open_now ? 'Open' : 'Closed'}
                    schedule={
                      place.opening_hours?.weekday_text
                        ? place.opening_hours?.weekday_text[0].replace(
                            'Monday:',
                            ''
                          )
                        : 'n/a'
                    }
                    phone={place.phone}
                    clickCard={() => goToDetail(place)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Maps places={places} center={center} clickBack={handleShowList}></Maps>
    </>
  );
}
