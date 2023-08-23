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
  return (
    <>
      <div className="text-white font-AclonicaR">
        <div className="flex">
          <Image
            className="hidden md:block"
            src={back}
            alt={'Lef Arrow Icon'}
            onClick={clickBack}
          />
          <p className="text-2xl mx-3">{place.name}</p>
        </div>
        <div className={`flex  my-14 ${place.vicinity == undefined? 'hidden': ''}`}>
          <Image src={pin} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{place.vicinity}</p>
        </div>
        <div className={`flex ${place.opening_hours == undefined? 'hidden': ''}`}>
          <Image src={clock} alt={'Lef Arrow Icon'} />
          <p
            className={`${
             place.opening_hours === undefined ? '' :  place.opening_hours!.open_now! ? 'text-cyan-500' : 'text-red-700'
            } mx-3`}
          >
            { place.opening_hours === undefined ? '' : place.opening_hours.open_now == true ? 'Open' : 'Closed'}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <table className="mx-8">
            {place.opening_hours === undefined ? '' : place.opening_hours.weekday_text.map(
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
                <div className="py-5" key={index}>
                  {day}
                </div>
              )
            ) }
          </table>
          <div className={`flex ${place.website == undefined? 'hidden': ''}`}>
            <Image src={globe} alt=""></Image>
            <p className="mx-3">{place.website}</p>
          </div>
          <div className={`flex ${place.phone == undefined? 'hidden': ''}`}>
            <Image src={phone} alt=""></Image>
            <p className="mx-3">{place.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}
