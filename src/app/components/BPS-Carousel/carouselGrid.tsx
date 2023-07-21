import { CardClass } from '../../../../types';
import Card from '../card/card';

type CarouselProps = {
  cards: CardClass[];
};

export default function CarouselGrid({ cards }: CarouselProps) {
  return (
    <div className="grid grid-cols-5 w-screen gap-20">
      {cards.map((card) => (
        <div key={card.cardId} className="flex items-center justify-center">
          <Card
            pic={card.img}
            name={card.cardName}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
          ></Card>
        </div>
      ))}
    </div>
  );
}
