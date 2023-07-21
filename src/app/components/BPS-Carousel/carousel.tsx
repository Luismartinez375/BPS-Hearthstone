export default function Carousel() {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const totalSlides = 6; // Number of slides/items in the carousel
  // const itemsPerRow = 3;

  // const nextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  // };
  return (
    <div className="relative h-1/2 w-full overflow-x-auto">
      <div
        className=" transition-transform duration-300 ease-in-out"
        // style={{
        //   transform: `translateX(-${currentSlide * (100 / itemsPerRow)}%)`,
        // }}
      >
        {/* {cards.map((card) => (
          <div key={card.cardId} className="flex items-center justify-center">
            <Card
              pic={card.img}
              name={card.cardName}
              type={card.type}
              rarity={card.rarity}
              text={card.text}
            ></Card>
          </div>
        ))} */}
      </div>
      {/* <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        Next
      </button> */}
    </div>
  );
}
