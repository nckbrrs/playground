export default function Home() {
	return (
		<div className={containerCn}>
			<h1>{":)"}</h1>
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
	text-4xl
`;
