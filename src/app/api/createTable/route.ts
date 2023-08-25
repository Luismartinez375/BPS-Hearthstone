import { NextResponse } from 'next/server';
import { readRecords } from '../../../../lib/db';

// Function to create a new Hearthstone card

// Function to retrieve all Hearthstone cards
export async function GET(request: Request) {
  const createTableQuery = `
    CREATE TABLE cards (
      cardId VARCHAR(255) PRIMARY KEY,
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
      mechanics VARCHAR(255)[],
      mana VARCHAR(255)
    )
  `;
  const data = await readRecords(createTableQuery);
  return NextResponse.json({ data });
}
