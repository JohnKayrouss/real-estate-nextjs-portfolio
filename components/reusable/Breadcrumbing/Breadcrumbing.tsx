import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import BreadcrumbingItem from "./BreadcrumbingItem";
import { TBreadcrumbPath } from "@/utils/types";

type BreadcrumbingProps = {
	breadcrumbPaths: TBreadcrumbPath[];
};

export function Breadcrumbing({ breadcrumbPaths }: BreadcrumbingProps) {
	const breadcrumbings = breadcrumbPaths.map((house) => {
		return <BreadcrumbingItem {...house} key={crypto.randomUUID()} />;
	});

	return (
		<Breadcrumb className=' h-10  mt-6 md:h-fit md:py-4 lg:py-8 pl-2'>
			<BreadcrumbList className=' flex items-center flex-nowrap  pr-2 '>
				{breadcrumbings}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
