import FavoriteToggleFormState from "./FavoriteToggleFormState";

export default function FavoriteToggleForm({
	pathname,
	houseId,
}: {
	pathname: string;
	houseId: string;
	favoriteId: string | null;
}) {
	return (
		<div>
			<FavoriteToggleFormState pathname={pathname} houseId={houseId} />
		</div>
	);
}
