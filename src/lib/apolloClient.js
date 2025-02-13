import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create an Apollo Client instance
const client = new ApolloClient({
	link: new HttpLink({
		uri: "/api/graphql" // This is the API route where your GraphQL API is exposed
	}),
	cache: new InMemoryCache() // In-memory cache to optimize GraphQL queries
});

export default client;
