'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '995px',
};

const openSlide = () => {
  console.log('open slide');
};
type GoogleMapProps = {
  places: PlaceClass[];
};

export default function Maps({ places }: GoogleMapProps) {
  const libraries = useMemo(() => ['places'], []);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return isLoaded ? (
    <div className=" w-full h-full absolute">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={10}
        // onLoad={onLoad}
        mapContainerClassName="w-full h-full"
      >
        {/* Puedes agregar marcadores u otros elementos aquí */}
        {places.map((place, index) => (
          <div key={index} className=" hover:drop-shadow-blue">
            <Marker
              position={place.geometry.location}
              icon={{ url: 'logo icon_2023-07-28/logo icon.webp' }}
            ></Marker>
          </div>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <>
      <div className="flex gap-10 min-h-screen overflow-y-none items-center justify-center">
        <h1 className="font-AclonicaR text-white text-7xl">Loading...</h1>
      </div>
    </>
  );
}
