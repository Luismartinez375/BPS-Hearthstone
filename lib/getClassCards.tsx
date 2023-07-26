import { deserialize } from 'ts-jackson';
import { CardClass } from '../types';
export async function getCards(className: string) {
  try {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`,
      {
        headers: {
          'X-RapidAPI-Key':
            '8039f3c44bmsh6f79d6ce1753b85p17a019jsn4772e6c06597',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    let cards: CardClass[] = await data.map((card: any) => {
      return deserialize(card, CardClass);
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}
