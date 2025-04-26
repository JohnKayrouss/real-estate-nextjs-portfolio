"use client";
import Lottie from "lottie-react";
import errorAnimation from "@/public/lottieFiles/errorAnimation.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	linksLabels,
	linksRoutes,
	pageNotFound,
} from "@/utils/websiteData/enums";
export default function Error() {
	return (
		<div className='mt-14 flex flex-col items-center justify-center '>
			<Lottie animationData={errorAnimation} className=' h-64 md:h-96' />
			<div className='flex gap-x-2 items-center'>
				<h1 className='text-muted-foreground'>{pageNotFound.HEADING}</h1>
				<Button
					variant={"outline"}
					className='text-primary animate-pulse'
					asChild>
					<Link href={linksRoutes.HOME}>{linksLabels.HOME}</Link>
				</Button>
			</div>
		</div>
	);
}
