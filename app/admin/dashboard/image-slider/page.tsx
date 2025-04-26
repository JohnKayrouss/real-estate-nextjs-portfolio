import { fetchCarouselImages } from "@/utils/actions/house-actions";
import AdminImageSlider from "./_components/AdminImageSlider";
import { AdminMetadata } from "@/utils/appMetadata";
import { metadataInfo } from "@/utils/websiteData/enums";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_IMAGE_SLIDER),
	description: AdminMetadata.defaultDescription(),
};
export default async function ImageSliderPage() {
	const adminImages = await fetchCarouselImages();

	return <AdminImageSlider adminImages={adminImages} />;
}
