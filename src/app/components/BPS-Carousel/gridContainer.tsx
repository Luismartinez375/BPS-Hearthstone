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
  const [currentSlide, setCurrentSlide] = useState(-1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  const tail = smallerLists.getTail();
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest'});
  }, [currentSlide]);

  function handleNextIndex() {
    if (endIndex >= tail!.index) {
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
    if (startIndex <= 0) {
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
    }else if(currentSlide === -1){
      setCurrentSlide(currentSlide + 3);
    }
     else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === -1){
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
 
      <div className="grid snap-x snap-mandatory grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-scroll items-center">
        {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className=" snap-start bottom-20 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}
         <button className="absolute left-0" onClick={() => handleSlideLeft()}>
          <Image src={left} alt="left"></Image>
        </button>
        <button
          className="absolute right-0 "
          onClick={() => handleSlideRight()}
        >
          <Image src={right} alt="right"></Image>
        </button>
      </div>
     
      <div className="flex flex-row  justify-center items-center rounded-full px-1 text-white">
        <div className=" flex flex-row justify-between gap-10 rounded-full h- [58px]">
          <button
            className={`${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  py-1 px-3 text-lg drop-shadow-lg`}
            onClick={() => handleFirst()}
          >
            {startIndex + 1}
          </button>
          <button
            className={`${startIndex + 2 > tail!.index ? 'hidden' : ''} ${
              startIndex < -1 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleSecond()}
          >
            {startIndex + 2}
          </button>
          <button
            className={`${startIndex + 3 > tail!.index ? 'hidden' : ''} ${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleThird()}
          >
            {startIndex + 3}
          </button>
          <button
            className={`${startIndex + 4 > tail!.index ? 'hidden' : ''}  ${
              startIndex < 0 ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFourth()}
          >
            {startIndex + 4}
          </button>
          <button
            className={`${
              startIndex + 5 > tail!.index ? 'hidden' : ''
            }  rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFifth()}
          >
            {startIndex + 5}
          </button>
          <button
            className={` rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1  py-1 px-3 text-lg drop-shadow-lg ${tail!.index < 1 ? 'hidden' : ''}`}
            onClick={() => handleNextIndex()}
          >
            ...
          </button>
          <button className={` rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 py-1 px-3  text-lg drop-shadow-lg ${tail!.index < 1 ? 'hidden' : ''}`}>
            {tail!.index < 1 ? 1 : tail!.index}
          </button>
        </div>
      </div>
    </>
  );
}
