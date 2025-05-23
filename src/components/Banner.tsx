export const Banner = () => {
	return (
		<div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,144,.7),rgb(248,158,191,.7),rgb(252,214,255,.7))]">
			<div className="container">
				<p className="font-medium">
					<span className="hidden sm:inline">
						Introducing a completely redesigned interface -{" "}
					</span>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a href="#" className="underline underline-offset-4">
						Explore the demo
					</a>
				</p>
			</div>
		</div>
	);
};
