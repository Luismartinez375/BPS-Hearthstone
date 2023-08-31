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
  let eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  let tail = smallerLists.getTail();
  let filteredArray = eight.filter((subArray) => subArray.length > 0);

  // console.log(filteredArray[0]);

  // if (eight[0].length === 0) {
  // }
  const handleConditionChange = () => {
    if (tail === null || tail.index === 0) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [currentSlide]);
  function handleNextIndex() {
    if (endIndex >= tail!.index) {
      setStartIndex(0);
      setEndIndex(4);
      setCurrentSlide(0);
    } else {
      startIndex = startIndex + 5;
      endIndex = endIndex + 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
      setCurrentSlide(0);
    }
  }
  function handlePreviousIndex() {
    if (tail!.index < 5) {
      return null;
    } else {
      if (startIndex < 1) {
        setStartIndex(tail!.index - 4);
        setEndIndex(tail!.index);
        setCurrentSlide(4);
      } else {
        startIndex = startIndex - 5;
        endIndex = endIndex - 5;
        setStartIndex(startIndex);
        setEndIndex(endIndex);
        setCurrentSlide(4);
      }
    }
  }

  function handleSlideRight() {
    if (currentSlide === 0 && startIndex + 1 > tail!.index) {
      if (tail!.index < 5) {
        setCurrentSlide(0);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 1 && startIndex + 2 > tail!.index) {
      if (tail!.index < 5) {
        setCurrentSlide(0);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 2 && startIndex + 3 > tail!.index) {
      console.log('HERE');
      if (tail!.index < 5) {
        setCurrentSlide(0);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 3 && startIndex + 4 > tail!.index) {
      if (tail!.index < 5) {
        setCurrentSlide(0);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 4 && startIndex + 5 > tail!.index) {
      if (tail!.index < 5) {
        setCurrentSlide(0);
      } else {
        handleNextIndex();
      }
    } else {
      if (currentSlide === 4) {
        handleNextIndex();
      } else if (currentSlide === -1) {
        setCurrentSlide(currentSlide + 2);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  }
  function handleSlideLeft() {
    if (startIndex <= 0 && currentSlide === 0) {
      return null;
    } else {
      if (currentSlide === -1) {
        setCurrentSlide(4);
        handlePreviousIndex();
      } else if (currentSlide === 0) {
        handlePreviousIndex();
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
  }
  function handleFirst() {
    setCurrentSlide(0);
  }
  function handleSecond() {
    setCurrentSlide(1);
  }
  function handleThird() {
    setCurrentSlide(2);
  }
  function handleFourth() {
    setCurrentSlide(3);
  }
  function handleFifth() {
    setCurrentSlide(4);
  }
  return (
    <>
      <div
        className={`grid grid-cols-5 h-[635px] gap-x-[1800px]  no-scrollbar overflow-x-hidden items-center ${
          tail === null ? 'invisible' : ''
        }`}
      >
        {filteredArray.map((list, index) => (
          <div key={index} id={index.toString()} className="">
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
      {tail === null && <div className=""></div>}
      <div
        className={`flex flex-row  justify-center items-center rounded-full px-1 text-white py-2 2xl:py-14 ${
          tail === null || tail.index === 0 ? 'invisible' : ''
        }`}
      >
        <div className=" flex flex-row justify-between gap-10 rounded-full">
          <button
            className={`${startIndex < 0 ? 'hidden' : ''}  rounded-lg ${
              currentSlide === 0 || currentSlide === -1
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1  py-1 px-3 text-lg drop-shadow-lg`}
            onClick={() => handleFirst()}
          >
            {startIndex === (tail ? tail!.index : 0)
              ? startIndex
              : startIndex + 1}
          </button>

          <button
            className={`${
              startIndex + 1 > (tail ? tail!.index : 0) ? 'hidden' : ''
            } ${startIndex < -1 ? 'hidden' : ''}  rounded-lg ${
              currentSlide === 1
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleSecond()}
          >
            {startIndex + 2}
          </button>

          <button
            className={`${
              startIndex + 2 > (tail ? tail!.index : 0) ? 'hidden' : ''
            } ${startIndex < 0 ? 'hidden' : ''}  rounded-lg ${
              currentSlide === 2
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleThird()}
          >
            {startIndex + 3}
          </button>

          <button
            className={`${
              startIndex + 3 > (tail ? tail!.index : 0) ? 'hidden' : ''
            }  ${startIndex < 0 ? 'hidden' : ''}  rounded-lg ${
              currentSlide === 3
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFourth()}
          >
            {startIndex + 4}
          </button>
          <button
            className={`${
              startIndex + 4 > (tail ? tail!.index : 0) ? 'hidden' : ''
            }  rounded-lg ${
              currentSlide === 4
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } mr-1  text-lg py-1 px-3 drop-shadow-lg`}
            onClick={() => handleFifth()}
          >
            {startIndex + 5}
          </button>
          <button
            className={` rounded-lg mr-1  py-1 px-3 text-lg drop-shadow-lg ${
              (tail ? tail!.index : 0) < 1 ? 'hidden' : ''
            }`}
            onClick={() => {
              handleNextIndex(), setCurrentSlide(0);
            }}
          >
            ...
          </button>
          <button
            className={` rounded-lg  mr-1 py-1 px-3  text-lg drop-shadow-lg ${
              (tail ? tail!.index - 1 : 0) < 1 ? 'hidden' : ''
            }`}
          >
            {(tail ? tail!.index : -1) < 1 ? 1 : tail ? tail!.index + 1 : 0}
          </button>
        </div>
      </div>
    </>
  );
}
