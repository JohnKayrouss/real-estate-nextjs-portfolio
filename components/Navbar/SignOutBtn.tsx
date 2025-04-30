"use client";
import { sessionBtns } from "@/utils/websiteData/enums";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

export default function SignOutBtn() {
	const handleLogout = () => {
		toast("You have been signed out.", {
			style: { color: "#f97316" },
		});
	};
	return (
		<SignOutButton>
			<Link href='/' onClick={handleLogout}>
				<span className='hover:text-red-500 hover:dark:text-red-500'>
					{sessionBtns.LOGOUT}
				</span>
			</Link>
		</SignOutButton>
	);
}
