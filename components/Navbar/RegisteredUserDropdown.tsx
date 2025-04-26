import Link from "next/link";
import { links } from "../../utils/links";

import { Button } from "@/components/ui/button";
import { AlignLeft } from "lucide-react";
import { type User } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import UserIcon from "./UserIcon";
import SignOutBtn from "./SignOutBtn";
import { isAdmin } from "@/utils/helperFunctions";
import slugify from "slugify";
import { linksLabels, linksRoutes, userLinks } from "@/utils/websiteData/enums";

export async function RegisteredUserDropdown({ user }: { user: User }) {
	const userFullName = slugify(user.fullName as string, { lower: true });
	const userIsAdmin = await isAdmin();

	const navLinks = links.map((item) => {
		if (item.label === linksLabels.DASHBOARD && !userIsAdmin) return null;
		const itemUrl =
			item.label === linksLabels.PROFILE
				? `${linksRoutes.PROFILE}/${userFullName}${userLinks.FAVORITES}`
				: item.url;
		return (
			<Link href={itemUrl} key={crypto.randomUUID()}>
				<DropdownMenuItem>
					<span className='hover:text-primary hover:dark:text-primary'>
						{item.label}
					</span>
				</DropdownMenuItem>
			</Link>
		);
	});
	return (
		user && (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' className='dark:hover:bg-gray-900'>
						<>
							<AlignLeft />
							<UserIcon RegisteredUserImage={user.imageUrl} />
						</>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='min-w-48 mr-[30px]  sm:mr-14 lg:mr-10 xl:mr-[6.5rem] 2xl:mr-[7rem]'>
					<DropdownMenuLabel>{user.fullName}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup> {navLinks}</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutButton>
							<SignOutBtn />
						</SignOutButton>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	);
}
