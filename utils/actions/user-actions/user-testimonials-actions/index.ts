"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import db from "@/prisma/db";
import { currentUser } from "@clerk/nextjs/server";
import { testimonySchema, ZodValidatationForm } from "@/utils/schemas";
import { renderError } from "@/utils/helperFunctions";
import slugify from "slugify";
import { linksRoutes, userLinks } from "@/utils/websiteData/enums";

export const createTestimony = async (
	prevState: any,
	formData: FormData,
	clerkId: string,
	name: string,
	email: string,
	userImage: string
): Promise<{ message: string }> => {
	const user = await currentUser();
	if (!user) {
		return { message: "You must be logged in to create a testimony" };
	}
	if (user.id !== clerkId) {
		return { message: "You are not authorized to create a testimony" };
	}
	try {
		const rating = Number(formData.get("rating"));
		const testimony = formData.get("testimony");
		const validatedFields = ZodValidatationForm(testimonySchema, {
			rating,
			testimony,
		});

		const createNewTestimony = await db.testimonial.create({
			data: {
				clerkId: user.id as string,
				name: user.fullName as string,
				email: user.primaryEmailAddress?.emailAddress as string,
				userImage: user.imageUrl,
				text: validatedFields.testimony,
				rating: validatedFields.rating,
			},
		});
		revalidatePath(
			`${linksRoutes.PROFILE}/${user?.fullName}${userLinks.TESTIMONIALS}`
		);
		return { message: "Successfully created a testimony" };
	} catch (error) {
		return renderError(error);
	}
};

export const fetchUserTestimonials = async (userId: string) => {
	const user = await currentUser();
	if (userId !== user?.id) redirect(linksRoutes.HOME);
	const testimonials = await db.testimonial.findMany({
		where: {
			clerkId: user.id,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return testimonials;
};

export const deleteUserTestimony = async (
	prevState: any,
	fromData: FormData,
	testimonyId: string,
	clerkId: string,
	pathname: string
): Promise<{ message: string }> => {
	const user = await currentUser();
	const isOwner = clerkId === user?.id;
	const isAdmin =
		user?.id === process.env.ADMIN_USER_ID ||
		user?.id === process.env.ADMIN_USER_ID_DEV;
	if (!isOwner && !isAdmin) {
		return { message: "Unauthorized" };
	}
	try {
		const deleteTestimony = await db.testimonial.delete({
			where: {
				id: testimonyId,
				...(isAdmin ? {} : { clerkId }),
			},
		});

		revalidatePath(pathname);
		return { message: "Testimony deleted successfully" };
	} catch (error) {
		return renderError(error);
	}
};

export const fetchEditTestimonyData = async (testimonyId: string) => {
	const user = await currentUser();
	const getTestimonyData = await db.testimonial.findUnique({
		where: {
			id: testimonyId,
		},
	});
	return getTestimonyData;
};

export const updateEditTestimonyData = async (
	prevState: any,
	formData: FormData,
	clerkId: string,
	testimonyId: string
): Promise<{ message: string }> => {
	const user = await currentUser();
	if (clerkId !== user?.id) {
		return { message: "Unauthorized" };
	}
	const userFullName = slugify(user.fullName as string, { lower: true });

	try {
		const rating = Number(formData.get("rating"));
		const testimony = formData.get("testimony");
		const validatedFields = ZodValidatationForm(testimonySchema, {
			rating,
			testimony,
		});
		const updateTestimony = await db.testimonial.update({
			where: {
				id: testimonyId,
				clerkId,
			},
			data: {
				text: testimony as string,
				rating,
			},
		});
	} catch (error) {
		return renderError(error);
	}
	redirect(`${linksRoutes.PROFILE}/${userFullName}${userLinks.TESTIMONIALS}`);
};

export const fetchAllTestimonials = async () => {
	const testimonials = await db.testimonial.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return testimonials;
};
