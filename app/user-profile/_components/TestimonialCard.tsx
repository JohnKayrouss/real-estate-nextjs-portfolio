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
import DeleteTestimony from "./DeleteTestimony";
import Link from "next/link";
import slugify from "slugify";
import Rating from "@/components/Testimonials/Rating";
export default function TestimonialCard({
	testimonial,
	homeSection,
}: {
	testimonial: Testimonial;
	homeSection?: boolean;
}) {
	const { userImage, name, text, rating, id, email, clerkId } = testimonial;
	const userFullName = slugify(name as string, { lower: true });

	return (
		<Card key={crypto.randomUUID()}>
			<CardHeader className='flex flex-row gap-2 items-center '>
				<Avatar className='min-w-14 min-h-14 flex items-center'>
					<AvatarImage src={userImage} alt='user' />
					<AvatarFallback></AvatarFallback>
				</Avatar>
				<div className='flex flex-col pb-1'>
					<CardTitle className='text-primary'>{name}</CardTitle>
					<CardDescription className='text-muted-foreground'>
						{email}
					</CardDescription>
					<Rating rating={rating} />
				</div>
			</CardHeader>
			<CardContent>{text}</CardContent>
			{!homeSection && (
				<CardFooter className='flex gap-3 '>
					<Link href={`/user-profile/${userFullName}/testimonials/${id}/edit`}>
						<IconButton actionType='edit' variantType='secondary' />
					</Link>
					<DeleteTestimony testimonyId={id} clerkId={clerkId} />
				</CardFooter>
			)}
		</Card>
	);
}
