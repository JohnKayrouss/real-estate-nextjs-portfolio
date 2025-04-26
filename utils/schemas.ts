import { z, ZodSchema } from "zod";

export const ZodValidatationForm = <T>(
	schema: ZodSchema<T>,
	data: unknown
): T => {
	const result = schema.safeParse(data);
	if (!result.success) {
		const errors = result.error.errors.map((error) => error.message);
		throw new Error(errors.join(" & "));
	}
	return result.data;
};

export const createHouseSchema = z.object({
	beds: z.coerce
		.number()
		.int()
		.min(1, { message: "Bedrooms must be at least 1" }),
	baths: z.coerce
		.number()
		.int()
		.min(1, { message: "Baths must be at least 1" }),
	sqft: z.coerce
		.number()
		.int()
		.min(100, { message: "Square feet must be at least 100" }),
	builtYear: z.coerce
		.number()
		.int()
		.min(1700, { message: "Built year must be at least 1700" })
		.max(new Date().getFullYear(), {
			message: "Built year must be less than or equal to current year",
		}),
	description: z.string().refine(
		(description) => {
			const wordCount = description.split(" ").length;
			return wordCount >= 5 && wordCount <= 1000;
		},
		{ message: "Description must be between 5 and 1000 words" }
	),
	price: z.coerce
		.number()
		.int()
		.min(1, { message: "Price must be at least 1" }),
	estPaymentPerMonth: z.coerce
		.number()
		.int()
		.min(1, { message: "Price must be at least 1" }),
	address: z
		.string()
		.min(10, { message: "Address must be at least 10 characters" })
		.max(100, { message: "Address must be at most 100 characters" }),
});

export const testimonySchema = z.object({
	testimony: z
		.string()
		.min(20, { message: "Testimony must be at least 10 characters" })
		.max(500, { message: "Testimony must be at most 500 characters" }),

	rating: z.coerce
		.number()
		.min(1, { message: "Rating must be at least 1" })
		.max(5, { message: "Rating must be at most 5" }),
});
