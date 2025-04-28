import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { fetchAllTestimonials } from "@/utils/actions/user-actions/user-testimonials-actions";
import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import Rating from "@/components/Testimonials/Rating";
import DeleteTestimony from "@/app/user-profile/_components/DeleteTestimony";
import TestimonyPopup from "./_components/TestimonyPopup";
import { adminPageHeading } from "@/utils/websiteData/enums";
import { AdminMetadata } from "@/utils/appMetadata";
import { metadataInfo } from "@/utils/websiteData/enums";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_TESTIMONIALS),
	description: AdminMetadata.defaultDescription(),
};
export default async function AdminTestimonialsPage() {
	const testimonialList = await fetchAllTestimonials();
	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.TESTIMONIALS_LIST}
			classname=' capitalize'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='capitalize '>Name</TableHead>
						<TableHead className='capitalize hidden md:table-cell'>
							Email
						</TableHead>
						<TableHead className='capitalize  sm:table-cell text-right sm:text-left'>
							Rating
						</TableHead>
						<TableHead className='hidden sm:table-cell text-right capitalize '>
							actions
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{testimonialList.map((testimonial) => {
						const { email, id, rating, clerkId } = testimonial;

						return (
							<TableRow key={id}>
								<TableCell>
									<TestimonyPopup testimonial={testimonial} />
								</TableCell>

								<TableCell className='hidden md:table-cell '>{email}</TableCell>
								<TableCell className='content-center flex items-center justify-end sm:justify-start'>
									<Rating rating={rating} />
								</TableCell>
								<TableCell className='hidden sm:table-cell text-right text-primary p-0 m-0'>
									<DeleteTestimony
										testimonyId={id}
										clerkId={clerkId}
										variantLink={true}
									/>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={4} className='text-center text-md'>
							You have total of
							<span className='text-primary font-semibold '>
								{" "}
								{testimonialList.length}
							</span>{" "}
							Testimonials
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DashboardSectionWrapperWithHeader>
	);
}
