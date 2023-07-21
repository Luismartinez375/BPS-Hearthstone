import { CardClass } from '../../../../types';
import CarouselGrid from './carouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  const splitIntoSmallerLists = (list: CardClass[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < list.length; i += chunkSize) {
      chunks.push(list.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const smallerLists = splitIntoSmallerLists(cards, 10);
  return (
    <div className=" w-screen flex  overflow-auto">
      {smallerLists.map((smallerList, index) => (
        <div key={index} className="my-8">
          <h2 className="text-2xl font-bold mb-4">Grid {index + 1}</h2>
          <CarouselGrid cards={smallerList} />
        </div>
      ))}
    </div>
  );
}
