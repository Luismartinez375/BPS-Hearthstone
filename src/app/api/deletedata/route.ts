import { deleteRecord } from '../../../../lib/db';

// Function to delete a Hearthstone card by id
export const deleteCardById = async (id: string): Promise<void> => {
  const queryText = 'DELETE FROM favorites WHERE id = $1';
  const values = [id];
  await deleteRecord(queryText, values);
};
