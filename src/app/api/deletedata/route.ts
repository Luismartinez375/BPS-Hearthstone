import { NextResponse } from 'next/server';
import { deleteRecord } from '../../../../lib/db';

// Function to delete a Hearthstone card by id
export async function DELETE(id: string) {
  const queryText = 'DELETE FROM favorites WHERE id = $1';
  const values = [id];
  await deleteRecord(queryText, values);
  NextResponse.json('deleted');
}
