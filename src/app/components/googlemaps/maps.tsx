'use client';
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '80%',
  height: '900px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function GoogleMaps() {
  const [userPosition, setUserPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [nearbyCardShops, setNearbyCardShops] = useState<{ lat: number; lng: number }[]>([]);
  const center = userPosition || { lat: 0, lng: 0 }; // Center the map on the user's location if available

  useEffect(() => {
    // Fetch the user's current location using the browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    // Fetch nearby card shops using Google Maps Places API when userPosition changes
    if (userPosition) {
      const key = process.env.MAPS_KEY;
      const placesAPIKey = '';
      const radius = 1000; // Define the search radius (in meters) around the user's location

      const request = {
        location: new window.google.maps.LatLng(userPosition.lat, userPosition.lng),
        radius: radius,
        type: 'store', // Adjust the type according to the card shops category in the Places API
        keyword: 'cards', // You can use other keywords specific to card shops
        key: placesAPIKey,
      };

      const service = new window.google.maps.places.PlacesService(document.createElement('div'));

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const cardShops = results?.map((result) => ({
            lat: result.geometry?.location?.lat() || 0,
            lng: result.geometry?.location?.lng() || 0,
          })) || [];
      
          setNearbyCardShops(cardShops);
        }
      });
  }}
  , [userPosition]);
  const key = process.env.MAPS_KEY
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  return isLoaded ? (
    <>
      <div className="overflow-y-none">
        <LoadScript googleMapsApiKey={''} libraries={['places']}>
        <GoogleMap mapContainerStyle={containerStyle} center={userPosition ? userPosition : undefined} zoom={10}>
        {userPosition && <Marker position={{ lat: userPosition.lat, lng: userPosition.lng }} />}
        {nearbyCardShops.map((shop, index) => (
          <Marker key={index} position={{ lat: shop.lat, lng: shop.lng }} />
        ))}
        </GoogleMap>
        </LoadScript>
      </div>
    </>
  ) : (
    <>
      <div className="flex gap-10 min-h-screen overflow-y-none items-center justify-center">
        <h1 className="font-AclonicaR text-white text-7xl">Loading...</h1>
      </div>
    </>
  );
}
