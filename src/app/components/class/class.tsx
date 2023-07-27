'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import downBro from '../../../../public/Keyboard arrow down brown.svg';
import demonhunter_emblem from '../../../../public/demonhunter_emblem/demonhunter emblem@3x.webp';
import druid_emblem from '../../../../public/druid_emblem/druid emblem@3x.webp';
import hunter_emblem from '../../../../public/hunter_emblem/hunter emblem@3x.webp';
import mage_emblem from '../../../../public/mage_emblem/mage emblem@3x.webp';
import paladin_emblem from '../../../../public/paladin_emblem/paladin emblem@3x.webp';
import priest_emblem from '../../../../public/priest_emblem/priest emblem@3x.webp';
import rouge_emblem from '../../../../public/rouge_emblem/rouge emblem@3x.webp';
import shaman_emblem from '../../../../public/shaman_emblem/shaman emblem@3x.webp';
import warlock_emblem from '../../../../public/warlock_emblem/warlock emblem@3x.webp';
import warrior_emblem from '../../../../public/warrior_emblem/warrior emblem@3x.webp';

const classEmblems = {
  Mage: mage_emblem,
  Druid: druid_emblem,
  Hunter: hunter_emblem,
  Priest: priest_emblem,
  Rouge: rouge_emblem,
  Paladin: paladin_emblem,
  Shaman: shaman_emblem,
  DemonHunter: demonhunter_emblem,
  Warlock: warlock_emblem,
  Warrior: warrior_emblem,
};
const classNames = [
  'Mage',
  'Druid',
  'Hunter',
  'Priest',
  'Rouge',
  'Paladin',
  'Shaman',
  'Demon Hunter',
  'Warlock',
  'Warrior',
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
    case 'Demon Hunter':
      return 'bg-demonhunter_bg_sm sm:bg-demonhunter_bg';
    case 'Warlock':
      return 'bg-warlock_bg_sm sm:bg-warlock_bg';
    case 'Warrior':
      return 'bg-warrior_bg_sm sm:bg-warrior_bg';
    default:
      return '';
  }
}
type ClassData = {
  [key: string]: {
    background: string;
    title: string;
    description: string;
  };
};
// Store class data in an object
const classData: ClassData = {
  mage: {
    background: 'bg-mage_bg',
    title: 'My magic will tear you apart!',
    description:
      'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
  },
  druid: {
    background: 'bg-druid_bg_sm sm:bg-druid_bg',
    title: 'Nature will rise against you!',
    description:
      'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
  },
  hunter: {
    background: 'bg-hunter_bg_sm sm:bg-hunter_bg',
    title: 'Let the hunt begin!',
    description:
      'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
  },
  priest: {
    background: 'bg-priest_bg_sm sm:bg-priest_bg',
    title: 'Light smiles upon the just!',
    description:
      'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
  },
  rouge: {
    background: 'bg-rouge_bg_sm sm:rouge_bg',
    title: 'Watch your back!',
    description:
      'Using unseen blade, blinding speed, and subtle poison, Rogues can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
  },
  paladin: {
    background: 'bg-paladin_bg_sm sm:bg-paladin_bg',
    title: 'The Light protects those who wield it.',
    description:
      'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
  },
  shaman: {
    background: 'bg-shaman_bg_sm sm:bg-shaman_bg',
    title: 'Storm, earth and fire, heed my call!',
    description:
      'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
  },
  demonhunter: {
    background: 'bg-demonhunter_bg_sm bg-demonhunter_bg',
    title: 'You are not prepared!',
    description:
      'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
  },
  warlock: {
    background: 'bg-warlock_bg_sm sm:bg-warlock_bg',
    title: 'I am your nightmare!',
    description:
      'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
  },
  warrior: {
    background: 'bg-warrior_bg_sm sm:bg-warrior_bg',
    title: 'Victory or death!',
    description:
      'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
  },
};

type props = {
  cardClass: string;
};

export default function Class({ cardClass }: props) {
  const router = useRouter();
  let lower = cardClass.toLowerCase();
  console.log(lower);
  if (lower === 'demon%20hunter') {
    lower = 'demonhunter';
  }

  const currentClassData = classData[lower];
  const [emblemSrc, setEmblemSrc] = useState(null);
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
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
    <div
      className={` ${getBackgroundClass(
        cardClass.replace('%20', ' ')
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
            {cardClass.replace('%20', ' ')}
          </p>
        </div>

        <div className="flex flex-col">
          <button
            onClick={handleToggle}
            className=" max-sm:w-36 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-52 flex flex-col justify-center items-center justify-self-end"
          >
            <p className="bg-accents_2 w-[200px] max-sm:w-[135px] h-[52px] text-brown text-center p-3 rounded-full flex flex-row justify-center">
              Classes <Image src={downBro} alt="" className=""></Image>
            </p>
          </button>
          {toggle && (
            <div
              className={` bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto p-0.5 z-10 w-56 max-sm:hidden rounded-xl lg:absolute left flex flex-col items-center`}
            >
              <div className="flex flex-col overflow-y-scroll  bg-brown w-19/20 max-h-72 rounded-xl text-shadow-lg shadow-black no-scrollbar">
                {Object.entries(classEmblems).map(([className, emblem]) => (
                  <button
                    key={className}
                    className=" hover:text-accents text-white text-left px-2 py-1 flex flex-row justify-between"
                    onClick={() =>
                      router.push(
                        `/class/${className.replace(
                          'DemonHunter',
                          'Demon Hunter'
                        )}`
                      )
                    }
                  >
                    {className}
                    <Image src={emblem} alt="" width={30} height={30}></Image>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10 ">
        <h1 className=" text-accents font-outline-2 text-6xl text-center text-shadow self-center shadow-black max-sm:text-3xl max-sm:font-outline-1 max-sm:w-3/4 ">
          {currentClassData.title}
        </h1>
        <p className=" font-sans text-2xl text-shadow self-center shadow-black text-white w-2/3 text-center max-sm:w-3/4 max-sm:text-lg">
          {currentClassData.description}
        </p>
      </div>
    </div>
  );
}
