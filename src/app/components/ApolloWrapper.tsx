"use client"; // This ensures this component runs only on the client-side

import { ApolloProvider } from "@apollo/client";
import client from "~/src/lib/apolloClient";

export default function ApolloWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
