import { TBreadcrumbPath } from "@/utils/types";
import HousesGridList from "./_components/HousesGridList";
import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import Empty from "@/components/reusable/Empty/Empty";
import { Breadcrumbing } from "@/components/reusable/Breadcrumbing/Breadcrumbing";
import { fetchAllHouses } from "@/utils/actions/house-actions";
import {
	linksLabels,
	linksRoutes,
	metadataInfo,
} from "@/utils/websiteData/enums";

// export const metadata: Metadata = {
// 	title: appMetadata.defaultTitle(metadataInfo.HOUSES),
// 	description: appMetadata.defaultDescription(metadataInfo.HOUSES),
// };

export default async function HousesPage() {
	const housesList = await fetchAllHouses();
	const breadcrumbPaths: TBreadcrumbPath[] = [
		{ title: linksLabels.HOME, path: linksRoutes.HOME },
		{
			title: linksLabels.HOUSES,
			path: linksRoutes.HOUSES,
			currentHousePage: true,
		},
	];
	if (housesList.length === 0) {
		return (
			<div className='mt-10 grid grid-cols-1 max-w-96 md:grid-cols-1 md:max-w-3xl lg:grid-cols-1 lg:max-w-3xl  xl:grid-cols-1  xl:max-w-6xl gap-4 px-4  mx-auto'>
				<div className='flex justify-center items-center flex-col'>
					<Empty header='House List is empty!' />
				</div>
			</div>
		);
	}
	return (
		<div className='px-2 ' suppressHydrationWarning>
			<Breadcrumbing breadcrumbPaths={breadcrumbPaths} />
			<HousesGridList housesList={housesList} />
		</div>
	);
}
