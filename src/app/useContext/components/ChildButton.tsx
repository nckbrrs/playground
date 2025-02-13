import { memo, useCallback, useContext } from "react";
import { BgColorContext } from "../../../contexts/bgColorContext";

type UseContextExampleChildProps = {
	color: "red" | "green" | "blue";
};

const UseContextExampleChild = function ({
	color
}: UseContextExampleChildProps) {
	const bgColorCtx = useContext(BgColorContext);

	const handleClick = useCallback(() => {
		console.log("setting context color to ", color);
		bgColorCtx.setColor(color);
	}, [color]);

	return (
		<button
			className={
				color === "red"
					? useContextExampleChildRedCn
					: color === "green"
					? useContextExampleChildGreenCn
					: useContextExampleChildBlueCn
			}
			onClick={handleClick}
		>
			<p>{`Child (${color})`}</p>
		</button>
	);
};

const useContextExampleChildBaseCn = `
	flex
	text-base
	p-2
	rounded-md
	mt-4
`;

const useContextExampleChildRedCn = `
	${useContextExampleChildBaseCn}
	bg-red-400
`;

const useContextExampleChildGreenCn = `
	${useContextExampleChildBaseCn}
	bg-green-400
`;

const useContextExampleChildBlueCn = `
	${useContextExampleChildBaseCn}
	bg-blue-400
`;

export default memo(UseContextExampleChild);
