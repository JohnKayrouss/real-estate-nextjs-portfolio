"use client";
import React, { useState } from "react";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import { SubmitButton } from "@/components/form/Buttons";
import CloudinaryThumbnail from "@/components/form/CloudinaryThumbnail";
import FormContainer from "@/components/form/FormContainer";
import FormRow from "@/components/form/FormRow";
import NumberInput from "@/components/form/NumberInput";
import TextareaInput from "@/components/form/TextareaInput";
import TextInput from "@/components/form/TextInput";

import CloudinaryImagesList from "@/components/form/CloudinaryImagesList";
import { handleAddHouse } from "@/utils/actions/admin-actions";
import { adminPageHeading } from "@/utils/websiteData/enums";

type Image = {
	id: string;
	url: string;
	houseId?: string;
};

export default function AdminCreateHouseForm() {
	const [thumbnailUrl, setThumbnailUrl] = useState("");
	const [thumbnailPublicId, setThumbnailPublicId] = useState("");
	const [imagesList, setImagesList] = useState<Image[]>([]);

	const createHouseAction = async (
		prevState: { message: string },
		formData: FormData
	) => {
		return handleAddHouse(
			prevState,
			formData,
			thumbnailUrl,
			thumbnailPublicId,
			imagesList
		);
	};

	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.CREATE_HOUSE}
			classname=' capitalize'>
			<FormContainer action={createHouseAction}>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput name='beds' label='bedrooms' defaultValue={3} />
					<NumberInput name='baths' label='baths' defaultValue={3} />
				</FormRow>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput name='sqft' label='sqft' defaultValue={2200} />
					<NumberInput
						name='price'
						label='Price'
						placeholder='$'
						minimumNumber={1}
						defaultValue={3000000}
					/>
				</FormRow>
				<FormRow className='grid-cols-2 sm:grid-cols-2'>
					<NumberInput
						name='estPaymentPerMonth'
						label='Est. per month'
						placeholder='$ /mo'
						defaultValue={3000}
					/>
					<NumberInput
						name='builtYear'
						label='built in'
						placeholder='YYYY'
						minimumNumber={1700}
						maximumNumber={new Date().getFullYear()}
						defaultValue={2020}
					/>
				</FormRow>
				<FormRow className=' grid-cols-1'>
					<TextInput
						name='address'
						label='address'
						placeholder='123 St. Anytown, USA 12345'
						defaultValue={"123 St. Anytown, USA 12345"}
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
						defaultValue='neuiwv bu bu bu 9u hu9 hu hu ih ui hu ih'
					/>
				</FormRow>

				<SubmitButton>Submit</SubmitButton>
			</FormContainer>
		</DashboardSectionWrapperWithHeader>
	);
}
