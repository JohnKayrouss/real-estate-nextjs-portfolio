import { fetchCarouselImages } from "@/utils/actions/house-actions";
import AdminImageSlider from "./_components/AdminImageSlider";

export default async function ImageSliderPage() {
	const adminImages = await fetchCarouselImages();

	return <AdminImageSlider adminImages={adminImages} />;
}
