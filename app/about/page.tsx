import { appMetadata } from "@/utils/appMetadata";
import { Metadata } from "next";
import ServiceSection from "../services/_components/ServiceSection";
import { TBreadcrumbPath } from "@/utils/types";
import { Breadcrumbing } from "@/components/reusable/Breadcrumbing/Breadcrumbing";
import {
	aboutPageData,
	linksLabels,
	linksRoutes,
} from "@/utils/websiteData/enums";
export const metadata: Metadata = {
	title: appMetadata.defaultTitle("About"),
	description: appMetadata.defaultDescription(),
};

export default function AboutPage() {
	const breadcrumbPaths: TBreadcrumbPath[] = [
		{ title: linksLabels.HOME, path: linksRoutes.HOME },
		{
			title: linksLabels.ABOUT,
			path: linksRoutes.ABOUT,
			currentHousePage: true,
		},
	];
	return (
		<div>
			<Breadcrumbing breadcrumbPaths={breadcrumbPaths} />
			<div className='max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl  xl:max-w-6xl mx-auto px-6'>
				<ServiceSection
					title={aboutPageData.HEADER_TITLE}
					description={aboutPageData.HEADER_CONTENT}
					imageUrl={"/images/self-flipped-second.png"}
					imageOnLeft={false}
					contactMe={true}
				/>
				<div className='flex flex-col gap-6 '>
					<p className='text-muted-foreground text-sm lg:text-base'></p>
					<p className='text-muted-foreground'>
						{aboutPageData.FIRST_SECTION_CONTENT}
					</p>
					<p className='text-muted-foreground'>
						{aboutPageData.SECOND_SECTION_CONTENT}
					</p>
					<p className='text-muted-foreground'>
						{aboutPageData.THIRD_SECTION_CONTENT}
					</p>
				</div>
			</div>
		</div>
	);
}
