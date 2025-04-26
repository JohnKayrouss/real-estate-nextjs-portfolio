import { fetchAllTestimonials } from "@/utils/actions/user-actions/user-testimonials-actions";
import SectionHeader from "@/components/reusable/SectionHeader";
import HomeTestimonialsHorizontal from "./HomeTestimonialsHorizontal";
import HomeTestimonialsVertical from "./HomeTestimonialsVertical";
import { HomeTestimonialsData } from "@/utils/websiteData/enums";

export default async function HomeTestimonials() {
	const testimonials = await fetchAllTestimonials();
	if (Object.keys(testimonials).length === 0) {
		return null;
	}
	return (
		<section className='px-6 mb-20 overflow-hidden'>
			<SectionHeader heading={HomeTestimonialsData.HEADER} />
			<HomeTestimonialsHorizontal testimonials={testimonials} />
			<HomeTestimonialsVertical testimonials={testimonials} />
		</section>
	);
}
