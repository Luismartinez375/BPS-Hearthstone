import Class from '@/app/components/class/class';
import Filter from '@/app/components/filters/filter';
import { getCards } from '../../../../lib/getClassCards';

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
      <Filter cardClass={cardClass} cards={cards ? cards : []}></Filter>
    </div>
  );
}
