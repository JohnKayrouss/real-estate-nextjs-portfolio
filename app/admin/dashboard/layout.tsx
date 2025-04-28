import { Separator } from "@/components/ui/separator";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminSideMenu from "@/components/admin/AdminSideMenu";
import { Metadata } from "next";
import DynamicFavicon from "@/components/reusable/DynamicFavicon/DynamicFavicon";
import { AdminMetadata } from "@/utils/appMetadata";
import { metadataInfo } from "@/utils/websiteData/enums";

// export const metadata: Metadata = {
// 	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_HOUSES),
// 	description: AdminMetadata.defaultDescription(),
// };
export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='pt-28 '>
			<DynamicFavicon url='/images/favIcons/favicon.ico' />

			<div className='flex lg:flex-col items-start justify-between px-4'>
				<div>
					<h2 className='text-xl text-muted-foreground animate-pulse'>
						I disabled the <span className='text-destructive'>ADMIN</span>{" "}
						validation for{" "}
						<span className='text-destructive'>testing purposes</span>.
					</h2>
					<p>Now you can try out all the operations on the admin dashboard.</p>
					<p>Sign up to explore the profile page I created for you </p>
					<p>it is a whole new experience!</p>
				</div>
				<AdminSideMenu />
			</div>
			<Separator className='mt-2 ' />
			<section className='grid lg:grid-cols-12 gap-12 mt-12 '>
				<div className='lg:col-span-2 '>
					<AdminSidebar />
				</div>
				<div className='lg:col-span-10 px-4'>{children}</div>
			</section>
		</main>
	);
}
