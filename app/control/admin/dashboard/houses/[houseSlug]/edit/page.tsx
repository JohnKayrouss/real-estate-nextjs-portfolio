import EditHouseForm from "./_components/EditHouseForm";
import { Metadata } from "next";
import { metadataInfo } from "@/utils/websiteData/enums";
import { AdminMetadata } from "@/utils/appMetadata";

export const metadata: Metadata = {
	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_EDIT_HOUSE),
	description: AdminMetadata.defaultDescription(),
};
type Props = {
	params: Promise<{
		houseSlug: string;
	}>;
};

export default async function AdminEditProductPage({ params }: Props) {
	const { houseSlug } = await params;
	return <EditHouseForm houseSlug={houseSlug} />;
}
