import { getPlaces } from '../../../lib/getPlaces';
import Maps from '../components/googlemaps/maps';
import ScrollMaps from '../components/googlemaps/scrollMaps';

export default async function Page() {
  let places = await getPlaces({ lat: '26.3389184', lng: '-98.2122496' });

  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        <h1 className="text-5xl mt-6 flex left-1/4 md:block absolute font-AclonicaR z-10 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg">
          SHOPS
        </h1>
        <Maps places={places}></Maps>
        {/* hidden */}
        <div className="">
          <ScrollMaps />
        </div>
      </div>
    </>
  );
}
