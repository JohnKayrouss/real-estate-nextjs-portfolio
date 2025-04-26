import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	heading: string;
	classname?: string;
};

export default function DashboardSectionWrapperWithHeader({
	children,
	heading,
	classname,
}: Props) {
	return (
		<section>
			<h1 className={cn("text-2xl font-semibold mb-8 ", classname)}>
				{heading}
			</h1>
			<div className='border p-8 rouned-md'>{children}</div>
		</section>
	);
}
