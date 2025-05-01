import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { houseDetails } from "@/utils/helperFunctions";
import { type THouseWithImages } from "@/utils/types";
import FavoriteSignInButton from "../reusable/FavoriteButton/FavoriteSignInButton";
import FavoriteToggleForm from "../reusable/FavoriteButton/FavoriteToggleForm";
import ShareButton from "../reusable/ShareButton/ShareButton";
import { currentUser } from "@clerk/nextjs/server";
import ContacInfoSlider from "../reusable/ContacInfoSlider/ContacInfoSlider";
import { fetchFavoriteId } from "@/utils/actions/user-actions/user-house-actions";
import { house } from "@/utils/websiteData/enums";

export default async function HouseInformation({
	houseData,
}: {
	houseData: THouseWithImages;
}) {
	const user = await currentUser();
	const favoriteId = await fetchFavoriteId(houseData.id);
	const isSignedIn = !!user?.id;
	const data = houseDetails(houseData);
	const price = data?.filter((item) => item.title === house.PRICE)[0].info;
	const houseDescription = data?.filter(
		(item) => item.title === house.DESCRIPTION
	)[0].info;

	return (
		<div className='mx-auto flex flex-col items-center mt-5 '>
			{houseDescription && (
				<div className='w-full h-fit px-2 flex  flex-col gap-2  justify-between items-center py-2'>
					<div className='flex w-fit gap-x-3 self-end'>
						<ContacInfoSlider />
						{!isSignedIn && <FavoriteSignInButton />}
						{isSignedIn && (
							<FavoriteToggleForm
								pathname={`pathname='/houses/${houseData.id}`}
								houseId={houseData.id}
								favoriteId={favoriteId}
							/>
						)}
						<ShareButton
							houseId={houseData.id}
							houseImg={houseData.thumbnail}
						/>
					</div>
					<div className='my-2'>
						<h1 className='text-muted-foreground'>Summary:</h1>
						<p className='text-sm'>{houseDescription}</p>
					</div>
				</div>
			)}
			<Table className='mb-10 mt-6'>
				<TableCaption>
					Contact us to get the latest and greatest deals!
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Information</TableHead>
						<TableHead className='text-right'>Details</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((item, idx) => {
						if (item.title === house.PRICE || item.title === house.DESCRIPTION)
							return null;
						return (
							<TableRow key={idx}>
								<TableCell>{item.title}</TableCell>
								<TableCell className='text-right'>{item.info}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
				<TableFooter>
					{price ? (
						<TableRow>
							<TableCell colSpan={1}>{house.PRICE}</TableCell>
							<TableCell className='text-right text-primary'>
								${price}
							</TableCell>
						</TableRow>
					) : (
						<TableRow>
							<TableCell colSpan={1}>{house.PRICE}</TableCell>
							<TableCell className='text-right'>
								<span className=' capitalize'>Contact Us</span>
							</TableCell>
						</TableRow>
					)}
				</TableFooter>
			</Table>
		</div>
	);
}
