import { auth } from "@clerk/nextjs/server";
import { THouseWithImages } from "./types";
import { useAuth } from "@clerk/clerk-react";

//= checking if user is logged in as admin
export const isAdmin = async (): Promise<boolean> => {
	const { userId } = await auth();
	if (!userId) return false;
	const userIsAdmin = userId === process.env.ADMIN_USER_ID;
	return userIsAdmin;
};

//= adding commas to numbers
export function numberWithCommas(x: number) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//= adding commas to numbers
export function pricePerSqft(totalPrice: number, sqft: number) {
	return (totalPrice / sqft).toFixed(0);
}

//= format house data
export const houseDetails = (houseData: THouseWithImages) => {
	const details = [
		{ title: "Built in", info: houseData.builtYear },
		{ title: "Beds", info: houseData.beds },
		{ title: "Baths", info: houseData.baths },
		{ title: "Sqft", info: numberWithCommas(houseData.sqft) },

		{
			title: "Price",
			info: houseData.price ? numberWithCommas(houseData.price) : null,
		},
		{
			title: "Est. Price Per sqft",
			info:
				houseData.price && houseData.sqft
					? `$${pricePerSqft(houseData.price, houseData.sqft)}/sqft`
					: null,
		},
		{
			title: "Est. Payment per month",
			info: `$${numberWithCommas(houseData.estPaymentPerMonth)}/mo`,
		},
		{
			title: "Description",
			info: houseData.description,
		},
		{
			title: "Address",
			info: houseData.address,
		},
	];
	return details.filter(
		(detail) => detail.info !== null && detail.info !== undefined
	);
};
//= check error
export const renderError = (error: unknown): { message: string } => {
	return {
		message: error instanceof Error ? error.message : "Error creating product",
	};
};

//estPaymentPerMonth

const getMonthlyPayment = () => {
	return;
};
