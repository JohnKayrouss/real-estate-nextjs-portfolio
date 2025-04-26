import TestimonialCard from "@/app/user-profile/_components/TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@prisma/client";
export default function HomeTestimonialsHorizontal({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	return (
		<div className=' hidden  md:flex items-center justify-center py-20 '>
			<Carousel className='w-full md:max-w-xl lg:max-w-3xl  xl:max-w-5xl 2xl:max-w-7xl'>
				<CarouselContent className='-ml-1  '>
					{testimonials.map((testimonial) => (
						<CarouselItem
							key={crypto.randomUUID()}
							className='lg:min-w-96 md:min-w-[36rem] lg:max-w-[24rem] xl:min-w-[32rem] 2xl:min-w-[27rem]  px-4 md:basis-1/1 lg:basis-1/1 xl:basis-1/2 '>
							<TestimonialCard testimonial={testimonial} homeSection={true} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
