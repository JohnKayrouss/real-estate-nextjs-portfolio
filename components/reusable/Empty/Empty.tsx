"use client";
import Lottie from "lottie-react";
import emptyAnimation from "@/public/lottieFiles/emptyCatAnimation.json";

export default function Empty({ header }: { header?: string }) {
	return (
		<div className=' flex flex-col mt-8 items-center justify-center'>
			{header && <h1 className='text-muted-foreground text-xl'>{header}</h1>}
			<Lottie animationData={emptyAnimation} className=' h-56 md:h-64' />
		</div>
	);
}
