import { NextResponse } from 'next/server';
import { readRecords } from '../../../../lib/db';

// Function to create a new Hearthstone card

// Function to retrieve all Hearthstone cards
export async function GET() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS cards (
    cardId SERIAL PRIMARY KEY, 
    cardName VARCHAR(255) NOT NULL, 
    cardSet VARCHAR(255), 
    type VARCHAR(255), 
    rarity VARCHAR(255), 
    attack VARCHAR(255), 
    health VARCHAR(255), 
    text VARCHAR(255), 
    race  VARCHAR(255), 
    playerClass VARCHAR(255), 
    img VARCHAR(255), 
    mechanics VARCHAR(255)[]
  )
`;

  const queryText = `
  ${createTableQuery};
  SELECT * FROM cards;
`;
  const data = await readRecords(queryText);
  return NextResponse.json({ data });
}

// // Function to retrieve a specific Hearthstone card by id
// export const getCardById = async (id: string): Promise<CardClass | null> => {
//   const queryText = 'SELECT * FROM cards WHERE id = $1';
//   const values = [id];
//   const result = await readRecords(queryText, values);
//   return result[0] || null;
// };
