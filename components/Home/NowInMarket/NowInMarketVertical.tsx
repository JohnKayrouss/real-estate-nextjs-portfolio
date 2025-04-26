import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import HouseCardVerticalCarousel from "./HouseCardVerticalCarousel";
import { THouse } from "@/utils/types";

export function NowInMarketVertical({ houses }: { houses: THouse[] }) {
	return (
		<div className='md:hidden flex h-[500px] items-center justify-center '>
			<Carousel
				opts={{
					align: "start",
				}}
				orientation='vertical'
				className='w-full max-w-sm  '>
				<CarouselContent className='-mt-1 h-[200px] m-2 relative cursor-pointer '>
					{houses.map((house, index) => (
						<CarouselItem key={index} className='pt-1 md:basis-1/2  '>
							<HouseCardVerticalCarousel {...house} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
