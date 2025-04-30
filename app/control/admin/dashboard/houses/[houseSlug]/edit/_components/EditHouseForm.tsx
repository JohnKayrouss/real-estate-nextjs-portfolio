"use client";
import React, { useEffect, useState } from "react";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import { SubmitButton } from "@/components/form/Buttons";
import CloudinaryImagesList from "@/components/form/CloudinaryImagesList";
import CloudinaryThumbnail from "@/components/form/CloudinaryThumbnail";
import FormContainer from "@/components/form/FormContainer";
import FormRow from "@/components/form/FormRow";
import NumberInput from "@/components/form/NumberInput";
import TextareaInput from "@/components/form/TextareaInput";
import TextInput from "@/components/form/TextInput";
import { type THouseWithImages } from "@/utils/types";
import {
	adminEditHouse,
	adminUpdateHouse,
} from "@/utils/actions/admin-actions";
import { adminPageHeading } from "@/utils/websiteData/enums";
type Image = {
	id: string;
	url: string;
	houseId?: string;
};

// {
// 	houseInfo,
// }: {
// 	houseInfo: THouseWithImages;
// }
export default function EditHouseForm({ houseSlug }: { houseSlug: string }) {
	const [houseInfo, setHouseInfo] = useState<THouseWithImages>();
	const [thumbnailUrl, setThumbnailUrl] = useState("");
	const [thumbnailPublicId, setThumbnailPublicId] = useState("");
	const [imagesList, setImagesList] = useState<Image[]>([]);
	useEffect(() => {
		const getData = async () => {
			const data = await adminEditHouse(houseSlug);
			setHouseInfo(data);
			setThumbnailUrl(data.thumbnail || "");
			setThumbnailPublicId(data.thumbnailId || "");
			setImagesList(data.imagesList || []);
		};
		getData();
	}, []);

	const createHouseAction = async (
		prevState: { message: string },
		formData: FormData
	) => {
		return adminUpdateHouse(
			prevState,
			formData,
			id,
			thumbnailUrl,
			thumbnailPublicId,
			imagesList
		);
	};
	if (!houseInfo) return;

	const {
		beds,
		baths,
		sqft,
		price,
		address,
		estPaymentPerMonth,
		builtYear,
		description,
		thumbnail,
		thumbnailId,
		id,
		imagesList: images,
	} = houseInfo;

	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.EDIT_HOUSE}
			classname=' capitalize'>
			<FormContainer action={createHouseAction}>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput name='beds' label='bedrooms' defaultValue={beds} />
					<NumberInput name='baths' label='baths' defaultValue={baths} />
				</FormRow>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput name='sqft' label='sqft' defaultValue={sqft} />
					<NumberInput
						name='price'
						label='Price'
						placeholder='$'
						minimumNumber={1}
						defaultValue={price}
					/>
				</FormRow>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput
						name='estPaymentPerMonth'
						label='Est. per month'
						placeholder='$ /mo'
						defaultValue={estPaymentPerMonth}
					/>
					<NumberInput
						name='builtYear'
						label='built in'
						placeholder='YYYY'
						defaultValue={builtYear}
						minimumNumber={1700}
						maximumNumber={new Date().getFullYear()}
					/>
				</FormRow>
				<FormRow className=' grid-cols-1'>
					<TextInput
						name='address'
						label='address'
						placeholder='123 St. Anytown, USA 12345'
						defaultValue={address}
					/>
				</FormRow>

				<FormRow className=' grid-cols-1'>
					<CloudinaryThumbnail
						thumbnailUrl={thumbnailUrl}
						thumbnailPublicId={thumbnailPublicId}
						setThumbnailUrl={setThumbnailUrl}
						setThumbnailPublicId={setThumbnailPublicId}
					/>
				</FormRow>
				<FormRow className=' grid-cols-1'>
					<CloudinaryImagesList
						imagesList={imagesList}
						setImagesList={setImagesList}
					/>
				</FormRow>
				<FormRow className='grid-cols-1'>
					<TextareaInput
						name='description'
						label='description'
						defaultValue='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, adipisci!
				'
					/>
				</FormRow>
				<SubmitButton type='update' />
			</FormContainer>
		</DashboardSectionWrapperWithHeader>
	);
}
