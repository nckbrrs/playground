import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { users } from "../../../drizzle/schema";

// Initialize database connection
const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

// Define GraphQL schema
const typeDefs = gql`
	type User {
		id: ID!
		name: String!
	}

	type Query {
		users: [User]!
	}

	type Mutation {
		createUser(name: String!): User
	}
`;

// Define resolvers
const resolvers = {
	Query: {
		users: async () => await db.select().from(users)
	},
	Mutation: {
		createUser: async (_, { name }) => {
			const [newUser] = await db
				.insert(users)
				.values({ name })
				.returning();
			return newUser;
		}
	}
};

// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export async function GET(req) {
	return handler(req);
}

export async function POST(req) {
	return handler(req);
}
