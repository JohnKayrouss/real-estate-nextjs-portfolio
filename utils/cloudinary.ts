"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const removeImageFromCloudinary = async (publicId: string) => {
	try {
		const res = await cloudinary.uploader.destroy(publicId);
	} catch (error) {
		return error;
	}
};
