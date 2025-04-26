import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { links } from "../../utils/links";
import UserIcon from "./UserIcon";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";
import { linksLabels, sessionBtns } from "@/utils/websiteData/enums";

export async function PublicUserDropdown() {
	const navLinks = links.map((item) => {
		if (item.label === linksLabels.DASHBOARD) return null;
		return (
			<div className='cursor-pointer' key={item.url}>
				{item.label === "Profile" ? (
					<DropdownMenuItem>
						<SignInButton mode='modal'>
							<span className='hover:text-primary hover:dark:text-primary'>
								{item.label}
							</span>
						</SignInButton>
					</DropdownMenuItem>
				) : (
					<Link href={item.url}>
						<DropdownMenuItem className='hover:text-primary hover:dark:text-primary'>
							{item.label}
						</DropdownMenuItem>
					</Link>
				)}
			</div>
		);
	});
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className='dark:hover:bg-gray-900'>
					<>
						<AlignLeft />
						<UserIcon publicUser={true} />
					</>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-28 mr-[30px] sm:mr-[38px]'>
				<DropdownMenuGroup>{navLinks}</DropdownMenuGroup>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<SignInButton mode='modal'>
							<span className='hover:text-primary hover:dark:text-primary'>
								{sessionBtns.LOGIN}
							</span>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<SignUpButton mode='modal'>
							<span className='hover:text-primary hover:dark:text-primary'>
								{sessionBtns.REGISTER}
							</span>
						</SignUpButton>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
