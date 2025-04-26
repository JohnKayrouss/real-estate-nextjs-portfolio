import React from "react";
import AdminCreateHouseForm from "./_components/HouseCreateForm";
import { AdminMetadata } from "@/utils/appMetadata";
import { metadataInfo } from "@/utils/websiteData/enums";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_CREATE_HOUSE),
	description: AdminMetadata.defaultDescription(),
};
export default function page() {
	return <AdminCreateHouseForm />;
}
