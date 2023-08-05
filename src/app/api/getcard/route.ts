import { NextResponse } from 'next/server';
import { readRecords } from '../../../../lib/db';
import { CardClass } from '../../../../types';
// Function to retrieve a specific Hearthstone card by id
export async function POST(request: Request) {
  const card: CardClass = await request.json();
  const queryText = 'SELECT * FROM cards WHERE cardid = $1';
  const crd = await readRecords(queryText, [card.cardid]);
  if (crd.length === 0) {
    return new NextResponse('Card not found', { status: 404 });
  }

  return NextResponse.json(crd);
}
