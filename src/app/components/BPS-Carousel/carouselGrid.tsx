import { CardClass } from '../../../../types';
import Card from '../card/card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function CarouselGrid({ cardList }: CarouselProps) {
  return (
    <div className="grid grid-cols-5 w-screen">
      {cardList.map((card, index) => (
        <div key={index}>
          <Card
            id={card.cardId}
            pic={card.img}
            name={card.cardName}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
            race={card.race}
            playerClass={card.playerClass}
            attack={card.attack}
            health={card.health}
            mechcanics={card.mechanics}
            cardSet={card.cardSet}
          ></Card>
        </div>
      ))}
    </div>
  );
}
