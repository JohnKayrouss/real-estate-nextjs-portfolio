import Link from "next/link";
import {
	BreadcrumbItem,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin } from "lucide-react";
import { TBreadcrumbPath } from "@/utils/types";

export default function BreadcrumbingItem({
	title,
	path,
	currentHousePage,
	mapIcon,
}: TBreadcrumbPath) {
	return (
		<BreadcrumbItem>
			{!currentHousePage ? (
				<>
					<Link
						href={`${path}`}
						className=' capitalize md:text-base md:font-semibold line-clamp-1 '>
						{title}
					</Link>
					<BreadcrumbSeparator />
				</>
			) : (
				<BreadcrumbItem>
					<BreadcrumbPage className='  capitalize  md:text-base md:font-semibold  text-primary  '>
						<div className='flex gap-1 items-center'>
							{mapIcon && <MapPin className='h-4 w-4 text-primary ' />}
							<span className='line-clamp-1'>{title}</span>
						</div>
					</BreadcrumbPage>
				</BreadcrumbItem>
			)}
		</BreadcrumbItem>
	);
}
