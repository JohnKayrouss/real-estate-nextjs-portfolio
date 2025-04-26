"use client";
import { Button } from "../ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AdminSidebar() {
	const pathname = usePathname();
	return (
		<aside className='mx-4 w-fit hidden lg:block max-w-80'>
			{adminLinks.map((link, idx) => {
				const isActiveLink = pathname === link.url;
				const btnVariant = isActiveLink ? "default" : "outline";
				return (
					<Button
						key={idx}
						asChild
						variant={btnVariant}
						className='w-full mb-2 capitalize font-normal justify-start '>
						<Link href={link.url}>{link.label}</Link>
					</Button>
				);
			})}
		</aside>
	);
}
