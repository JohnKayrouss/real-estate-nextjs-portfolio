"use client";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormRow from "@/components/form/FormRow";
import NumberInput from "@/components/form/NumberInput";
import TextareaInput from "@/components/form/TextareaInput";
import { updateEditTestimonyData } from "@/utils/actions/user-actions/user-testimonials-actions";
import { linksRoutes } from "@/utils/websiteData/enums";
import { Testimonial } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
	testimonial: Testimonial | null;
};

export default function EditTestimonyForm({ testimonial }: Props) {
	if (!testimonial) redirect(linksRoutes.HOME);
	const { id, name, rating, text, clerkId, email, userImage } = testimonial;
	const updateAction = async (
		prevState: { message: string },
		formData: FormData
	) => {
		return updateEditTestimonyData(prevState, formData, clerkId, id);
	};
	return (
		<div className='mt-20 max-w-96 md:max-w-3xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4'>
			<DashboardSectionWrapperWithHeader heading='Edit Testimony'>
				<FormContainer action={updateAction}>
					<FormRow className='grid-cols-1 max-w-96'>
						<NumberInput
							name='rating'
							maximumNumber={5}
							minimumNumber={1}
							defaultValue={rating}
							label='Rating'
						/>
					</FormRow>
					<FormRow className='grid-cols-1'>
						<TextareaInput
							name='testimony'
							label='Your Testimony'
							defaultValue={text}
						/>
					</FormRow>
					<SubmitButton>Submit</SubmitButton>
				</FormContainer>
			</DashboardSectionWrapperWithHeader>
		</div>
	);
}
