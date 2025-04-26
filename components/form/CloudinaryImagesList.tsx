"use client";
import { Button } from "../ui/button";
import { Images as ImageIcon, ImageUp, Trash } from "lucide-react";
import {
	CldUploadButton,
	CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { removeImageFromCloudinary } from "@/utils/cloudinary";
import { btns } from "@/utils/websiteData/enums";
type Image = {
	id: string;
	url: string;
	houseId?: string;
};

type props = {
	imagesList: Image[];
	setImagesList: React.Dispatch<React.SetStateAction<Image[]>>;
};
export default function CloudinaryImagesList({
	imagesList,
	setImagesList,
}: props) {
	const handleUploadImage = (result: CloudinaryUploadWidgetResults) => {
		const info = result.info as object;
		if ("secure_url" in info && "public_id" in info) {
			const url = info.secure_url as string;
			const publicId = info.public_id as string;
			setImagesList((prev) => [...prev, { id: publicId, url: url }]);
		}
	};
	const removeImage = async (e: React.FormEvent, ImagePublicId: string) => {
		e.preventDefault();
		const filteredList = imagesList.filter((img) => img.id !== ImagePublicId);
		setImagesList(filteredList);
		await removeImageFromCloudinary(ImagePublicId);
	};

	return (
		<div className='flex flex-col gap-4'>
			{imagesList.length === 0 && <EmptyImageContainer />}
			{imagesList.length > 0 && (
				<div className='h-56 sm:h-64 md:h-72 w-full bg-secondary rounded-md flex flex-row  items-center overflow-x-auto scrollbar-thin px-4 space-x-8'>
					{imagesList.map((image) => {
						return (
							<div
								key={crypto.randomUUID()}
								className='relative w-44 h-36 md:w-52 md:h-40 rounded-md shrink-0 '>
								<Image
									src={image.url}
									alt='image'
									fill
									priority
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
									className='rounded-sm object-cover '
								/>
								<div
									className='dark:bg-background bg-primary cursor-pointer absolute p-2 rounded-full -top-4 -right-2 md:-top-6 md:-right-3'
									onClick={(e) => removeImage(e, image.id)}>
									<Trash className='dark:text-destructive w-4 h-4 text-white' />
								</div>
							</div>
						);
					})}
				</div>
			)}
			<Button variant={"secondary"} size={"sm"} className='w-fit ' asChild>
				<CldUploadButton uploadPreset='dvfpsscoz' onSuccess={handleUploadImage}>
					<div className='flex flex-row items-center gap-2'>
						<ImageUp className='text-primary' />
						<span className='text-muted-foreground'>{btns.UPLOAD_IMAGES}</span>
					</div>
				</CldUploadButton>
			</Button>
		</div>
	);
}
function EmptyImageContainer() {
	return (
		<div className='h-56 sm:h-64 md:h-72 w-full  bg-secondary rounded-md flex items-center justify-center'>
			<div className='flex items-center justify-center gap-2 capitalize '>
				<ImageIcon className='text-primary' />
				<span className='text-muted-foreground'>Upload house images</span>
			</div>
		</div>
	);
}
