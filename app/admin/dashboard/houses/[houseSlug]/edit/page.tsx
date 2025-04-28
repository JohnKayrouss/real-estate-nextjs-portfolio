import { adminEditHouse } from "@/utils/actions/admin-actions";
import EditHouseForm from "./_components/EditHouseForm";

// type Props = {
// 	params: Promise<{
// 		houseSlug: string;
// 	}>;
// };
type Props = {
	params: Promise<{
		houseSlug: string;
	}>;
};

export default async function AdminEditProductPage({ params }: Props) {
	const { houseSlug } = await params;
	const houseInfo = await adminEditHouse(houseSlug);
	return <EditHouseForm houseInfo={houseInfo} />;
}
