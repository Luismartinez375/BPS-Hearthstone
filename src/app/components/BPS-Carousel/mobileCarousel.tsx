import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import left from '../../../../public/Arrow left.svg';
import right from '../../../../public/Arrow right.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import CarouselGrid from './carouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function MobileCarousel({ cards }: CarouselProps) {
  let [startMobileIndex, setMobileStartIndex] = useState(0);
  let [endMobileIndex, setMobileEndIndex] = useState(4);
  const [mobileSlide, setMobileSlide] = useState(-1);
  const smallerListsMobile = SplitIntoSmallerLists(cards, 1);
  const eightMobile = smallerListsMobile.getItemsBetweenIndexes(
    startMobileIndex,
    endMobileIndex
  );
  const mobileRef = useRef<HTMLDivElement>(null);
  const tailMobile = smallerListsMobile.getTail();
  let filteredArray = eightMobile.filter((subArray) => subArray.length > 0);
  useEffect(() => {
    let f = document.getElementById(mobileSlide.toString());
    console.log(mobileSlide);
    f?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [mobileSlide]);
  const handleConditionChange = () => {
    if (tailMobile === null || tailMobile.index === 0) {
      return true;
    } else {
      return false;
    }
  };
  // Mobile
  function handleMobileNextIndex() {
    if (endMobileIndex >= tailMobile!.index) {
      setMobileStartIndex(0);
      setMobileEndIndex(4);
      setMobileSlide(0);
    } else {
      startMobileIndex = startMobileIndex + 5;
      endMobileIndex = endMobileIndex + 5;
      setMobileStartIndex(startMobileIndex);
      setMobileEndIndex(endMobileIndex);
      setMobileSlide(0);
    }
  }
  function handleMobilePreviousIndex() {
    if (tailMobile!.index < 5) {
      return null;
    } else {
      if (startMobileIndex < 1) {
        setMobileStartIndex(tailMobile!.index - 4);
        setMobileEndIndex(tailMobile!.index);
        setMobileSlide(4);
      } else {
        startMobileIndex = startMobileIndex - 5;
        endMobileIndex = endMobileIndex - 5;
        setMobileStartIndex(startMobileIndex);
        setMobileEndIndex(endMobileIndex);
        setMobileSlide(4);
      }
    }
  }

  function handleMobileSlideRight() {
    if (mobileSlide === 0 && startMobileIndex + 1 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 1 && startMobileIndex + 2 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 2 && startMobileIndex + 3 > tailMobile!.index) {
      console.log('HERE');
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 3 && startMobileIndex + 4 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 4 && startMobileIndex + 5 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else {
      if (mobileSlide === 4) {
        handleMobileNextIndex();
      } else if (mobileSlide === -1) {
        setMobileSlide(mobileSlide + 2);
      } else {
        setMobileSlide(mobileSlide + 1);
      }
    }
  }
  function handleMobileSlideLeft() {
    if (startMobileIndex <= 0 && mobileSlide === 0) {
      return null;
    } else {
      if (mobileSlide === -1) {
        setMobileSlide(4);
        handleMobilePreviousIndex();
      } else if (mobileSlide === 0) {
        handleMobilePreviousIndex();
      } else {
        setMobileSlide(mobileSlide - 1);
      }
    }
  }
  function handleMobileFirst() {
    setMobileSlide(0);
  }
  function handleMobileSecond() {
    setMobileSlide(1);
  }
  function handleMobileThird() {
    setMobileSlide(2);
  }
  function handleMobileFourth() {
    setMobileSlide(3);
  }
  function handleMobileFifth() {
    setMobileSlide(4);
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center h-full pt-10">
        <button
          disabled={handleConditionChange()}
          className=" left-0"
          onClick={() => {
            handleMobileSlideLeft();
          }}
        >
          <Image
            src={left}
            alt="left"
            className=""
            width={650}
            height={650}
          ></Image>
        </button>
        <div
          ref={mobileRef}
          className={`sm:hidden snap-x grid grid-cols-5 h-full no-scrollbar overflow-x-hidden gap-x-[500px] items-center ${
            tailMobile ? '' : 'invisible p-44'
          }`}
        >
          {filteredArray.map((list, index) => (
            <div
              key={index}
              id={index.toString()}
              className=" bottom-14 snap-start"
            >
              <CarouselGrid cardList={list}></CarouselGrid>
            </div>
          ))}
        </div>
        <button
          disabled={handleConditionChange()}
          className=" right-0 "
          onClick={() => {
            handleMobileSlideRight();
          }}
        >
          <Image
            src={right}
            alt="right"
            className=""
            height={650}
            width={650}
          ></Image>
        </button>
      </div>
      <div
        className={`sm:hidden  flex flex-row  justify-center items-center rounded-full px-1 py-5 text-white max-sm:text-sm ${
          tailMobile === null || tailMobile.index === 0 ? 'invisible' : ''
        }`}
      >
        <div className=" flex flex-row justify-between gap-10 max-sm:gap-0 rounded-full ">
          <button
            className={`${startMobileIndex < 0 ? 'hidden' : ''} rounded-lg ${
              mobileSlide === 0 || mobileSlide === -1
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } px-3 py-2 drop-shadow-lg`}
            onClick={() => handleMobileFirst()}
          >
            {startMobileIndex === (tailMobile ? tailMobile!.index : 0)
              ? startMobileIndex
              : startMobileIndex + 1}
          </button>

          <button
            className={`${
              startMobileIndex + 1 > (tailMobile ? tailMobile!.index : 0)
                ? 'hidden'
                : ''
            } ${
              startMobileIndex < -1 ? 'hidden' : ''
            } rounded-lg mr-1 px-3 py-2 drop-shadow-lg
            ${
              mobileSlide === 1
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } `}
            onClick={() => handleMobileSecond()}
          >
            {startMobileIndex + 2}
          </button>

          <button
            className={`${
              startMobileIndex + 2 > (tailMobile ? tailMobile!.index : 0)
                ? 'hidden'
                : ''
            } rounded-lg ${
              mobileSlide === 2
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1 px-3 py-2 drop-shadow-lg`}
            onClick={() => handleMobileThird()}
          >
            {startMobileIndex + 3}
          </button>

          <button
            className={`${
              startMobileIndex + 3 > (tailMobile ? tailMobile!.index : 0)
                ? 'hidden'
                : ''
            } rounded-lg ${
              mobileSlide === 3
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1 px-3 py-2 drop-shadow-lg`}
            onClick={() => handleMobileFourth()}
          >
            {startMobileIndex + 4}
          </button>
          <button
            className={`${
              startMobileIndex + 4 > (tailMobile ? tailMobile!.index : 0)
                ? 'hidden'
                : ''
            } rounded-lg ${
              mobileSlide === 4
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1 px-3 py-2 drop-shadow-lg`}
            onClick={() => handleMobileFifth()}
          >
            {startMobileIndex + 5}
          </button>
          <button
            className={`sm:hidden  mr-1 px-3 py-2 drop-shadow-lg ${
              (tailMobile ? tailMobile!.index : 0) < 1 ? 'hidden' : ''
            }`}
            onClick={() => handleMobileNextIndex()}
          >
            ...
          </button>

          <button
            className={`sm:hidden rounded-lg  mr-1 px-3 py-2 drop-shadow-lg ${
              (tailMobile ? tailMobile!.index : 0) < 1 ? 'hidden' : ''
            }`}
          >
            {(tailMobile ? tailMobile!.index : -1) < 1
              ? 1
              : tailMobile
              ? tailMobile!.index + 1
              : 0}
          </button>
        </div>
      </div>
      {tailMobile === null && <div className=" p-14"></div>}
    </>
  );
}
