'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '995px',
};

const center = {
  lat: 0,
  lng: 0,
};

const openSlide = () => {
  console.log('open slide');
};
async function GetPlaces() {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=1500&type=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  console.log(data);
}

export default function Maps() {
  const libraries = useMemo(() => ['places'], []);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  const handleZoomChanged = () => {
    console.log('Zoom');
  };

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
        onZoomChanged={handleZoomChanged}
        mapContainerClassName="w-full h-full"
      >
        {/* Puedes agregar marcadores u otros elementos aquí */}
        <Marker
          position={{ lat: latitude, lng: longitude }}
          onClick={openSlide}
          icon={{ url: '/logo icon_2023-07-28/logo icon.webp' }}
        />
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
