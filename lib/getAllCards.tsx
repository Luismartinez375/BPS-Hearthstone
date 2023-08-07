import { deserialize } from 'ts-jackson';
import { CardClass } from '../types';
export async function getAllCards(searchTerm: string) {
  const key = process.env.API_KEY;
  try {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${searchTerm}`,
      {
        headers: {
          'X-RapidAPI-Key': key ? key : '',
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
