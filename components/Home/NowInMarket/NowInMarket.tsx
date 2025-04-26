import { fetchHouseswithThumbnail } from "@/utils/actions/house-actions";
import NowInMarketHorizontal from "./NowInMarketHorizontal";
import { NowInMarketVertical } from "./NowInMarketVertical";
import SectionHeader from "@/components/reusable/SectionHeader";
import { NowInMarketData } from "@/utils/websiteData/enums";

export default async function NowInMarket() {
	const houses = await fetchHouseswithThumbnail();
	return (
		<section className='px-6 mb-10 mt-32'>
			<SectionHeader heading={NowInMarketData.HEADER} />
			<NowInMarketVertical houses={houses} />
			<NowInMarketHorizontal houses={houses} />
		</section>
	);
}
