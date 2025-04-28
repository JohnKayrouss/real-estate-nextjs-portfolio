import { Card, CardContent } from "@/components/ui/card";
import { type House } from "@prisma/client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { numberWithCommas } from "@/utils/helperFunctions";
import { THouse } from "@/utils/types";
import { house } from "@/utils/websiteData/enums";

export default function HouseCardHorizontalCarousel({
	id,
	price,
	baths,
	sqft,
	beds,
	builtYear,
	address,
	thumbnail,
}: THouse) {
	return (
		<Link href={`/houses/${id}`}>
			<div className=' h-full '>
				<div className=' m-1 '>
					<div className='p-1 w-full '>
						<Card className='  h-[200px] w-[270px] p-0 m-0  rounded-md '>
							<CardContent className=' rounded-md h-full w-full p-0 relative'>
								<Image
									src={thumbnail}
									alt='house'
									fill
									priority
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
									className='rounded-md  object-cover relative'
								/>
								<div className=' absolute opacity-0 hover:opacity-100 bg-black/60 h-full w-full top-0 rounded-md text-white transition-all duration-100 py-4 px-2 '>
									<div className='flex flex-col gap-1'>
										<h1 className='text-2xl '>$ {numberWithCommas(price)}</h1>
										<ul className='pl-[2px]'>
											<li>
												{house.BEDS} {beds && beds}
											</li>
											<li>
												{house.BATHS} {baths && baths}
											</li>
											<li>
												{house.SQFT} {sqft && sqft}
											</li>
											<li>
												{house.BUILT_IN} {builtYear && builtYear}
											</li>
										</ul>
										<p className='flex items-center gap-1'>
											<MapPin className='h-6 w-6 text-primary ' />
											<span className='line-clamp-1'>{address && address}</span>
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</Link>
	);
}
