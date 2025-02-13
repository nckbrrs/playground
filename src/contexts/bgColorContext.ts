import { createContext } from "react";

export const BgColorContext = createContext<BgColorContextType>({
	color: "red",
	setColor: () => {}
});

type BgColorContextType = {
	color: "red" | "green" | "blue";
	setColor: (c: "red" | "green" | "blue") => void;
};
