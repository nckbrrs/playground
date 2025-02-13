import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
			<body className={bodyCn}>{children}</body>
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
