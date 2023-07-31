'use client';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '995px',
};

const openSlide = () => {
  console.log('open slide');
};

export default function Maps() {
  const libraries = useMemo(() => ['places'], []);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  // const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  // const onLoad = useCallback<NonNullable<GoogleMapProps['onLoad']>>((map) => {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   // const bounds = new window.google.maps.LatLngBounds({
  //   //   lat: latitude,
  //   //   lng: longitude,
  //   // });
  //   // map.fitBounds(bounds);
  //   var center = new google.maps.LatLng(latitude, longitude);
  //   function createMarker(place: google.maps.places.PlaceResult) {
  //     if (!place.geometry || !place.geometry.location) return;

  //     const marker = new google.maps.Marker({
  //       map,
  //       position: place.geometry.location,
  //     });
  //   }
  //   var request = {
  //     query: 'Restaurant',
  //     fields: ['name', 'geometry'],
  //   };
  //   var service = new google.maps.places.PlacesService(map);

  //   service.findPlaceFromQuery(
  //     request,
  //     (
  //       results: google.maps.places.PlaceResult[] | null,
  //       status: google.maps.places.PlacesServiceStatus
  //     ) => {
  //       if (status === google.maps.places.PlacesServiceStatus.OK) {
  //         console.log(results);
  //         for (var i = 0; i < results!.length; i++) {
  //           createMarker(results![i]);
  //         }

  //         // map.setCenter(results![0].geometry!.location!);
  //       }
  //     }
  //   );

  //   setMap(map);
  // }, []);

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
