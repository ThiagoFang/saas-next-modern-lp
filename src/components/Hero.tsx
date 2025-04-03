import ArrowWIcon from "../assets/icons/arrow-w.svg";

export const Hero = () => {
	return (
		<section className="bg-black relative text-white purple-gradient overflow-clip py-18">
			<div className="absolute h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border top-[calc(100%-96px)] border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]" />
			<div className="container relative">
				<div className="flex items-center justify-center">
					<a
						href="/"
						className="border py-1 inline-flex gap-3 px-2 rounded-lg border-white/30"
					>
						<span className="rainbow-background text-transparent bg-clip-text [-webkit-background-clip:text]">
							Version 2.0 is here
						</span>
						<span className="inline-flex gap-1 items-center">
							<span>Read More</span>
							<ArrowWIcon />
						</span>
					</a>
				</div>
				<h1 className="text-7xl font-bold tracking-tight text-center mt-8">
					One Task at Time
				</h1>
				<p className="text-center text-xl mt-8">
					Celebrate the joy of accomplishment with an app design to track
					progress, motivate your efforts, and celebrate your successes
				</p>
				<div className="flex justify-center mt-8">
					<button
						className="bg-white text-black py-3 px-5 rounded-lg font-medium"
						type="button"
					>
						Get for free
					</button>
				</div>
			</div>
		</section>
	);
};
