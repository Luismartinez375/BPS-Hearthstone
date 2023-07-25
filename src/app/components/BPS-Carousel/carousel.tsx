// import { useState } from "react";
// import { CardClass } from "../../../../types";
// import CarouselGrid from "./carouselGrid";

// type CarouselProps = {
//     cards: CardClass[];
// }

// export default function Carousel( { cards }: CarouselProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = 2; // Number of slides/items in the carousel
//   const itemsPerRow = 5; // Number of items to show per row

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };
//   return (
//     <>
//      <div
//         className=" w-screen flex flex-row overflow-auto transition-transform duration-300 ease-in-out"
// style={{
//   transform: `translateX(-${currentSlide * (100 / itemsPerRow)}%)`,
// }}
//       >
//         <CarouselGrid cards={cards}/>
//       </div>
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2"
//         onClick={prevSlide}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2"
//         onClick={nextSlide}
//       >
//         Next
//       </button>
//       </>
//   );
// }
