import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { adminDeleteHouse } from "@/utils/actions/admin-actions";

export function DeleteHouse({ houseId }: { houseId: string }) {
	const deleteHouse = adminDeleteHouse.bind(null, { houseId });
	return (
		<FormContainer action={deleteHouse}>
			<IconButton actionType='delete' className='text-destructive' />
		</FormContainer>
	);
}
