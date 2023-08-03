import { NextResponse } from 'next/server';
import { createRecord } from '../../../../lib/db';
import { CardClass } from '../../../../types';

export async function POST(card: CardClass) {
  const queryText =
    'INSERT INTO cards (cardId, cardName, cardSet, type, rarity, attack, health, text, race, playerClass, img, mechanics) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
  const values = [
    card.cardId,
    card.cardName,
    card.cardSet,
    card.type,
    card.rarity,
    card.attack,
    card.health,
    card.text,
    card.race,
    card.playerClass,
    card.img,
    card.mechanics,
  ];
  const result = await createRecord(queryText, values);
  return NextResponse.json({ result });
}
