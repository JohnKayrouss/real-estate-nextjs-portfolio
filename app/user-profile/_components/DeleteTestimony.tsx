"use client";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { deleteUserTestimony } from "@/utils/actions/user-actions/user-testimonials-actions";
import { usePathname } from "next/navigation";
import React from "react";

export default function DeleteTestimony({
	testimonyId,
	clerkId,
	variantLink = false,
}: {
	testimonyId: string;
	clerkId: string;
	variantLink?: boolean;
}) {
	const pathname = usePathname();
	const deleteAction = async (
		prevState: { message: string },
		formData: FormData
	) => {
		return deleteUserTestimony(
			prevState,
			formData,
			testimonyId,
			clerkId,
			pathname
		);
	};

	const variant = variantLink ? "link" : "secondary";

	return (
		<FormContainer action={deleteAction}>
			<IconButton
				actionType='delete'
				variantType={variant}
				className='text-destructive'
			/>
		</FormContainer>
	);
}
