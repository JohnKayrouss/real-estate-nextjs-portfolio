import { linksLabels } from "@/utils/websiteData/enums";
import { SignInButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";

type NavBarLinkProps = {
	href: string;
	linkName: string;
	user: User | null;
};
export default function NavBarLink({ href, linkName, user }: NavBarLinkProps) {
	return (
		<li>
			{linkName !== linksLabels.PROFILE ? (
				<Link
					href={href}
					className='text-black dark:text-white font-semibold lg:text-lg transition hover:text-primary hover:dark:text-primary'>
					{linkName}
				</Link>
			) : linkName === linksLabels.PROFILE && !user?.id ? (
				<div className='text-black dark:text-white font-semibold lg:text-lg transition hover:text-primary hover:dark:text-primary'>
					<SignInButton mode='modal'>{linksLabels.PROFILE}</SignInButton>
				</div>
			) : (
				<Link
					href={href}
					className='text-black dark:text-white font-semibold lg:text-lg transition hover:text-primary hover:dark:text-primary'>
					{linkName} - hello
				</Link>
			)}
		</li>
	);
}
