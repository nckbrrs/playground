import { ApolloProvider } from "@apollo/client";
import client from "~/src/lib/apolloClient";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ApolloWrapper from "./components/ApolloWrapper";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Playground",
	description: "nckbrrs playground"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ApolloWrapper>
				<body className={bodyCn}>{children}</body>
			</ApolloWrapper>
		</html>
	);
}

const bodyCn = `
	${geistSans.variable}
	${geistMono.variable}
	antialiased
	flex
	flex-col
	w-screen
	h-screen
	min-h-screen
`;
