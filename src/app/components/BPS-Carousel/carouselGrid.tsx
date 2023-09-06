import { CardClass } from '../../../../types';
import Card from '../card/card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function CarouselGrid({ cardList }: CarouselProps) {
  return (
    <div className="grid grid-cols-5 max-sm:grid-cols-1 md:px-14  relative lg:px-20 max-sm:left-16 2xl:left-4 w-screen">
      {cardList.map((card, index) => (
        <div key={index} className=" w-[40%] h-[40%]">
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
