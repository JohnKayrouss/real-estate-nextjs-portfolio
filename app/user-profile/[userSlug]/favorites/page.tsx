import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Empty from "@/components/reusable/Empty/Empty";
import HousesGridList from "@/app/houses/_components/HousesGridList";
import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import { headers } from "next/headers";
import { fetchUserFavoritesHouses } from "@/utils/actions/user-actions/user-house-actions";
import { linksRoutes } from "@/utils/websiteData/enums";

export async function generateMetadata(): Promise<Metadata> {
	const user = await currentUser();
	if (user && Object.keys(user).length !== 0) {
		return {
			title: `${
				user.fullName || (user?.primaryEmailAddress?.emailAddress as string)
			} | Favorites`,

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

export default async function UserFavoritesPage() {
	const user = await currentUser();
	if (!user) redirect(linksRoutes.HOME);
	const headersList = headers();
	const csp = (await headersList).get("content-security-policy");
	const userFavList = await fetchUserFavoritesHouses(user?.id as string);

	return (
		<div className='px-4 max-w-7xl mx-auto'>
			{userFavList && Object.keys(userFavList).length > 0 ? (
				<HousesGridList housesList={userFavList} />
			) : (
				<Empty header='No Favorites yet!' />
			)}
		</div>
	);
}
