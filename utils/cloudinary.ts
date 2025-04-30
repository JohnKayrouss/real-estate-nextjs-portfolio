"use server";
import cloudnary from "cloudinary";

cloudnary.v2.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const removeImageFromCloudinary = async (publicId: string) => {
	try {
		const res = await cloudnary.v2.uploader.destroy(publicId);
	} catch (error) {
		return error;
	}
};
