import { Client } from "pg";

// Create a new instance of the PostgreSQL client
const client = new Client({
	connectionString: process.env.DATABASE_URL, // Make sure to set this in your environment
	ssl: {
		rejectUnauthorized: false // Necessary for secure connections to Neon
	}
});

export default client;
