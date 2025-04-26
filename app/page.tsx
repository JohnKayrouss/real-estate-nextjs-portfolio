import Hero from "@/components/Home/Hero/Hero";
import SelfSection from "@/components/Home/HomeCarousel/SelfSection";
import HomeTestimonials from "@/components/Home/HomeTestimonials/HomeTestimonials";
import NowInMarket from "@/components/Home/NowInMarket/NowInMarket";
import Philosophy from "@/components/Home/Philosophy/Philosophy";
import { getTestAdmin } from "@/utils/actions/admin-actions";

const HomePage = async () => {
	const admin = await getTestAdmin();
	return (
		<main className=''>
			<Hero />
			<SelfSection />
			<Philosophy />
			<NowInMarket />
			<HomeTestimonials />
		</main>
	);
};
export default HomePage;
