"use client";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

import { motion } from "motion/react";

const images = [
	{ src: acmeLogo, alt: "Acme Logo" },
	{ src: quantumLogo, alt: "Quantum Logo" },
	{ src: echoLogo, alt: "Echo Logo" },
	{ src: celestialLogo, alt: "Celestial Logo" },
	{ src: pulseLogo, alt: "Pulse Logo" },
	{ src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
	return (
		<section className="bg-black text-white py-18 sm:py-24">
			<div className="container">
				<h2 className="text-xl text-center text-white">
					Trusted by the world&apos;s most innovative teams
				</h2>
				<div className="mt-9 flex overflow-hidden before:z-10 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,rgb(0,0,0),rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,rgb(0,0,0),rgb(0,0,0,0))]">
					<motion.div
						transition={{
							duration: 10,
							ease: "linear",
							repeat: Number.POSITIVE_INFINITY,
						}}
						initial={{ translateX: 0 }}
						animate={{ translateX: "-50%" }}
						className="flex gap-16 flex-none pr-16"
					>
						{images.map(({ alt, src }) => (
							<Image
								src={src}
								alt={alt}
								key={alt}
								className="flex-none h-8 w-auto"
							/>
						))}
						{images.map(({ alt, src }) => (
							<Image
								src={src}
								alt={alt}
								key={alt}
								className="flex-none h-8 w-auto"
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
