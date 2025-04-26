"use client";
import DashboardSectionWrapperWithHeader from "../admin/DashboardSectionWrapperWithHeader";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import FormRow from "../form/FormRow";
import TextareaInput from "../form/TextareaInput";
import NumberInput from "../form/NumberInput";
import { createTestimony } from "@/utils/actions/user-actions/user-testimonials-actions";

type Props = {
	testimonialUserData: {
		clerkId: string;
		name: string;
		email: string;
		userImage: string;
	};
};
const initialState = { message: "" };
export default function TestimonialForm({ testimonialUserData }: Props) {
	const { clerkId, name, email, userImage } = testimonialUserData;
	const createAction = async (
		prevState: { message: string },
		formData: FormData
	) => {
		return createTestimony(
			prevState,
			formData,
			clerkId,
			name,
			email,
			userImage
		);
	};
	return (
		<div className='mt-20 max-w-96 md:max-w-3xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4'>
			<DashboardSectionWrapperWithHeader
				heading='Leave a testimony'
				classname='mt-20 max-w-96 md:max-w-3xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4'>
				<FormContainer action={createAction}>
					<FormRow className='grid-cols-1 max-w-96'>
						<NumberInput
							name='rating'
							maximumNumber={5}
							minimumNumber={1}
							label='Rating'
						/>
					</FormRow>
					<FormRow className='grid-cols-1'>
						<TextareaInput name='testimony' label='Your Testimony' />
					</FormRow>
					<SubmitButton>Submit</SubmitButton>
				</FormContainer>
			</DashboardSectionWrapperWithHeader>
		</div>
	);
}
