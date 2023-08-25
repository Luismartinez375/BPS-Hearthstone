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
  const [currentSlide, setCurrentSlide] = useState(1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  let tail = smallerLists.getTail();
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [currentSlide]);

  const handleConditionChange = () => {
    if (tail === null || tail.index === 0) {
      return true;
    } else {
      return false;
    }
  };

  function handleNextIndex() {
    if (endIndex >= tail!.index - 1) {
      setStartIndex(0);
      setEndIndex(4);
      setCurrentSlide(1);
    } else {
      startIndex = startIndex + 5;
      endIndex = endIndex + 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
    }
  }
  function handlePreviousIndex() {
    if (startIndex < 1) {
      setStartIndex(tail!.index - 4);
      setEndIndex(tail!.index);
      setCurrentSlide(5);
    } else {
      startIndex = startIndex - 5;
      endIndex = endIndex - 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
    }
  }

  function handleSlideRight() {
    if (currentSlide === 5) {
      handleNextIndex();
      setCurrentSlide(1);
    } else if (currentSlide === -1) {
      setCurrentSlide(currentSlide + 3);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === -1) {
      setCurrentSlide(5);
      handlePreviousIndex();
    } else if (currentSlide === 1) {
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
  return (
    <>
      <div
        className={`grid snap-x snap-mandatory grid-cols-6 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-hidden items-center ${
          tail === null ? 'invisible' : ''
        }`}
      >
        {eight.map((list, index) => (
          <div key={index} id={index.toString()} className=" snap-start">
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}
        <button
          disabled={handleConditionChange()}
          className="absolute left-0 z-10"
          onClick={() => handleSlideLeft()}
        >
          <Image src={left} alt="left" width={80} height={80}></Image>
        </button>

        <button
          disabled={handleConditionChange()}
          className="absolute right-0 z-10"
          onClick={() => handleSlideRight()}
        >
          <Image src={right} alt="right" width={80} height={80}></Image>
        </button>
      </div>
      {tail === null && <div className=" p-[299.3px]"></div>}
      <div
        className={`flex flex-row  justify-center items-center rounded-full px-1 text-white py-2 2xl:py-14 ${
          tail === null || tail.index === 0 ? 'invisible' : ''
        }`}
      >
        <div className=" flex flex-row justify-between gap-10 rounded-full">
          <button
            className={`${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  py-1 px-3 text-lg drop-shadow-lg`}
            onClick={() => handleFirst()}
          >
            {startIndex === (tail ? tail!.index : 0)
              ? startIndex
              : startIndex + 1}
          </button>
          <button
            className={`${
              startIndex + 2 > (tail ? tail!.index : 0) ? 'hidden' : ''
            } ${
              startIndex < -1 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleSecond()}
          >
            {startIndex + 2}
          </button>
          <button
            className={`${
              startIndex + 3 > (tail ? tail!.index + 1 : 0) ? 'hidden' : ''
            } ${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleThird()}
          >
            {startIndex + 3}
          </button>
          <button
            className={`${
              startIndex + 4 > (tail ? tail!.index + 1 : 0) ? 'hidden' : ''
            }  ${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFourth()}
          >
            {startIndex + 4}
          </button>
          <button
            className={`${
              startIndex + 5 > (tail ? tail!.index + 1 : 0) ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFifth()}
          >
            {startIndex + 5}
          </button>
          <button
            className={` rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  py-1 px-3 text-lg drop-shadow-lg ${
              (tail ? tail!.index : 0) < 1 ? 'hidden' : ''
            }`}
            onClick={() => handleNextIndex()}
          >
            ...
          </button>
          <button
            className={` rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 py-1 px-3  text-lg drop-shadow-lg ${
              (tail ? tail!.index - 1 : 0) < 1 ? 'hidden' : ''
            }`}
          >
            {(tail ? tail!.index : -1) < 1 ? 1 : tail ? tail!.index : 0}
          </button>
        </div>
      </div>
    </>
  );
}
