"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { btns } from "@/utils/websiteData/enums";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function UserNavigationButtons({
	userFullName,
}: {
	userFullName: string;
}) {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = React.useState("");

	React.useEffect(() => {
		if (pathname.includes(`/favorites`)) {
			setActiveLink("favorites");
		} else if (pathname.includes(`/testimonials`)) {
			setActiveLink("testimonials");
		} else {
			setActiveLink("");
		}
	}, [pathname]);

	return (
		<>
			<div className='flex items-center gap-4  mb-4 md:mt-5'>
				<Button
					asChild
					variant={activeLink === "favorites" ? "default" : "secondary"}
					size={"lg"}>
					<Link href={`/user-profile/${userFullName}/favorites`}>
						{btns.USER_FAVORITES}
					</Link>
				</Button>
				<Button
					asChild
					variant={activeLink === "testimonials" ? "default" : "secondary"}
					size={"lg"}>
					<Link href={`/user-profile/${userFullName}/testimonials`}>
						{btns.USER_TESTIMONIALS}
					</Link>
				</Button>
			</div>
			<Separator />
		</>
	);
}
