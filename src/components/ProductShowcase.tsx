"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { useRef } from "react";

export const ProductShowcase = () => {
	const ref = useRef<HTMLImageElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});

	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<div className="bg-black overflow-x-clip text-white bg-gradient-to-b from-black to-[#5D2CA8] py-18 sm:py-24">
			<div className="container">
				<h2 className="tracking-tight text-center text-5xl sm:text-6xl font-bold">
					Intuitive interface
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-xl text-white/70 mt-5 text-center">
						Celebrate the joy of accomplishment with an app design to track your
						progress, motivate your efforts, and celebrate your successes, one
						task at a time
					</p>
				</div>
				<motion.div
					style={{
						opacity,
						rotateX,
						transformPerspective: "800px",
					}}
				>
					<Image
						src={appScreen}
						alt="The product screenshot"
						className="mt-14 mx-auto"
						ref={ref}
					/>
				</motion.div>
			</div>
		</div>
	);
};
