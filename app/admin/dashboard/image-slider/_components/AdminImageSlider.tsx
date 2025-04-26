"use client";
import React, { useState } from "react";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import CloudinaryImagesList from "@/components/form/CloudinaryImagesList";
import FormContainer from "@/components/form/FormContainer";
import FormRow from "@/components/form/FormRow";
import { SubmitButton } from "@/components/form/Buttons";
import { updateCarouselImages } from "@/utils/actions/admin-actions";
import { adminPageHeading } from "@/utils/websiteData/enums";

type Image = {
	id: string;
	url: string;
	houseId?: string;
};
export default function AdminImageSlider({
	adminImages,
}: {
	adminImages: Image[];
}) {
	const [imagesList, setImagesList] = useState<Image[]>(adminImages);

	const updateCarousel = async (
		prevState: { message: "" },
		formData: FormData
	) => {
		return updateCarouselImages(prevState, formData, imagesList);
	};
	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.IMAGE_SLIDER}
			classname=' capitalize'>
			<FormContainer action={updateCarousel}>
				<FormRow className=' grid-cols-1'>
					<CloudinaryImagesList
						imagesList={imagesList}
						setImagesList={setImagesList}
					/>
				</FormRow>
				<SubmitButton type='submit' />
			</FormContainer>
		</DashboardSectionWrapperWithHeader>
	);
}
