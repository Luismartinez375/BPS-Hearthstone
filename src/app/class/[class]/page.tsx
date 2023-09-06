import Class from '@/app/components/class/class';
import Filter from '@/app/components/filters/filter';
import { getCards } from '../../../../lib/getClassCards';

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
    case 'Rogue':
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
  const key = process.env.API_KEY;
  const response = await fetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    {
      headers: {
        'X-RapidAPI-Key': key ? key : '',
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

  return paths;
}

export default async function Page({ params }: { params: { class: string } }) {
  const { class: cardClass } = params;
  const cards = await getCards(cardClass);

  return (
    <div className="">
      <Class cardClass={cardClass}></Class>
      <div
        className={` ${getBackgroundClass(
          cardClass.replace('%20', '')
        )} sm:bg-cover bg-center-custom bg-zoomed-in min-h-screen flex flex-col justify-center`}
      >
        <Filter cardClass={cardClass} cards={cards ? cards : []}></Filter>
      </div>
    </div>
  );
}
