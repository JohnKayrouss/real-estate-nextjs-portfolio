"use client";
import { Button } from "@/components/ui/button";
import { CircleDashed, Heart } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function FavoriteToggleButton({
	favoriteId,
}: {
	favoriteId: string | null;
}) {
	const { pending } = useFormStatus();
	return (
		<Button variant={"outline"}>
			{pending ? (
				<CircleDashed className='text-primary animate-spin' />
			) : favoriteId ? (
				<>
					<Heart className='dark:text-white' fill='orange' strokeWidth={0} />
				</>
			) : (
				<Heart className='dark:text-white' />
			)}
		</Button>
	);
}
