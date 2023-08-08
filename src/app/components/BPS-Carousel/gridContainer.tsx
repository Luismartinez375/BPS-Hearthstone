import Image from 'next/image';
import { useEffect, useState } from 'react';
import left from '../../../../public/Arrow left.svg';
import right from '../../../../public/Arrow right.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import CarouselGrid from './carouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);
  let [startMobileIndex, setMobileStartIndex] = useState(0);
  let [endMobileIndex, setMobileEndIndex] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [mobileSlide, setMobileSlide] = useState(1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const smallerListsMobile = SplitIntoSmallerLists(cards, 1);
  const eightMobile = smallerListsMobile.getItemsBetweenIndexes(startMobileIndex, endMobileIndex);
  const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  const tailMobile = smallerListsMobile.getTail();
  const tail = smallerLists.getTail();
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    let f = document.getElementById(mobileSlide.toString());
    console.log(mobileSlide);
    f?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [currentSlide,mobileSlide]);

  function handleNextIndex() {
    startIndex = startIndex + 5;
    endIndex = endIndex + 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }
  function handlePreviousIndex() {
    startIndex = startIndex - 5;
    endIndex = endIndex - 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  function handleSlideRight() {
    if (currentSlide === 5) {
      handleNextIndex();
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === 1) {
      handlePreviousIndex();
      setCurrentSlide(5);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function handleFirst() {
    setCurrentSlide(1);
  }
  function handleSecond() {
    setCurrentSlide(2);
  }
  function handleThird() {
    setCurrentSlide(3);
  }
  function handleFourth() {
    setCurrentSlide(4);
  }
  function handleFifth() {
    setCurrentSlide(5);
  }
  // Mobile
  function handleMobileNextIndex() {
    startMobileIndex = startMobileIndex + 5;
    endMobileIndex = endMobileIndex + 5;
    setMobileStartIndex(startMobileIndex);
    setMobileEndIndex(endMobileIndex);
  }
  function handleMobilePreviousIndex() {
    startMobileIndex = startMobileIndex - 5;
    endMobileIndex = endMobileIndex - 5;
    setMobileStartIndex(startMobileIndex);
    setMobileEndIndex(endMobileIndex);
  }

  function handleMobileSlideRight() {
    if (currentSlide === 5) {
      handleMobileNextIndex();
      setMobileSlide(1);
    } else {
      setMobileSlide(mobileSlide + 1);
    }
  }
  function handleMobileSlideLeft() {
    if (mobileSlide === 1) {
      handleMobilePreviousIndex();
      setMobileSlide(5);
    } else {
      setMobileSlide(mobileSlide - 1);
    }
  }
  function handleMobileFirst() {
    setMobileSlide(1);
  }
  function handleMobileSecond() {
    setMobileSlide(2);
  }
  function handleMobileThird() {
    setMobileSlide(3);
  }
  function handleMobileFourth() {
    setMobileSlide(4);
  }
  function handleMobileFifth() {
    setMobileSlide(5);
  }
  return (
    <>
      <div className="max-sm:hidden grid grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-scroll overflow-y-hidden w-screen items-center">
        {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className="max-sm:hidden relative bottom-14 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}
        {/* {eightMobile.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className=" bottom-14"
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))} */}

        <div className="relative bottom-14" id="6">
        </div>
        <button className="absolute left-0" onClick={() =>{handleSlideLeft()}}>
          <Image
            src={left}
            alt="left"
            className="max-sm:w-20 max-sm:h h-20"
          ></Image>
        </button>
        <button
          className="absolute right-0 "
          onClick={() => {handleSlideRight()}}
        >
          <Image
            src={right}
            alt="right"
            className="max-sm:w-20 max-sm:h h-20"
          ></Image>
        </button>
      </div>



      <div className="sm:hidden grid grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-scroll overflow-y-hidden w-screen items-center">
        {/* {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className=" relative bottom-14 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))} */}
        {eightMobile.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className=" bottom-14"
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}

        <div className=" relative bottom-14" id="6">
        </div>
        <button className="absolute left-0" onClick={() =>{handleMobileSlideLeft()}}>
          <Image
            src={left}
            alt="left"
            className="max-sm:w-20 max-sm:h h-20"
          ></Image>
        </button>
        <button
          className="absolute right-0 "
          onClick={() => {handleMobileSlideRight()}}
        >
          <Image
            src={right}
            alt="right"
            className="max-sm:w-20 max-sm:h h-20"
          ></Image>
        </button>
      </div>



      <div className="max-sm:hidden flex flex-row  justify-center items-center rounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 max-sm:gap-0 rounded-full h-[58px] ">
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFirst()}
          >
            {startIndex + 1}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleSecond()}
          >
            {startIndex + 2}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleThird()}
          >
            {startIndex + 3}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFourth()}
          >
            {startIndex + 4}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFifth()}
          >
            {startIndex + 5}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleNextIndex()}
          >
            ...
          </button>
          <button className="max-sm:hidden font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
            {tail?.index}
          </button>
          <button className="sm:hidden font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
            {tailMobile?.index}
          </button>
        </div>
      </div>
      {/* separation */}
      <div className="sm:hidden flex flex-row  justify-center items-center rounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 max-sm:gap-0 rounded-full h-[58px] ">
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() =>  handleMobileFirst()}
          >
            {startMobileIndex + 1}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleMobileSecond()}
          >
            {startMobileIndex + 2}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleMobileThird()}
          >
            {startMobileIndex + 3}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleMobileFourth()}
          >
            {startMobileIndex + 4}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleMobileFifth()}
          >
            {startMobileIndex + 5}
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleMobileNextIndex()}
          >
            ...
          </button>
          <button className="max-sm:hidden font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
            {tail?.index}
          </button>
          <button className="sm:hidden font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
            {tailMobile?.index}
          </button>
        </div>
      </div>
    </>
  );
}
