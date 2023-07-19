import Image from 'next/image';
import down from '../../../public/Keyboard arrow down.svg';
import filter from '../../../public/filter.svg';
export default function page() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-hearthstone_bg">
        <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-4xl font-outline-1">
          Favorites
        </h1>
        <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
          <p className="bg-navbar w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
            Manage Filters <Image src={down} alt="" className=""></Image>
          </p>
        </button>
        <div className=" max-sm:hidden flex flex-row w-full justify-around items-center">
          <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
          <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
            <div className=" flex flex-row justify-between bg-navbar rounded-full h-[58px] ">
              <button className=" font-outline-1 mr-1 w-12 text-xl drop-shadow-lg ">
                0
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                1
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                2
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                3
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                4
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                5
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                6
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                7
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                8
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                9
              </button>
              <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
                10+
              </button>
            </div>
          </div>
          <p className=" font-serif font-thin text-white text-xl"> sort by:</p>
          <button className=" max-sm:w-36 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end">
            <p className="bg-navbar w-[250px] max-sm:w-[138px] h-[58px] text-white text-center p-3 rounded-full flex flex-row justify-center items-center">
              Mana:{} <Image src={down} alt="" className=""></Image>
            </p>
          </button>
          <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-40 flex flex-col justify-center items-center justify-self-end">
            <p className="bg-navbar w-[154px] h-[58px] text-white text-center p-3 rounded-full flex flex-row justify-center items-center">
              <Image src={filter} alt="" width={28} height={28}></Image>
              Filters <Image src={down} alt="" className=""></Image>
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
