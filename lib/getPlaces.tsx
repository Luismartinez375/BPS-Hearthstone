import { deserialize } from 'ts-jackson';
import { PlaceClass } from '../types';

type props = {
  lat: string;
  lng: string;
};

export async function getPlaces({ lat, lng }: props) {
  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    lat +
    ',' +
    lng +
    '&radius=10000' +
    '&type=store' +
    '&key=' +
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  let places: PlaceClass[] = await data.results.map((place: any) => {
    return deserialize(place, PlaceClass);
  });
  console.log(data);
  return places;
}
