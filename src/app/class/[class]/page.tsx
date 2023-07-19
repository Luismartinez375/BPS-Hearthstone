import Image from 'next/image';
import down from '../../../../public/Keyboard arrow down brown.svg';
import mage_emblem from '../../../../public/mage_emblem/mage emblem@3x.webp';

export default function page({ CardData }: any) {
  return (
    <>
      <div className=" sm:bg-mage_bg bg-mage_bg_sm bg-center  h-screen flex flex-col justify-around ">
        <div className="flex flex-row items-center justify-around max-sm:flex-col max-sm:gap-10">
          <div className="flex flex-row items-center">
            <Image
              className="max-sm:w-2/3"
              src={mage_emblem}
              width={266}
              height={266}
              alt="mage"
            ></Image>
            <p className=" text-8xl text-white font-outline-4 text-shadow-lg shadow-black max-sm:text-5xl max-sm:font-outline-2">
              Mage
            </p>
          </div>

          <button className=" max-sm:w-36 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-52 flex flex-col justify-center items-center justify-self-end">
            <p className="bg-accents_2 w-[200px] max-sm:w-[135px] h-[52px] text-brown text-center p-3 rounded-full flex flex-row justify-center">
              Classes <Image src={down} alt="" className=""></Image>
            </p>
          </button>
        </div>
        <div className="flex flex-col gap-10 ">
          <h1 className=" text-accents font-outline-2 text-6xl text-center text-shadow self-center shadow-black max-sm:text-3xl max-sm:font-outline-1 max-sm:w-3/4 ">
            My magic will tear you apart!
          </h1>
          <p className=" font-sans text-2xl text-shadow self-center shadow-black text-white w-2/3 text-center max-sm:w-3/4 max-sm:text-lg">
            No other hero wields the arcane with as much skill and raw power as
            a Mage. Using their unrivaled array of spells, Mages can wipe entire
            boards of minions, deal devastating amounts of damage directly to
            their enemy, or summon creatures of pure energy to do their bidding.
          </p>
        </div>
      </div>
    </>
  );
}
