import { Separator } from "@/components/ui/separator";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminSideMenu from "@/components/admin/AdminSideMenu";
import { Metadata } from "next";
import { appMetadata } from "@/utils/appMetadata";
import DynamicFavicon from "@/components/reusable/DynamicFavicon/DynamicFavicon";

export const metadata: Metadata = {
	title: appMetadata.defaultTitle("Admin"),
	description: appMetadata.defaultDescription(),
};
export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='pt-28 '>
			<DynamicFavicon url='/images/favIcons/favicon.ico' />

			<div className='flex items-start justify-between px-4'>
				<h2 className='text-xl text-muted-foreground animate-pulse'>
					I disabled the <span className='text-destructive'>ADMIN</span>{" "}
					validation for <span className='text-destructive'>TESTING</span>.
					However, you still need to sign in to use{" "}
					<span className='text-destructive'>CRUD</span> operations
				</h2>
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
