"use client";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/lottieFiles/loading.json";

export default function Loading() {
	return (
		<div>
			<Lottie animationData={loadingAnimation} className=' h-64 md:h-96' />
		</div>
	);
}
