import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import HouseCardHorizontalCarousel from "./HouseCardHorizontalCarousel";
import { THouse } from "@/utils/types";
export default function NowInMarketHorizontal({
	houses,
}: {
	houses: THouse[];
}) {
	return (
		<div className=' hidden md:flex items-center justify-center py-20 '>
			<Carousel className='w-full md:max-w-xl lg:max-w-4xl  xl:max-w-6xl '>
				<CarouselContent className='-ml-1  '>
					{houses.map((house, index) => (
						<CarouselItem
							key={index}
							className='pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 '>
							<HouseCardHorizontalCarousel {...house} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
