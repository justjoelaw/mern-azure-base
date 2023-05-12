import { MongoClient } from 'mongodb';

const connectionString = process.env.COSMOS_URI || '';
console.log('COSMOS_URI is ', process.env.COSMOS_URI);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db('sample_training');

export default db;
