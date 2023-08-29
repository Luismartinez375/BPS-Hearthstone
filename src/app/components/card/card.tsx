'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    checkFavorite();
  });

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
  name = name?.replace('{0}', '');
  name = name?.replace('-', '');
  name = name?.replace(' - ', ' ');
  name = name?.replace(',', '');
  name = name?.replace(',', '');
  text = text?.replace(/[^\w\s]/g, '');
  name = name.replace(/[^\w\s]/g, ' ');
  name = name.replace('DisplayCriticalDamage', 'Display Critical Damage');

  return (
    <div className="flex flex-col items-center">
      <Image
        className="relative right-2"
        src={pic ? pic : book}
        width={120}
        height={150}
        alt="card"
      ></Image>
      <div className="flex flex-row items-start w-fit">
        <div className=" bg-card_bg p-1 rounded-lg">
          <div className=" bg-card max-sm:w-60  2xl:w-60 lg:w-48 h-32 flex flex-col justify-center rounded-lg">
            <h1 className="text-black text-center text-base">{name}</h1>
            <div className="text-black font-serif text-xs  text-center">
              <p>{type}</p>
              <p>{rarity}</p>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <div className=" bg-card_bg relative bottom-2 right-3 rounded-full p-0.5">
          <div className="flex h-6 w-6 bg-card rounded-full">
            <button className="p-0.5" onClick={handleFavorite}>
              <Image
                src={isFavorite ? favorite : favorite_border}
                width={25}
                height={25}
                alt=""
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
