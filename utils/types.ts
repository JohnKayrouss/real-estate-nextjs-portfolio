export type THouse = {
	id: string;
	clerkId: string;
	price: number;
	address: string;
	description: string;
	baths: number;
	beds: number;
	sqft: number;
	builtYear: number;
	estPaymentPerMonth: number;
	thumbnail: string;
	thumbnailId: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type TImage = {
	id: string;
	url: string;
	houseId: string;
};

export type TFavorite = {
	id: string;
	clerkId: string;
	houseId: string;
};

export type THouseWithImages = THouse & {
	imagesList: TImage[];
};

export type TBreadcrumbPath = {
	title: string;
	path: string;
	currentHousePage?: boolean;
	mapIcon?: boolean;
};

export type TActionFunction = (
	prevState: any,
	formData: FormData
) => Promise<{ message: string }>;
