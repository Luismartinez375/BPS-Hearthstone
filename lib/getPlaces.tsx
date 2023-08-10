import { deserialize } from 'ts-jackson';
import { IdClass, PlaceClass } from '../types';

type IDprops = {
  lat: string;
  lng: string;
};
type props = {
  lat: string;
  lng: string;
};

export async function getIDS({ lat, lng }: IDprops) {
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
  let IDS: IdClass[] = await data.results.map((place: any) => {
    return deserialize(place, IdClass);
  });

  return IDS;
}

export async function getPlaceDetail({ lat, lng }: props) {
  const ids = await getIDS({ lat, lng });
  const placeDetailPromises = await ids.map(async (id) => {
    const res = await fetch(
      'https://maps.googleapis.com/maps/api/place/details/json?place_id=' +
        id.id +
        '&fields=business_status,geometry,name,opening_hours,formatted_phone_number,place_id,rating,vicinity,website' +
        '&key=' +
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    );
    const data = await res.json();
    return data;
  });
  const placeDetails = await Promise.all(placeDetailPromises);
  const places: PlaceClass[] = placeDetails.map((place: any) => {
    return deserialize(place.result, PlaceClass);
  });

  return places;
}
