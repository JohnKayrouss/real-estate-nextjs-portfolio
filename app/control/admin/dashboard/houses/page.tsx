import React from "react";
import AdminHouseList from "./_components/AdminHouseList";
import { fetchAdminHousesList } from "@/utils/actions/admin-actions";

export default async function AdminHouses() {
	const housesList = await fetchAdminHousesList();

	return <AdminHouseList housesList={housesList} />;
}
