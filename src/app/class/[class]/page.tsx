'use client';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCards } from '../../../../lib/getClassCards';
import downBro from '../../../../public/Keyboard arrow down brown.svg';
import down from '../../../../public/Keyboard arrow down.svg';
import filter from '../../../../public/filter.svg';
import HearthButton from '../../components/button/hearthbutton';
import HearthScroll from '../../components/hearthScroll/hearthScroll';

const mana = ['Mana: low to high', 'Mana: high to low'];
const atk = [
  'Any Attack',
  'Attack: 0',
  'Attack: 1',
  'Attack: 2',
  'Attack: 3',
  'Attack: 4',
  'Attack: 5',
  'Attack: 6',
  'Attack: 7',
  'Attack: 8',
  'Attack: 9',
  'Attack: 10+',
];
const health = [
  'Any Health',
  'Health: 0',
  'Health: 1',
  'Health: 2',
  'Health: 3',
  'Health: 4',
  'Health: 5',
  'Health: 6',
  'Health: 7',
  'Health: 8',
  'Health: 9',
  'Health: 10+',
];

const cardType = ['Any Type', 'Hero', 'Minion', 'Spell', 'Weapon', 'Location'];

const minionType = [
  'Any Type',
  'All',
  'Beast',
  'Demon',
  'Dragon',
  'Elemental',
  'Mech',
  'Murloc',
  'Naga',
  'Pirate',
  'Quilboar',
  'Totem',
  'Undead',
];

const rarity = ['Any Rarity', 'Common', 'Free', 'Rare', 'Epic', 'Legendary'];

const keywords = [
  'Any Keyword',
  'Adapt',
  'Battlecry',
  'Charge',
  'Colosal +X',
  'Combo',
  'Corpse',
  'Corrupt',
  'Counter',
  'Deathrattle',
];
function getBackgroundClass(classId: string): string {
  switch (classId) {
    case 'Mage':
      return ' bg-mage_bg';
    case 'Hunter':
      return 'bg-hunter_bg_sm sm:bg-hunter_bg';
    case 'Druid':
      return 'bg-druid_bg_sm sm:bg-druid_bg';
    case 'Priest':
      return 'bg-priest_bg_sm sm:bg-priest_bg';
    case 'Rouge':
      return 'bg-rouge_bg_sm sm:rouge_bg';
    case 'Paladin':
      return 'bg-paladin_bg_sm sm:bg-paladin_bg';
    case 'Shaman':
      return 'bg-shaman_bg_sm sm:bg-shaman_bg';
    case 'DemonHunter':
      return 'bg-demonhunter_bg_sm sm:bg-demonhunter_bg';
    case 'Warlock':
      return 'bg-warlock_bg_sm sm:bg-warlock_bg';
    case 'Warrior':
      return 'bg-warrior_bg_sm sm:bg-warrior_bg';
    default:
      return '';
  }
}

export async function generateStaticParams(): Promise<any[]> {
  const response = await fetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    {
      headers: {
        'X-RapidAPI-Key': '8039f3c44bmsh6f79d6ce1753b85p17a019jsn4772e6c06597',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    }
  );
  const data = await response.json();
  const classes = data.classes;

  // Generate dynamic paths for each card class
  const paths = classes.map((cardClass: string) => ({
    params: { class: cardClass },
  }));
  console.log(paths);

  return paths;
}

