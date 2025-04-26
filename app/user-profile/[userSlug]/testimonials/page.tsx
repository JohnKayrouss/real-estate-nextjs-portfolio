import TestimonialForm from "@/components/Testimonials/TestimonialForm";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import TestimonialList from "../../_components/TestimonialList";
import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import { fetchUserTestimonials } from "@/utils/actions/user-actions/user-testimonials-actions";
import { linksRoutes } from "@/utils/websiteData/enums";

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

export default async function UserTestimonialsPage() {
	const user = await currentUser();
	if (!user) redirect(linksRoutes.HOME);
	const testimonials = await fetchUserTestimonials(user.id);

	const testimonialUserData = {
		clerkId: user.id as string,
		name: user.fullName as string,
		email: user.primaryEmailAddress?.emailAddress as string,
		userImage: user.imageUrl as string,
	};
	return (
		<div className='px-4 max-w-7xl mx-auto'>
			<TestimonialList testimonials={testimonials} />
			<TestimonialForm testimonialUserData={testimonialUserData} />
		</div>
	);
}
