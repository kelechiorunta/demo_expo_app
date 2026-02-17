import path from 'path';
import dotenv from 'dotenv';
import { Knex } from 'knex';

dotenv.config();
console.log('database', process.env.DB_NAME);

const defaultConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.host || 'localhost',
    database: process.env.DB_NAME || 'jest-vite',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432', 10)
  },
  migrations: {
    directory: path.resolve(__dirname, 'backend/db/migrations'),
    tableName: 'knex_migrations' // by default tableName is knex_migrations,
    // extension: 'ts',
    // loadExtensions: ['.ts']
  },
  seeds: {
    directory: path.join(__dirname, 'backend/db/seeds')
  },
  pool: { min: 0, max: 7 }, //This will prevent caching of all idle pool connections
  acquireConnectionTimeout: 30000 //Default to 30secs to timeout from used pool connections from transactions
};

const config: { [key: string]: Knex.Config } = {
  development: { ...defaultConfig, debug: true },
  test: { ...defaultConfig, debug: true },
  production: {
    ...defaultConfig,
    debug: false,
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60000
  }
};

// Export configuration based on environment
const environment = process.env.NODE_ENV || 'development';
export default config[environment];
