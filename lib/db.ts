import { Pool, QueryResult } from 'pg';
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

// Export a function to query the database

// Function to execute a query and return the results
export const executeQuery = async (
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
  params: any
): Promise<QueryResult<any>> => {
  return await executeQuery(text, params);
};
