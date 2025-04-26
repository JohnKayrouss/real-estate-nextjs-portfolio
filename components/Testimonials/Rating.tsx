import { Star } from "lucide-react";

export default function Rating({ rating }: { rating: number }) {
	const remainingStars = 5 - rating;
	return (
		<div className='flex gap-1 mt-1'>
			{Array.from({ length: rating }, (_, i) => (
				<Star key={i} className='w-3 h-3' fill='#ffc300' strokeWidth={0} />
			))}
			{Array.from({ length: remainingStars }, (_, i) => (
				<Star key={i} className='w-3 h-3' />
			))}
		</div>
	);
}
