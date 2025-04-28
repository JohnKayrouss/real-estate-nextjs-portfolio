import FavoriteToggleFormState from "./FavoriteToggleFormState";

export default function FavoriteToggleForm({
	pathname,
	houseId,
	favoriteId,
}: {
	pathname: string;
	houseId: string;
	favoriteId: string | null;
}) {
	return (
		<div>
			<FavoriteToggleFormState
				pathname={pathname}
				houseId={houseId}
				// favoriteId={favoriteId}
			/>
		</div>
	);
}
