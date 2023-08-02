// import { useEffect, useState } from 'react';
import { getPlaceDetail } from '../../../lib/getPlaces';
import ScrollMaps from '../components/googlemaps/scrollMaps';

interface HomeProps {
  params: {};
  searchParams: {
    lat: string;
    lng: string;
  };
}

export default async function Page(props: HomeProps) {
  console.log('props', props.searchParams.lat, props.searchParams.lng);
  let places = await getPlaceDetail({
    lat: props.searchParams.lat,
    lng: props.searchParams.lng,
  });

  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        <h1 className="text-5xl mt-6 flex left-1/4 md:block absolute font-AclonicaR z-10 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg">
          SHOPS
        </h1>

        {/* hidden */}
        <div className="">
          <ScrollMaps places={places} />
        </div>
      </div>
    </>
  );
}
