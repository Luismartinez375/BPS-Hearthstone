import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '100%',
};
type GoogleMapProps = {
  places: PlaceClass[];
  center: any;
  clickBack: () => void;
};

export default function Maps({ places, center, clickBack }: GoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'] as any,
  });

  return isLoaded ? (
    <div className=" w-full h-full absolute">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        // onLoad={onLoad}
        mapContainerClassName="w-full h-full"
      >
        {/* Puedes agregar marcadores u otros elementos aquí */}
        {places.map((place, index) => (
          <div key={index} className=" hover:drop-shadow-blue">
            <Marker
              onClick={clickBack}
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
