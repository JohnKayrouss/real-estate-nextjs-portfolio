import TestimonialCard from "@/app/user-profile/_components/TestimonialCard";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@prisma/client";
export default function HomeTestimonialsVertical({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	return (
		<div className='md:hidden flex h-[500px] items-center justify-center  '>
			<Carousel
				opts={{
					align: "start",
				}}
				orientation='vertical'
				className='w-full max-w-md '>
				<CarouselContent className='h-[255px] m-2 relative cursor-pointer '>
					{testimonials.map((testimonial) => (
						<CarouselItem
							key={crypto.randomUUID()}
							className='pt-1 md:basis-1/2 '>
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
