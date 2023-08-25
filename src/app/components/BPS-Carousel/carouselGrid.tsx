import { CardClass } from '../../../../types';
import Card from '../card/card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function CarouselGrid({ cardList }: CarouselProps) {
  return (
    <div className="grid grid-cols-5 max-sm:grid-cols-1 h- w-screen">
      {cardList.map((card, index) => (
        <div key={index}>
          <Card
            id={card.cardid}
            pic={card.img}
            name={card.cardname}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
            race={card.race}
            playerClass={card.playerclass}
            attack={card.attack}
            health={card.health}
            mechcanics={card.mechanics}
            cardSet={card.cardset}
            mana={card.mana}
          ></Card>
        </div>
      ))}
    </div>
  );
}
