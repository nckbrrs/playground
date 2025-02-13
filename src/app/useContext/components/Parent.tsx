import { useContext } from "react";
import { BgColorContext } from "../../../contexts/bgColorContext";
import UseContextExampleChild from "./ChildButton";

export default function UseContextExampleParent() {
	const bgColorCtx = useContext(BgColorContext).color;

	return (
		<div
			className={
				bgColorCtx == "red"
					? useContextExampleParentRedCn
					: bgColorCtx == "green"
					? useContextExampleParentGreenCn
					: useContextExampleParentBlueCn
			}
		>
			<p className="w-full">{"Parent (this rectangle)"}</p>
			<div className="flex flex-col">
				<UseContextExampleChild color="red" />
				<UseContextExampleChild color="green" />
				<UseContextExampleChild color="blue" />
			</div>
		</div>
	);
}

const useContextExampleParentBaseCn = `
	flex
	flex-col
	aspect-video
	justify-start
	items-center
	font-bold
	text-black
	text-center
	p-4
	rounded-md
`;

const useContextExampleParentRedCn = `
	${useContextExampleParentBaseCn}
	bg-red-500
`;

const useContextExampleParentGreenCn = `
	${useContextExampleParentBaseCn}
	bg-green-500
`;

const useContextExampleParentBlueCn = `
	${useContextExampleParentBaseCn}
	bg-blue-500
`;