export default function Page({ params }: { params: { class: string } }) {
  const searchParams = useSearchParams();
  const search = searchParams.get('text');
  const search2 = searchParams.get('text2');
  const { class: cardClass } = params;

  const cards = getCards(cardClass);
  console.log(cards);
  console.log(cardClass);
  const lower = cardClass.toLowerCase();

  const [emblemSrc, setEmblemSrc] = useState(null);

  // Handles the scroll

  // Toggles for buttons
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  // Switch filters
  const [manafilter, userManafilter] = useState(mana[0]);

  //Toggle functions
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
  }
  function toggleAttack() {
    userAttackToggle(attackToggle ? false : true);
  }
  function toggleHealth() {
    userHealthToggle(healthToggle ? false : true);
  }
  function toggleCardType() {
    userCardTypeToggle(cardTypeToggle ? false : true);
  }
  function toggleMinionType() {
    userMinionTypeToggle(minionTypeToggle ? false : true);
  }
  function toggleRarity() {
    userRarityToggle(rarityToggle ? false : true);
  }
  function toggleKeywords() {
    userKeywordsToggle(keywordsToggle ? false : true);
  }

  //Filter functions
  function userManaFilter() {
    if (manafilter === mana[0]) {
      toggleMana();
      userManafilter(mana[1]);
      toggleMana();
    } else if (manafilter === mana[1]) {
      userManafilter(mana[0]);
    }
  }
  function userAttackFilter() {}
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(1);
  // const smallerLists = SplitIntoSmallerLists(cards, 10);
  // const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  // const last = smallerLists.getTail();
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [currentSlide]);

  function handleNextIndex() {
    startIndex = startIndex + 5;
    endIndex = endIndex + 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }
  function handlePreviousIndex() {
    startIndex = startIndex - 5;
    endIndex = endIndex - 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  function handleSlideRight() {
    if (currentSlide === 5) {
      handleNextIndex();
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === 1) {
      handlePreviousIndex();
      setCurrentSlide(5);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function handleFirst() {
    setCurrentSlide(1);
  }
  function handleSecond() {
    setCurrentSlide(2);
  }
  function handleThird() {
    setCurrentSlide(3);
  }
  function handleFourth() {
    setCurrentSlide(4);
  }
  function handleFifth() {
    setCurrentSlide(5);
  }

  useEffect(() => {
    import(`public/${lower}_emblem/${lower} emblem@3x.webp`)
      .then((image) => {
        setEmblemSrc(image.default);
      })
      .catch((error) => console.error('Error loading image:', error));
  }, [cardClass]);

  if (!emblemSrc) {
    return <div>Loading...</div>; // Return a loading indicator if the image hasn't loaded yet
  }

  return (
    <>
      <div
        className={` ${getBackgroundClass(
          cardClass
        )} sm:bg-cover bg-center-custom bg-zoomed-in  h-screen flex flex-col justify-around `}
      >
        <div className="flex flex-row items-center justify-around max-sm:flex-col max-sm:gap-10">
          <div className="flex flex-row items-center">
            <Image
              className="max-sm:w-2/3"
              src={emblemSrc}
              width={266}
              height={266}
              alt="mage"
            ></Image>
            <p className=" text-8xl text-white font-outline-4 text-shadow-lg shadow-black max-sm:text-5xl max-sm:font-outline-2">
              {/* HERE */}
              {cardClass}
            </p>
          </div>

          <button className=" max-sm:w-36 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-52 flex flex-col justify-center items-center justify-self-end">
            <p className="bg-accents_2 w-[200px] max-sm:w-[135px] h-[52px] text-brown text-center p-3 rounded-full flex flex-row justify-center">
              Classes <Image src={downBro} alt="" className=""></Image>
            </p>
          </button>
        </div>
        <div className="flex flex-col gap-10 ">
          <h1 className=" text-accents font-outline-2 text-6xl text-center text-shadow self-center shadow-black max-sm:text-3xl max-sm:font-outline-1 max-sm:w-3/4 ">
            {search}
          </h1>
          <p className=" font-sans text-2xl text-shadow self-center shadow-black text-white w-2/3 text-center max-sm:w-3/4 max-sm:text-lg">
            {search2}
          </p>
        </div>
      </div>
      <>
        <div
          className={` ${getBackgroundClass(
            cardClass
          )} sm:bg-cover bg-center-custom bg-zoomed-in  h-screen flex flex-col`}
        >
          <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
          <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
            <p className="bg-navbar w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
              Manage Filters <Image src={down} alt="" className=""></Image>
            </p>
          </button>
          {/* Filter Row */}
          <div className=" max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5">
            {/* Mana bar */}
            <div className="flex flex-row items-center gap-2">
              <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
              <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
                <div className=" flex flex-row justify-between bg-button_bg rounded-full h-[58px] ">
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
            </div>
            {/*Sortby Row */}
            <div className="flex flex-row gap-5 items-start">
              <p className=" font-serif font-thin text-white text-xl">
                sort by:
              </p>
              <div className=" flex flex-col items-center gap-4 ">
                <HearthButton
                  text={manafilter}
                  width={'64'}
                  innerwidth={'250'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleMana}
                ></HearthButton>
                {manaToggle && (
                  <HearthScroll
                    list={mana}
                    funct={userManaFilter}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <HearthButton
                text={'Filter'}
                width={'52'}
                innerwidth={'200'}
                color="button_bg"
                image={filter}
                funct={toggleFilter}
              ></HearthButton>
            </div>
          </div>

          {/* Filters row */}
          {filterToggle && (
            <div className="grid gap-10 py-5  lg:grid-cols-6 grid-cols-3 max-sm:hidden">
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Attack'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleAttack}
                ></HearthButton>
                {attackToggle && (
                  <HearthScroll
                    list={atk}
                    funct={toggleAttack}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Health'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleHealth}
                ></HearthButton>
                {healthToggle && (
                  <HearthScroll
                    list={health}
                    funct={toggleHealth}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Card Type'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleCardType}
                ></HearthButton>
                {cardTypeToggle && (
                  <HearthScroll
                    list={cardType}
                    funct={toggleCardType}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Minion Type'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleMinionType}
                ></HearthButton>
                {minionTypeToggle && (
                  <HearthScroll
                    list={minionType}
                    funct={toggleMinionType}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Rarity'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleRarity}
                ></HearthButton>
                {rarityToggle && (
                  <HearthScroll
                    list={rarity}
                    funct={toggleRarity}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <HearthButton
                  text={'Keywords'}
                  width={'52'}
                  innerwidth={'200'}
                  color={'button_bg'}
                  image2={down}
                  funct={toggleKeywords}
                ></HearthButton>
                {keywordsToggle && (
                  <HearthScroll
                    list={keywords}
                    funct={toggleKeywords}
                    percent="110"
                    percent2="122"
                  ></HearthScroll>
                )}
              </div>
            </div>
          )}
          {/* <GridContainer cards={cards}></GridContainer> */}
        </div>
      </>
    </>
  );
}

// export async function generateStaticParams({
//   params,
// }: {
//   params: { class: string };
// }) {
//   // Fetch the cards for the specified class from the API
//   const response = await fetch(
//     `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${params.class}`,
//     {
//       headers: {
//         'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
//         'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
//       },
//     }
//   );
//   const cards = await response.json();

//   return { props: { cards } };
// }
