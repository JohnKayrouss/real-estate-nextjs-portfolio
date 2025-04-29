import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Testimonial } from "@prisma/client";
import Rating from "@/components/Testimonials/Rating";
import DeleteTestimony from "@/app/user-profile/_components/DeleteTestimony";

export default function TestimonyPopup({
	testimonial,
}: {
	testimonial: Testimonial;
}) {
	const { userImage, name, text, rating, id, email, clerkId } = testimonial;

	return (
		<Dialog>
			<DialogTrigger className='underline hover:text-primary'>
				{name}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className='flex flex-row gap-2 items-center '>
					<Avatar className='min-w-14 min-h-14 flex items-center'>
						<AvatarImage src={userImage} alt='user' />
						<AvatarFallback></AvatarFallback>
					</Avatar>
					<div className='flex flex-col pb-1'>
						<DialogTitle className='text-primary'>{name}</DialogTitle>

						<DialogDescription className='text-muted-foreground'>
							{email}
						</DialogDescription>
						<Rating rating={rating} />
					</div>
				</DialogHeader>
				<DialogDescription>{text}</DialogDescription>
				<DialogFooter className='flex gap-3 '>
					<DeleteTestimony testimonyId={id} clerkId={clerkId} />
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
