"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
import PhilosophyAnimation from "./PhilosophyAnimation";

type PhilosophyCardProps = {
	lottie: unknown;
	heading: string;
	description: string;
};

export function PhilosophyCard({
	lottie,
	heading,
	description,
}: PhilosophyCardProps) {
	return (
		<Card className=' w-[320px] h-[265px] mx-auto hover:shadow-lg hover:scale-105 transition-all duration-200 dark:hover:shadow-md dark:hover:shadow-primary '>
			<CardContent className=' h-[140px] '>
				<PhilosophyAnimation animation={lottie} />
			</CardContent>
			<CardFooter className='flex flex-col gap-2'>
				<CardTitle>{heading}</CardTitle>
				<CardDescription className=' text-center'>
					{description}
				</CardDescription>
			</CardFooter>
		</Card>
	);
}
