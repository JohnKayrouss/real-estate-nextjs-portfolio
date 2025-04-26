"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import { adminLinks } from "@/utils/links";
import { btns } from "@/utils/websiteData/enums";

export default function AdminSideMenu() {
	const pathname = usePathname();

	return (
		<div className='flex flex-row-reverse  lg:hidden'>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant='outline' size={"default"}>
						<div className='flex items-center gap-2'>
							<AlignLeft />
							<span className='text-muted-foreground capitalize flex items-center gap-x-1'>
								{btns.ADMIN_MENU}
							</span>
						</div>
					</Button>
				</SheetTrigger>
				<SheetContent side={"left"} className=' px-2'>
					<SheetHeader className='mb-10 px-3'>
						<SheetTitle>{btns.ADMIN_MENU}</SheetTitle>
					</SheetHeader>
					<ul>
						{adminLinks.map((link, idx) => {
							const isActiveLink = pathname === link.url;
							const btnVariant = isActiveLink ? "default" : "ghost";
							return (
								<li key={idx}>
									<SheetClose asChild className=''>
										<Button
											asChild
											variant={btnVariant}
											className='w-full mb-2 capitalize font-normal justify-start '>
											<Link href={link.url}>{link.label}</Link>
										</Button>
									</SheetClose>
								</li>
							);
						})}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
}
