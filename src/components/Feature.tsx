"use client";

import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

type FeatureProps = {
	title: string;
	description: string;
};

export const Feature = ({ title, description }: FeatureProps) => {
	const offsetX = useMotionValue(-100);
	const offsetY = useMotionValue(-100);
	const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

	const borderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			if (!borderRef.current) return;

			const borderRect = borderRef.current.getBoundingClientRect();
			offsetX.set(e.x - borderRect.x);
			offsetY.set(e.y - borderRect.y);
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, [offsetX, offsetY]);

	return (
		<div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
			<motion.div
				className="absolute inset-0 border-2 border-purple-400 rounded-xl"
				ref={borderRef}
				style={{
					WebkitMaskImage: maskImage,
					maskImage: maskImage,
				}}
			/>
			<div className="inline-flex size-14 bg-white text-black justify-center items-center rounded-lg">
				<EcosystemIcon />
			</div>
			<h3 className="mt-6 font-bold">{title}</h3>
			<p className="mt-2 text-white/70">{description}</p>
		</div>
	);
};
