import EditTestimonyForm from "./_components/EditTestimonyForm";
import { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { appMetadata } from "@/utils/appMetadata";
import { fetchEditTestimonyData } from "@/utils/actions/user-actions/user-testimonials-actions";

export async function generateMetadata(): Promise<Metadata> {
	const user = await currentUser();
	if (user && Object.keys(user).length !== 0) {
		return {
			title: `${
				user.fullName || (user?.primaryEmailAddress?.emailAddress as string)
			} | Testimonials`,

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
type Props = {
	params: Promise<{
		testimonySlug: string;
	}>;
};
export default async function UserEditTestimonyPage({ params }: Props) {
	const { testimonySlug } = await params;
	const testimonyData = await fetchEditTestimonyData(testimonySlug);
	return <EditTestimonyForm testimonial={testimonyData} />;
}
