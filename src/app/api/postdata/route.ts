import { NextResponse } from 'next/server';
import { createRecord } from '../../../../lib/db';
import { CardClass } from '../../../../types';

export async function PUT(request: Request) {
  const card: CardClass = await request.json();
  const queryText =
    'INSERT INTO cards (cardid, cardname, cardset, type, rarity, attack, health, text, race, playerclass, img, mechanics) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
  //   const values = [
  //     card.cardId,
  //     card.cardName,
  //     card.cardSet,
  //     card.type,
  //     card.rarity,
  //     card.attack,
  //     card.health,
  //     card.text,
  //     card.race,
  //     card.playerClass,
  //     card.img,
  //     card.mechanics,
  //   ];

  const result = await createRecord(queryText, [
    card.cardid,
    card.cardname,
    card.cardset,
    card.type,
    card.rarity,
    card.attack,
    card.health,
    card.text,
    card.race,
    card.playerclass,
    card.img,
    card.mechanics,
  ]);
  const crd: CardClass = await result.rows[0];
  return NextResponse.json(crd, { status: 201 });
}
