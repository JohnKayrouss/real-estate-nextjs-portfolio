import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { numberWithCommas } from "@/utils/helperFunctions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FavoriteSignInButton from "@/components/reusable/FavoriteButton/FavoriteSignInButton";
import { TFavorite, THouse, TImage } from "@/utils/types";
import FavoriteToggleForm from "@/components/reusable/FavoriteButton/FavoriteToggleForm";
import ShareButton from "@/components/reusable/ShareButton/ShareButton";
import { btns } from "@/utils/websiteData/enums";

type HouseCardProps = THouse & {
	imagesList: TImage[];
	favorites: TFavorite[];
	isSignedIn: boolean;
	pathname: string;
};

export default function HouseCard({
	pathname,
	id,
	price,
	beds,
	baths,
	sqft,
	thumbnail,
	favorites,
	isSignedIn,
}: HouseCardProps) {
	const favoriteId = favorites.map((fav) => fav.id)[0];
	return (
		<Card key={id} className=' max-w-[345px] '>
			<CardHeader className='pl-2 sm:pl-5 mx-0 md:pl-4 '>
				<CardTitle>
					<span className='text-primary'>$</span> {numberWithCommas(price)}
				</CardTitle>
			</CardHeader>

			<CardContent className='w-[19.4rem] h-52 relative rounded-md mx-auto '>
				<Image
					src={thumbnail}
					alt='house image'
					fill
					loading='lazy'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
					className='object-cover rounded-md'
				/>
			</CardContent>
			<CardDescription className='w-[19.35rem] relative rounded-md mx-auto py-4'>
				<ul className='flex justify-between'>
					<li>
						Beds:<span className='text-foreground pl-1'>{beds}</span>
					</li>
					<li>
						Baths:
						<span className='text-foreground pl-1'>{baths}</span>
					</li>
					<li>
						Sqft:
						<span className='text-foreground pl-1'>
							{numberWithCommas(sqft)}
						</span>
					</li>
				</ul>
			</CardDescription>
			<CardFooter className='flex justify-between px-2  sm:px-5 md:px-4'>
				<Button asChild className='text-white'>
					<Link href={`/houses/${id}`}>{btns.SEE_DETAILS}</Link>
				</Button>
				<div className='flex flex-row gap-x-3'>
					{!isSignedIn && <FavoriteSignInButton />}
					{isSignedIn && (
						<FavoriteToggleForm
							pathname={pathname}
							houseId={id}
							favoriteId={favoriteId}
						/>
					)}
					<ShareButton houseId={id} houseImg={thumbnail} />
				</div>
			</CardFooter>
		</Card>
	);
}
