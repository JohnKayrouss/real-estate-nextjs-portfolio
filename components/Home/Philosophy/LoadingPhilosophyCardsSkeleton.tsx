import { Skeleton } from "@/components/ui/skeleton";

function PhilosophyCardSkeleton() {
	return (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='w-[320px] h-[167px] mx-auto' />
			<div className='space-y-2'>
				<Skeleton className='h-3 w-[100px] mx-auto'></Skeleton>
				<Skeleton className='h-3 w-[250px] mx-auto' />
				<Skeleton className='h-3 w-[200px] mx-auto' />
			</div>
		</div>
	);
}
export const LoadingPhilosophyCardsSkeleton = () => {
	return (
		<>
			<PhilosophyCardSkeleton />
			<PhilosophyCardSkeleton />
			<PhilosophyCardSkeleton />
			<PhilosophyCardSkeleton />
		</>
	);
};
