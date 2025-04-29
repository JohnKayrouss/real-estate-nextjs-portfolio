import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { numberWithCommas } from "@/utils/helperFunctions";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import {
	adminDeleteHouse,
	fetchAdminHousesList,
} from "@/utils/actions/admin-actions";
import { adminPageHeading } from "@/utils/websiteData/enums";

export default async function HousesDashboard() {
	const housesList = await fetchAdminHousesList();

	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.HOUSES}
			classname=' capitalize'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='capitalize '>Details</TableHead>
						<TableHead className='capitalize hidden sm:table-cell'>
							price
						</TableHead>
						<TableHead className='text-right capitalize '>actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{housesList.map((house) => {
						const { price, id, address } = house;
						const priceWithCommas = numberWithCommas(price);

						return (
							<TableRow key={id}>
								<TableCell>
									<Link
										href={`/houses/${id}`}
										className='underline underline-offset-2 hover:text-primary line-clamp-1 '>
										{address}
									</Link>
								</TableCell>
								<TableCell className='hidden sm:table-cell '>
									<span className='text-primary '>$</span> {priceWithCommas}
								</TableCell>
								<TableCell className='text-right text-primary p-0 m-0'>
									<div className='flex justify-end '>
										<Link href={`/control/admin/dashboard/houses/${id}/edit`}>
											<IconButton actionType='edit' />
										</Link>
										<DeleteHouse houseId={id} />
									</div>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3} className='text-center text-md'>
							You have total of
							<span className='text-primary font-semibold '>
								{" "}
								{housesList.length}
							</span>{" "}
							houses in your dashboard.
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DashboardSectionWrapperWithHeader>
	);
}

function DeleteHouse({ houseId }: { houseId: string }) {
	const deleteHouse = adminDeleteHouse.bind(null, { houseId });
	return (
		<FormContainer action={deleteHouse}>
			<IconButton actionType='delete' className='text-destructive' />
		</FormContainer>
	);
}
