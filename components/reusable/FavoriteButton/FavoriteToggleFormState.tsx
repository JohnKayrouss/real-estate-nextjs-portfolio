import FormContainer from "@/components/form/FormContainer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import FavoriteToggleButton from "./FavoriteToggleButton";
import {
	favoriteToggleAction,
	fetchFavoriteId,
} from "@/utils/actions/user-actions/user-house-actions";

export default async function FavoriteToggleFormState({
	pathname,
	houseId,
}: {
	pathname: string;
	houseId: string;
}) {
	const favoriteId = await fetchFavoriteId(houseId);
	const favoriteToggle = async (
		prevState: { message: string },
		formData: FormData
	) => {
		"use server";
		return favoriteToggleAction(
			prevState,
			formData,
			pathname,
			houseId,
			favoriteId
		);
	};

	return (
		<FormContainer action={favoriteToggle}>
			<FavoriteToggleButton favoriteId={favoriteId} />
		</FormContainer>
	);
}
