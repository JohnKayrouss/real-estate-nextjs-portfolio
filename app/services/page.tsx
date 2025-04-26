import { appMetadata } from "@/utils/appMetadata";
import { Metadata } from "next";
import ServiceSection from "./_components/ServiceSection";
import { TBreadcrumbPath } from "@/utils/types";
import { serviceList } from "./_components/serviceList";
import { Breadcrumbing } from "@/components/reusable/Breadcrumbing/Breadcrumbing";
import {
	linksLabels,
	linksRoutes,
	metadataInfo,
} from "@/utils/websiteData/enums";

export const metadata: Metadata = {
	title: appMetadata.defaultTitle(metadataInfo.SERVICES),
	description: appMetadata.defaultDescription(
		metadataInfo.SERVICES_DESCRIPTION
	),
};

export default function ServicesPage() {
	const breadcrumbPaths: TBreadcrumbPath[] = [
		{ title: linksLabels.HOME, path: linksRoutes.HOME },
		{
			title: linksLabels.SERVICES,
			path: linksRoutes.SERVICES,
			currentHousePage: true,
		},
	];

	return (
		<div className='px-4'>
			<Breadcrumbing breadcrumbPaths={breadcrumbPaths} />

			{serviceList.map((item) => {
				return (
					<ServiceSection
						key={crypto.randomUUID()}
						title={item.title}
						description={item.description}
						imageUrl={item.imageUrl}
						imageOnLeft={item.imageOnLeft}
						contactMe={item.contactMe}
					/>
				);
			})}
		</div>
	);
}
