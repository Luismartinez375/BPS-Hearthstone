'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import ShopCard from './shopCard';
import ShopDetail from './shopDetail';

// type MapsScrollProps = {
//   list?: Array<string>;
//   funct?: (item: any) => void;
// };

export default function ScrollMaps() {
  const ref = useRef(null);

  const [showDetail, setShowDetail] = useState(false);

  const goToDetail = (card: any) => {
    console.log('Go To Detail', card);
    setShowDetail(!showDetail);
  };

  const goToList = () => {
    if (showDetail) {
      setShowDetail(!showDetail);
    } else {
      console.log('Close the sideMenuShops');
    }
  };

  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <div
      className="w-full h-full absolute top-20 z-10 md:flex flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-hearthstone_bg shadow-black no-scrollbar py-3 text-white md:w-1/4 h-screen"
      ref={ref}
      onMouseDown={onMouseDown}
    >
      <div className="flex items-center mt-12 md:justify-center">
        <Image
          className="md:hidden mx-9"
          src={''}
          alt={'left'}
          onClick={goToList}
        />
        <h1 className="text-5xl flex z-10 md:text-7xl text-white drop-shadow-lg">
          SHOPS
        </h1>
      </div>
      {showDetail ? (
        <div className="mt-12 mx-9">
          <ShopDetail
            name={'Anvil Cards'}
            address={'2356 Bisonnet St.'}
            open={'Open'}
            schedule={''}
            phone={'(832) 371-7488'}
            net={'gemmintcardhouse.com'}
            clickBack={() => {
              setShowDetail(!showDetail);
            }}
          />
        </div>
      ) : (
        <div className="mt-12 mx-9">
          {/* ISERT A LOOP TO POPULATE THE SIDE MENU */}
          <div className="">
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Closed'}
              schedule={'Opens 12pm'}
              phone={'(832) 371-7488'}
              clickCard={(card: any) => {
                goToDetail(card);
              }}
            />
          </div>
          <div>
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Open'}
              schedule={'Close 6pm'}
              phone={'(832) 371-7488'}
              clickCard={function (card: any): void {
                goToDetail(card);
              }}
            />
          </div>
          <div className="">
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Closed'}
              schedule={'Opens 12pm'}
              phone={'(832) 371-7488'}
              clickCard={function (card: any): void {
                goToDetail(card);
              }}
            />
          </div>
          <div>
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Open'}
              schedule={'Close 6pm'}
              phone={'(832) 371-7488'}
              clickCard={function (card: any): void {
                goToDetail(card);
              }}
            />
          </div>
          <div className="">
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Closed'}
              schedule={'Opens 12pm'}
              phone={'(832) 371-7488'}
              clickCard={function (card: any): void {
                goToDetail(card);
              }}
            />
          </div>
          <div>
            <ShopCard
              name={'Anvil Cards'}
              address={'2356 Bisonnet St.'}
              open={'Open'}
              schedule={'Close 6pm'}
              phone={'(832) 371-7488'}
              clickCard={function (card: any): void {
                goToDetail(card);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
