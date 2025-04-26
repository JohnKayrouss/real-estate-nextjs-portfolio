import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import {
	fetch_Undeletable_CarouselImages,
	fetchCarouselImages,
} from "@/utils/actions/house-actions";

export async function HomeCarousel() {
	const adminImages = await fetchCarouselImages();
	const undeletableImages = await fetch_Undeletable_CarouselImages();
	const houseImages = [...adminImages, ...undeletableImages];
	return (
		<Carousel className=' w-full md:max-w-xs mx-auto hidden md:block md:-ml-4  lg:max-w-sm xl:max-w-lg 2xl:ml-20 '>
			<CarouselContent>
				{houseImages.map((house, index) => (
					<CarouselItem key={index}>
						<div className='p-5 lg:p-12 xl:p-20'>
							<Card className=' p-0 m-0  rounded-md '>
								<CardContent className='flex aspect-square items-center justify-center 2xl:p-6 relative'>
									<Image
										src={house.url}
										alt={house.name}
										className='w-full h-[18rem] rounded-md object-cover '
										sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
										priority
										fill
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
