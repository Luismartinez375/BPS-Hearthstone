import { Pool, QueryResult } from 'pg';
import { CardClass } from '../types';
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

// Export a function to query the database

// Function to execute a query and return the results
const executeQuery = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  const result = await pool.query(text, params);
  return result;
};
export const createRecord = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  return await executeQuery(text, params);
};
export const readRecords = async (
  text: string,
  params?: any[]
): Promise<any> => {
  const result = await executeQuery(text, params);
  return result.rows;
};
export const deleteRecord = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  return await executeQuery(text, params);
};

// Function to create a new Hearthstone card
export const createCard = async (card: CardClass): Promise<CardClass> => {
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
  return result.rows[0];
};

// Function to retrieve all Hearthstone cards
export const getAllCards = async (): Promise<CardClass[]> => {
  const queryText = 'SELECT * FROM cards';
  return await readRecords(queryText);
};

// Function to retrieve a specific Hearthstone card by id
export const getCardById = async (id: string): Promise<CardClass | null> => {
  const queryText = 'SELECT * FROM cards WHERE id = $1';
  const values = [id];
  const result = await readRecords(queryText, values);
  return result[0] || null;
};

// Function to delete a Hearthstone card by id
export const deleteCardById = async (id: string): Promise<void> => {
  const queryText = 'DELETE FROM cards WHERE id = $1';
  const values = [id];
  await deleteRecord(queryText, values);
};
