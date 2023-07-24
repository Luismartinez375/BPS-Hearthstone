import { CardClass, SplitIntoSmallerLists, } from '../../../../types';
import CarouselGrid from './carouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const eight = smallerLists.getItemsBetweenIndexes(0, 8);
  const last = smallerLists.getTail();
  return (
    <div className='grid grid-cols-10 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] overflow-auto w-screen h-full'>
    {eight.map((list,index) => (
      <div key={index} className='relative md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px]'>
      <CarouselGrid cardList={list} ></CarouselGrid>
      </div>  
    ))}
  <CarouselGrid cardList={last ? last : []} key={9}></CarouselGrid>
    </div>
  );
}
