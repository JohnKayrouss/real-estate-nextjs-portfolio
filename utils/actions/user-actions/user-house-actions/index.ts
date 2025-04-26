"use server";
import { revalidatePath } from "next/cache";
import db from "@/prisma/db";
import { currentUser } from "@clerk/nextjs/server";
import { renderError } from "@/utils/helperFunctions";
export const getAuthUser = async () => {
	const user = await currentUser();

	return user;
};

export const fetchFavoriteId = async (houseId: string) => {
	const user = await getAuthUser();
	if (!user) return null;

	const isFavorite = await db.favorite.findFirst({
		where: {
			houseId: houseId,
			clerkId: user.id,
		},
	});

	return isFavorite ? isFavorite.id : null;
};

export const favoriteToggleAction = async (
	prevState: { message: string },
	formData: FormData,
	pathname: string,
	houseId: string,
	favoriteId: string | null
) => {
	const user = await getAuthUser();
	if (!user) {
		return { message: "You must be signed in to favorite" };
	}
	try {
		if (favoriteId) {
			// remove favorite
			await db.favorite.deleteMany({
				where: {
					id: favoriteId,
					clerkId: user.id,
				},
			});
		} else {
			// add favorite
			const favorite = await db.favorite.create({
				data: {
					houseId,
					clerkId: user.id,
				},
			});
		}
		revalidatePath(pathname);
		return {
			message: favoriteId ? "removed from favorites" : "added to favorites",
		};
	} catch (error) {
		return renderError(error);
	}
};

export const fetchUserFavoritesHouses = async (clerkId: string) => {
	const user = await getAuthUser();
	if (!user) return null;

	const favorites = await db.favorite.findMany({
		where: {
			clerkId: user.id,
		},
		include: {
			house: {
				include: {
					imagesList: true,
					favorites: true,
				},
			},
		},
	});

	const favoriteHouses = favorites
		.map((fav) => fav.house)
		.filter((house) => house !== null);

	return favoriteHouses;
};
