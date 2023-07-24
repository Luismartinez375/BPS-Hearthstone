import Image from 'next/image';
import { useState } from 'react';
import favorite_border from '../../../../public/Favorite border.svg';
import favorite from '../../../../public/Favorite.svg';
type CardProps = {
  pic: any;
  name: string;
  type: string;
  rarity: string;
  text: string;
  effect?: string;
};

export default function Card({
  pic,
  name,
  type,
  rarity,
  text,
  effect,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };
  return (
    <div className="flex flex-col items-center lg:p-8 md:p-5  z-0">
      <div className=" z-0 relative top-10 w-2/3">
        <Image className="" src={pic} alt="card"></Image>
      </div>
      <div className=" bg-card_bg relative left-1/2 top-4 rounded-full p-1">
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
      <div className=" h-32 w-36 lg:w-44 xl:w-60 bg-card_bg flex flex-col justify-center items-center px-0.5 rounded-lg">
        <div className="w-19/20 h-19/20 bg-card flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-black text-center xl:text-lg md:text-xs lg:text-sm">{name}</h1>
          <div className="text-black font-serif md:text-xs font-thin lg:text-xs text-center">
            <p>{type}</p>
            <p>{rarity}</p>
            <p>{text}</p>
            <p>{effect}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
