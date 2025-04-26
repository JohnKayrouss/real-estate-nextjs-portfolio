"use client";

import Lottie from "lottie-react";
import heroAnimation from "@/public/lottieFiles/heroLottie.json";
export default function HeroAnimation() {
	return (
		<Lottie
			animationData={heroAnimation}
			loop={true}
			className=' md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px] max-h-[80%] max-w-[80%] '
		/>
	);
}
