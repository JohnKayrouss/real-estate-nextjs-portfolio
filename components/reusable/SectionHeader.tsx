import { Separator } from "@/components/ui/separator";

export default function SectionHeader({ heading }: { heading: string }) {
	return (
		<>
			<div className=' h-10'>
				<h1 className='text-2xl capitalize'>{heading}</h1>
			</div>
			<Separator className='mt-4' />
		</>
	);
}
