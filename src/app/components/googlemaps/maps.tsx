'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '900px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function GoogleMaps() {
  const key = process.env.MAPS_KEY;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key ? key : '',
  });

  const handleZoomChanged = () => {
    console.log('Zoom');
  };

  return isLoaded ? (
    <>
      <div className="overflow-y-none">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
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
