"use client";
import Lottie from "lottie-react";
import notFoundAnimation from "@/public/lottieFiles/not-found.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	linksLabels,
	linksRoutes,
	pageNotFound,
} from "@/utils/websiteData/enums";

export default function NotFound() {
	return (
		<div className='mt-14 flex flex-col items-center justify-center  gap-y-6'>
			<h1 className=' capitalize text-xl text-muted-foreground'>
				{pageNotFound.CONTENT}
			</h1>
			<Lottie
				animationData={notFoundAnimation}
				className=' h-64 md:h-80 max-w-80'
			/>
			<div className='flex gap-x-2 items-center'>
				<h1 className='text-muted-foreground'>{pageNotFound.HEADING} </h1>
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
