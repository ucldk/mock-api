import mysql from 'mysql2/promise';
import { db, dbSql } from '../config.js';

const query = async (sql, params) => {
  const connection = await mysql.createConnection(db);
  const [results] = await connection.query(sql, params);
  return results;
};

const initDatabase = async () => {
  console.log('init db');
  query(dbSql);
};

export {
  initDatabase,
  query,
};
