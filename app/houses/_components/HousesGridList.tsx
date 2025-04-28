import HouseCard from "./HouseCard";
import { currentUser } from "@clerk/nextjs/server";
import { TFavorite, THouse, TImage } from "@/utils/types";

type HouseWithImagesAndFavorites = THouse & {
	imagesList: TImage[];
	favorites: TFavorite[];
};

type HousesGridListProps = {
	housesList: HouseWithImagesAndFavorites[];
};

export default async function HousesGridList({
	housesList,
}: HousesGridListProps) {
	const user = await currentUser();
	const houses = housesList.map((house) => {
		return (
			<HouseCard
				key={house.id}
				{...house}
				imagesList={house.imagesList}
				isSignedIn={!!user?.id}
				pathname='/houses'
			/>
		);
	});

	return (
		<div
			className='mt-10 grid grid-cols-1 max-w-96 md:grid-cols-2 md:max-w-3xl lg:grid-cols-2 lg:max-w-3xl  xl:grid-cols-3  xl:max-w-6xl gap-4 px-4  mx-auto'
			suppressHydrationWarning>
			{houses}
		</div>
	);
}
