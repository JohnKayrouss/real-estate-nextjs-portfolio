import { fetchHouseFullData } from "@/utils/actions/house-actions";
import ImageStage from "@/components/house/ImageStage";
import HouseInformation from "@/components/house/HouseInformation";
import { TBreadcrumbPath } from "@/utils/types";
import DynamicFavicon from "@/components/reusable/DynamicFavicon/DynamicFavicon";
import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import { notFound } from "next/navigation";
import { Breadcrumbing } from "@/components/reusable/Breadcrumbing/Breadcrumbing";
import {
	linksLabels,
	linksRoutes,
	metadataInfo,
} from "@/utils/websiteData/enums";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: metadataInfo.SINGLE_HOUSE,
		description: appMetadata.defaultDescription(
			metadataInfo.SINGLE_HOUSE_DESCRIPTION
		),
	};
}

type Props = {
	params: Promise<{ houseSlug: string }>;
};

export default async function SingleHouseDetailsPage({ params }: Props) {
	const { houseSlug } = await params;
	const houseData = await fetchHouseFullData(houseSlug);
	const breadcrumbPaths: TBreadcrumbPath[] = [
		{ title: linksLabels.HOME, path: linksRoutes.HOME },
		{ title: linksLabels.HOUSES, path: linksRoutes.HOUSES },
		{
			title: houseData?.address || "House Details",
			path: `${linksRoutes.HOUSES}/${houseData?.id}`,
			currentHousePage: true,
			mapIcon: true,
		},
	];

	if (!houseData) {
		return notFound();
	}
	return (
		houseData && (
			<main className='px-2 md:px-4  ' suppressHydrationWarning>
				<DynamicFavicon url={houseData.thumbnail} />
				<Breadcrumbing breadcrumbPaths={breadcrumbPaths} />
				<div className='max-w-6xl mx-auto lg:max-w-4xl'>
					<ImageStage houseData={houseData} />
					<HouseInformation houseData={houseData} />
				</div>
			</main>
		)
	);
}
