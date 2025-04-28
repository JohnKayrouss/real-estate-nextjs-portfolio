"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { THouseWithImages } from "@/utils/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ImageStage({
	houseData,
}: {
	houseData: THouseWithImages;
}) {
	const [currentImageOnStage, setCurrentImageOnStage] = useState(
		houseData?.thumbnail
	);
	const houseAllImages = [
		houseData.thumbnail,
		...houseData.imagesList.map((image) => image.url),
	];
	const handleImageOnStage = (img: string) => {
		if (img === currentImageOnStage) return;
		setCurrentImageOnStage(img);
	};
	return (
		<div className='mt-5 '>
			<div className='cursor-default'>
				<Card className='p-0 m-0  rounded-md  h-64 w-[21rem] mx-auto sm:h-80 sm:w-[29rem] md:h-[22rem] md:w-[35rem] lg:h-[28rem] lg:w-[37rem] xl:h-[31rem] xl:w-[40rem]'>
					<CardContent className='rounded-md h-full w-full p-0 relative  m-0 '>
						<Image
							src={currentImageOnStage}
							alt='house'
							fill
							priority
							className='rounded-md object-cover relative'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
						/>
					</CardContent>
				</Card>
			</div>
			<Separator className='my-2 md:mt-6' />
			<div className='flex justify-start py-2 whitespace-nowrap overflow-x-auto scrollbar-thin md:justify-center'>
				<div className='flex items-start gap-3 justify-start'>
					{houseAllImages.map((img, idx) => {
						return (
							<Card
								className={cn(
									"h-14 w-20 mx-auto hover:shadow-md cursor-pointer transition-all duration-500 md:h-16 md:w-[5.3rem] lg:h-20 lg:w-[6rem] p-0 m-0   ",
									img === currentImageOnStage
										? "opacity-50 dark:opacity-40 cursor-default scale-90 "
										: "opacity-100"
								)}
								key={idx}
								onClick={() => handleImageOnStage(img)}>
								<CardContent className='h-full w-full p-0 relative'>
									<Image
										src={img}
										alt='house'
										fill
										priority
										className=' object-cover relative'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
									/>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
			<Separator className='my-2 ' />
		</div>
	);
}
