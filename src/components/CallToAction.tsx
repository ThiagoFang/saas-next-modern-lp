"use client";

import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const CallToAction = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

	return (
		<div
			ref={containerRef}
			className="bg-black overflow-x-clip text-white py-18 sm:py-24 text-center"
		>
			<div className="container max-w-xl relative">
				<motion.div
					style={{ translateY }}
					className="absolute -top-[120px] right-[calc(100%+24px)]"
				>
					<Image
						src={helixImage}
						alt=""
						className="max-w-none"
						draggable={false}
					/>
				</motion.div>
				<motion.div
					style={{ translateY }}
					className="absolute top-6 left-[calc(100%+26px)]"
				>
					<Image
						src={emojiStarImage}
						alt=""
						className="max-w-none"
						draggable={false}
					/>
				</motion.div>

				<h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
					Get instant access
				</h2>
				<p className="text-xl text-white/70 mt-5">
					Celebrate the joy of accomplishment with an app designed to track your
					progress and motivate your efforts.
				</p>

				<form className="mt-10 flex flex-col max-w-sm mx-auto sm:flex-row gap-2.5">
					<input
						type="email"
						placeholder="your@email.com"
						className="h-12 bg-white/20 sm:flex-1 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]"
					/>
					<button
						type="button"
						className="bg-white  text-black h-12 px-4 rounded-lg"
					>
						<span className="truncate">Get access</span>
					</button>
				</form>
			</div>
		</div>
	);
};
