'use client';
import Image from 'next/image';
import { useState } from 'react';
import favorite_border from '../../../../public/Favorite border.svg';
import favorite from '../../../../public/Favorite.svg';
import book from '../../../../public/book/Mask group@3x.webp';
type CardProps = {
  id: any;
  pic: any;
  name: string;
  type: string;
  rarity: string;
  text: string;
  race: string;
  playerClass: string;
  attack: string;
  health: string;
  mechcanics: any;
  cardSet: string;
  mana: string;
};

export default function Card({
  id,
  pic,
  name,
  type,
  rarity,
  text,
  race,
  playerClass,
  attack,
  health,
  mechcanics,
  cardSet,
  mana,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = async () => {
    const crd = await fetch('http://localhost:3000/api/getcard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardid: id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [{ cardid: '' }];
      }
    });
    if (crd[0].cardid !== '' || undefined) {
      setIsFavorite(true);
    }
  };

  // checkFavorite();

  const handleFavorite = () => {
    if (!isFavorite) {
      fetch('http://localhost:3000/api/postdata', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardid: id,
          cardname: name,
          cardset: cardSet!,
          type: type,
          rarity: rarity!,
          attack: attack!,
          health: health!,
          text: text!,
          race: race!,
          playerclass: playerClass!,
          img: pic!,
          mechanics: [mechcanics?.toString()],
          mana: mana!,
        }),
      });
      setIsFavorite(true);
    }
    if (isFavorite) {
      fetch('http://localhost:3000/api/deletedata', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardid: id,
        }),
      });
      console.log('deleted');
      setIsFavorite(false);
    }
  };
  text = text?.replace(/<b>/g, '');
  text = text?.replace(/<\/b>/g, '');
  text = text?.replace(/<i>/g, '');
  text = text?.replace(/<\/i>/g, '');
  text = text?.replace(/<br>/g, '');
  text = text?.replace(/<br\/>/g, '');
  text = text?.replace(/<br \/>/g, '');
  text = text?.replace(/<br \/>/g, '');
  text = text?.replace('[x]', '');
  text = text?.replace('$', '');
  text = text?.replace('@', '');
  text = text?.replace('_', '');
  text = text?.replace('_and', 'and');
  text = text?.replace('({0} left!)[x]Passive.', '');
  text = text?.replace('(Complete!)', '');
  text = text?.replace(' |4(turn, turns).', '4 turns.');
  text = text?.replace('( left!)', '');

  return (
    <div className="flex flex-col items-center lg:p-8 md:p-5 xl:h-80 2xl:h-96  z-0">
      <div className=" z-0 relative top-10 lg:w-2/3 2xl:w-1/2">
        <Image
          className=""
          src={pic ? pic : book}
          width={154}
          height={216}
          alt="card"
        ></Image>
      </div>
      <div className=" bg-card_bg relative max-sm:left-28  left-1/2 2xl:left-[140px] top-4 rounded-full p-1">
        <div className="flex flex-col bg-card rounded-full">
          <button className="p-1" onClick={handleFavorite}>
            <Image
              src={isFavorite ? favorite : favorite_border}
              width={25}
              height={25}
              alt=""
            ></Image>
          </button>
        </div>
      </div>
      <div className=" h-36 w-36 lg:w-44 xl:w-60 2xl:w-72  2xl:h-40 max-sm:w-60 bg-card_bg flex flex-col justify-center items-center px-0.5 rounded-lg">
        <div className="w-19/20 h-19/20 bg-card flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-black text-center xl:text-lg md:text-xs lg:text-sm">
            {name}
          </h1>
          <div className="text-black font-serif md:text-xs font-thin lg:text-xs 2xl:text-base text-center">
            <p>{type}</p>
            <p>{rarity}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
