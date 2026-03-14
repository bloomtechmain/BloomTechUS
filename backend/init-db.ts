import { query } from './db';

const createUsersTable = async (): Promise<void> => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(20) DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(sql);
    console.log('Users table created successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error creating users table:', err);
    process.exit(1);
  }
};

createUsersTable();
