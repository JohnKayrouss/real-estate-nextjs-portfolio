import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TBreadcrumbPath } from "@/utils/types";

import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import DynamicFavicon from "@/components/reusable/DynamicFavicon/DynamicFavicon";
import { Breadcrumbing } from "@/components/reusable/Breadcrumbing/Breadcrumbing";
import UserInfo from "./_components/UserInfo";
import UserNavigationButtons from "./_components/UserNavigationButtons";
import slugify from "slugify";
import { linksLabels, linksRoutes, userLinks } from "@/utils/websiteData/enums";
export async function generateMetadata(): Promise<Metadata> {
	const user = await currentUser();

	if (user && Object.keys(user).length !== 0) {
		return {
			title: `Welcome, ${
				user.fullName || (user?.primaryEmailAddress?.emailAddress as string)
			}`,

			description: appMetadata.defaultDescription(
				`Thank you, ${
					user?.fullName || (user?.primaryEmailAddress?.emailAddress as string)
				}! for choosing our real estate website as your partner`
			),
		};
	}
	return {
		title: appMetadata.defaultTitle("Houses"),
		description: appMetadata.defaultDescription(),
	};
}

export default async function layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = await currentUser();
	if (!user) redirect(linksRoutes.HOME);
	const breadcrumbPaths: TBreadcrumbPath[] = [
		{ title: linksLabels.HOME, path: linksRoutes.HOME },
		{
			title: user.fullName as string,
			path: `${linksRoutes.PROFILE}/${user.fullName as string}${
				userLinks.FAVORITES
			}`,
			currentHousePage: true,
		},
	];
	const userFullName = slugify(user.fullName as string, { lower: true });

	return (
		<div className='px-4 max-w-7xl mx-auto'>
			<DynamicFavicon url={user.imageUrl} />
			<Breadcrumbing breadcrumbPaths={breadcrumbPaths} />
			<UserInfo user={user} />
			<UserNavigationButtons userFullName={userFullName} />
			{children}
		</div>
	);
}
