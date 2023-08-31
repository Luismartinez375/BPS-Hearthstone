import Image from 'next/image';
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import back from '../../../../public/heroicons-outline_arrow-left.svg';
import clock from '../../../../public/heroicons-outline_clock.svg';
import globe from '../../../../public/heroicons-outline_globe-alt.svg';
import pin from '../../../../public/heroicons-outline_map-pin.svg';
import phone from '../../../../public/heroicons-outline_phone.svg';
import { PlaceClass } from '../../../../types';
type DetailShopProps = {
  place: PlaceClass;
  clickBack: () => void;
};

export default function ShopDetail({ place, clickBack }: DetailShopProps) {
  let website = '';
  if (place.website === undefined) {
    website = '';
  } else {
    website = place.website as string;
  }

  return (
    <div className="flex flex-col justify-start">
      <div className="text-white font-AclonicaR">
        <button className="flex" onClick={clickBack}>
          <Image className=" md:block" src={back} alt={'Lef Arrow Icon'} />
          <p className="text-2xl mx-3">{place.name}</p>
        </button>
        <div
          className={`flex  my-5 text-xs ${
            place.vicinity == undefined ? 'hidden' : ''
          }`}
        >
          <Image src={pin} height={20} width={20} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{place.vicinity}</p>
        </div>
        <div
          className={`flex ${place.opening_hours == undefined ? 'hidden' : ''}`}
        >
          <Image src={clock} alt={'Lef Arrow Icon'} />
          <p
            className={`${
              place.opening_hours === undefined
                ? ''
                : place.opening_hours!.open_now!
                ? 'text-cyan-500'
                : 'text-red-700'
            } mx-3`}
          >
            {place.opening_hours === undefined
              ? ''
              : place.opening_hours.open_now == true
              ? 'Open'
              : 'Closed'}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <table className="ml-2 mt-3">
            {place.opening_hours === undefined
              ? ''
              : place.opening_hours.weekday_text.map(
                  (
                    day:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | PromiseLikeOfReactNode
                      | null
                      | undefined,
                    index: Key | null | undefined
                  ) => (
                    <div className="pb-2" key={index}>
                      {day}
                    </div>
                  )
                )}
          </table>
          <div
            className={`flex  ${place.website == undefined ? 'hidden' : ''}`}
          >
            <Image src={globe} alt=""></Image>
            <p className="ml-3">
              {website.length > 30
                ? website.slice(0, website.length / 2) +
                  '\n' +
                  website.slice(website.length / 2, website.length)
                : website}
            </p>
            <p className="mx -3">{}</p>
          </div>
          <div className={`flex ${place.phone == undefined ? 'hidden' : ''}`}>
            <Image src={phone} alt=""></Image>
            <p className="mx-3">{place.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
