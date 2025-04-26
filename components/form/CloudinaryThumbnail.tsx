"use client";
import { Button } from "../ui/button";
import {
	CldUploadButton,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Image as ImageIcon, Trash } from "lucide-react";
import Image from "next/image";
import { removeImageFromCloudinary } from "@/utils/cloudinary";
import { btns } from "@/utils/websiteData/enums";

type Props = {
	thumbnailUrl: string;
	thumbnailPublicId: string;
	setThumbnailPublicId: React.Dispatch<React.SetStateAction<string>>;
	setThumbnailUrl: React.Dispatch<React.SetStateAction<string>>;
};
export default function CloudinaryThumbnail({
	thumbnailUrl,
	thumbnailPublicId,
	setThumbnailUrl,
	setThumbnailPublicId,
}: Props) {
	const handleUploadImage = (result: CloudinaryUploadWidgetResults) => {
		const info = result.info as object;
		if ("secure_url" in info && "public_id" in info) {
			const url = info.secure_url as string;
			const publicId = info.public_id as string;
			setThumbnailUrl(url);
			setThumbnailPublicId(publicId);
		}
	};
	const removeImage = async (e: React.FormEvent, thumbnailPublicId: string) => {
		e.preventDefault();
		await removeImageFromCloudinary(thumbnailPublicId);
		setThumbnailUrl("");
		setThumbnailPublicId("");
	};
	return (
		<div className='flex flex-col gap-4 '>
			<CldUploadButton
				uploadPreset='dvfpsscoz'
				onSuccess={handleUploadImage}
				className={`max-w-96 h-56 sm:h-64 md:h-72 bg-secondary rounded-md relative 
					 ${thumbnailUrl && "pointer-events-none"}`}>
				{!thumbnailUrl ? (
					<EmptyImageContainer />
				) : (
					<Image
						src={thumbnailUrl}
						alt='main image'
						fill
						priority
						className='rounded-md object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
					/>
				)}
			</CldUploadButton>
			{thumbnailUrl && thumbnailPublicId && (
				<Button
					variant={"secondary"}
					size={"sm"}
					className='w-fit'
					onClick={(e) => removeImage(e, thumbnailPublicId)}>
					<div className='flex items-center gap-2'>
						<Trash className='text-destructive' />
						<span className='text-muted-foreground'>{btns.DELETE}</span>
					</div>
				</Button>
			)}
		</div>
	);
}

function EmptyImageContainer() {
	return (
		<div className='flex items-center justify-center gap-2 capitalize'>
			<ImageIcon className='text-primary' />
			<span className='text-muted-foreground'>Upload main image</span>
		</div>
	);
}
