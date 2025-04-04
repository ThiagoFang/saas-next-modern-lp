import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
	return (
		<section className="bg-black relative text-white purple-gradient overflow-clip py-18 sm:py-24">
			<div className="absolute h-[375px] w-[750px] sm:w-[1536px] lg:w-[2400px] sm:h-[768px] lg:h-[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border top-[calc(100%-96px)] sm:top-[calc(100%-120px)] border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]" />
			<div className="container relative">
				<div className="flex items-center justify-center">
					<a
						href="/"
						className="border py-1 inline-flex gap-3 px-2 rounded-lg border-white/30"
					>
						<span className="rainbow-background text-transparent bg-clip-text [-webkit-background-clip:text]">
							Version 2.0 is herem
						</span>
						<span className="inline-flex gap-1 items-center">
							<span>Read More</span>
							<ArrowWIcon />
						</span>
					</a>
				</div>
				<div className="flex justify-center mt-8">
					<div className="inline-flex relative">
						<h1 className="text-7xl sm:text-9xl inline-flex font-bold tracking-tight text-center">
							One Task
							<br /> at Time
						</h1>

						<Image
							className="absolute left-[476px] top-[108px] hidden sm:inline"
							src={cursorImage}
							alt=""
							height={100}
							width={200}
						/>
						<Image
							className="absolute right-[498px] top-[56px] hidden sm:inline"
							src={messageImage}
							alt=""
							height={200}
							width={200}
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<p className="text-center text-xl mt-8 max-w-md">
						Celebrate the joy of accomplishment with an app design to track
						progress, motivate your efforts, and celebrate your successes
					</p>
				</div>
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
