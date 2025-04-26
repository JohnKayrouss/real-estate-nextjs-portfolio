"use server";

import db from "@/prisma/db";

export const fetchCarouselImages = async () => {
	const carsouelImages = await db.appImages.findMany({
		where: {
			name: {
				contains: "carousel",
			},
		},
	});
	return carsouelImages;
};
export const fetch_Undeletable_CarouselImages = async () => {
	const carsouelImages = await db.appImages.findMany({
		where: {
			name: {
				contains: "undeletable",
			},
		},
	});
	return carsouelImages;
};
export const fetchAllHouses = async () => {
	const houses = await db.house.findMany({
		orderBy: {
			createdAt: "desc",
		},
		include: {
			imagesList: true,
			favorites: true,
		},
	});
	return houses;
};

export const fetchHouseswithThumbnail = async () => {
	const houses = await db.house.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});
	return houses;
};

export const fetchHouseFullData = async (houseSlug: string) => {
	const house = await db.house.findUnique({
		where: {
			id: houseSlug,
		},
		include: {
			imagesList: true,
		},
	});
	return house;
};
