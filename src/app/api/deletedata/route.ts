import { NextResponse } from 'next/server';
import { deleteRecord } from '../../../../lib/db';
import { CardClass } from '../../../../types';

// Function to delete a Hearthstone card by id
export async function DELETE(request: Request) {
  const card: CardClass = await request.json();
  const queryText = 'DELETE FROM cards WHERE cardID = $1 RETURNING *';
  const crd = await deleteRecord(queryText, [card.cardid]);
  return NextResponse.json(crd, { status: 200 });
}
