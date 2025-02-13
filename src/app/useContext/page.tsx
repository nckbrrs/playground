"use client";

import { useState } from "react";
import { BgColorContext } from "../../contexts/bgColorContext";
import UseContextExampleParent from "./components/Parent";

export default function UseContextExample() {
	const [color, setColor] = useState<"red" | "green" | "blue">("red");

	return (
		<div className={containerCn}>
			<BgColorContext.Provider
				value={{ color: color, setColor: setColor }}
			>
				<p className={pCn}>
					{`The "child" buttons in this rectangle do NOT receive any\
					props related to their parent's state, but they are still\
					able to affect the parent by using useContext!`}
				</p>
				<UseContextExampleParent />
			</BgColorContext.Provider>
		</div>
	);
}

const containerCn = `
	flex 
	flex-col
	h-full
	w-full
	justify-center
	items-center
	font-bold
`;

const pCn = `
	text-base
	w-60
	mb-8
`;
