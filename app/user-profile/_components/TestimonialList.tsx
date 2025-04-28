import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconButton } from "@/components/form/Buttons";
import { Testimonial } from "@prisma/client";
import TestimonialCard from "./TestimonialCard";
import Empty from "@/components/reusable/Empty/Empty";

export default function TestimonialList({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	if (testimonials.length === 0) {
		return <Empty header='No testimonials yet' />;
	}
	return (
		<div className='grid gap-4 mt-20 max-w-96 md:max-w-3xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4'>
			{testimonials.map((testimonial) => (
				<TestimonialCard key={crypto.randomUUID()} testimonial={testimonial} />
			))}
		</div>
	);
}
