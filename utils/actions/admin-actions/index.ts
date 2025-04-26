"use server";

import { redirect } from "next/navigation";
import db from "@/prisma/db";
import { createHouseSchema, ZodValidatationForm } from "../../schemas";
import { renderError } from "@/utils/helperFunctions";
import { fetchHouseFullData } from "../house-actions";
import { removeImageFromCloudinary } from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";
import { getAuthUser } from "../user-actions/user-house-actions";
import { adminLinksRoutes, linksRoutes } from "@/utils/websiteData/enums";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export const getAdminUser = async () => {
	const user = await getAuthUser();
	if (
		user?.id !== process.env.ADMIN_USER_ID ||
		user?.id !== process.env.ADMIN_USER_ID_DEV
	) {
		return redirect(linksRoutes.HOME);
	}
	return user;
};
//= testing only
export const getTestAdmin = async () => {
	const clerk = await clerkClient();
	const adminUser = await clerk.users.getUser(process.env.ADMIN_USER_ID);
	return adminUser;
};

export const updateCarouselImages = async (
	prevState: { message: string },
	formData: FormData,
	imagesList: {
		id: string;
		url: string;
	}[]
) => {
	try {
		const deleteOldimages = await db.appImages.deleteMany({
			where: {
				name: "carousel",
			},
		});
		if (imagesList.length > 0) {
			const name = "carousel";
			const carousel = await db.appImages.createMany({
				data: imagesList.map((image) => ({
					id: image.id,
					url: image.url,
					name,
				})),
			});
		}
	} catch (error) {
		return renderError(error);
	}
	redirect(linksRoutes.HOME);
};
export const handleAddHouse = async (
	prevState: any,
	formData: FormData,
	thumbnailUrl: string,
	thumbnailPublicId: string,
	imagesList: {
		id: string;
		url: string;
	}[]
): Promise<{ message: string }> => {
	// const user = await getAdminUser();
	const user = await getTestAdmin();
	if (!user) {
		redirect(linksRoutes.HOME);
	}

	try {
		const houseId = crypto.randomUUID();
		const rawData = Object.fromEntries(formData);
		const validatedFields = ZodValidatationForm(createHouseSchema, rawData);
		if (!thumbnailUrl || !thumbnailPublicId) {
			throw new Error("Main Image is required");
		}
		if (imagesList.length === 0) {
			throw new Error("Upload at least one image per house");
		}

		await db.$transaction(async (tx) => {
			await tx.house.create({
				data: {
					id: houseId,
					clerkId: user.id as string,
					...validatedFields,
					thumbnail: thumbnailUrl,
					thumbnailId: thumbnailPublicId,
				},
			});

			await tx.image.createMany({
				data: imagesList.map((image) => ({
					id: image.id,
					url: image.url,
					houseId: houseId,
				})),
			});
		});
	} catch (error) {
		return renderError(error);
	}
	redirect(adminLinksRoutes.HOUSES);
};

export const fetchAdminHousesList = async () => {
	const houses = await db.house.findMany({
		orderBy: {
			createdAt: "desc",
		},
		include: {
			imagesList: true,
		},
	});
	if (!houses) {
		redirect(adminLinksRoutes.HOUSES);
	}
	return houses;
};

export const adminDeleteHouse = async (prevState: { houseId: string }) => {
	try {
		const { houseId } = prevState;
		const houseInfo = await fetchHouseFullData(houseId);
		const deleteImagesFromDB = await db.image.deleteMany({
			where: { houseId: houseId },
		});
		const deleteThumbnailFromCloudinary = await removeImageFromCloudinary(
			houseInfo?.thumbnailId as string
		);
		const deleteImagesFromCloudinary = await Promise.all(
			houseInfo?.imagesList?.map((image) =>
				removeImageFromCloudinary(image.id)
			) || []
		);
		const deleteHouseFromDB = await db.house.delete({
			where: { id: houseId },
		});

		revalidatePath(adminLinksRoutes.HOUSES);
		return { message: "House deleted successfully" };
	} catch (error) {
		return renderError(error);
	}
};

export const adminEditHouse = async (houseId: string) => {
	const house = await db.house.findUnique({
		where: {
			id: houseId,
		},
		include: {
			imagesList: true,
		},
	});
	if (!house) {
		throw new Error("House not found");
	}
	return house;
};

export const adminUpdateHouse = async (
	prevState: any,
	formData: FormData,
	id: string,
	thumbnailUrl: string,
	thumbnailPublicId: string,
	imagesList: {
		id: string;
		url: string;
	}[]
): Promise<{ message: string }> => {
	try {
		const rawData = Object.fromEntries(formData);
		const validatedFields = ZodValidatationForm(createHouseSchema, rawData);
		if (!thumbnailUrl || !thumbnailPublicId) {
			throw new Error("Main Image is required");
		}
		if (imagesList.length === 0) {
			throw new Error("Upload at least one image per house");
		}
		await db.$transaction(async (tx) => {
			await tx.house.update({
				where: { id },
				data: {
					...validatedFields,
					thumbnail: thumbnailUrl,
					thumbnailId: thumbnailPublicId,
				},
			});
			await tx.image.deleteMany({
				where: { houseId: id },
			});

			await tx.image.createMany({
				data: imagesList.map((image) => ({
					id: image.id,
					url: image.url,
					houseId: id,
				})),
			});
		});
	} catch (error) {
		return renderError(error);
	}
	redirect(adminLinksRoutes.HOUSES);
};
