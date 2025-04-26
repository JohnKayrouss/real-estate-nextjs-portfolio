import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import { NavDarkMenu } from "./NavDarkMenu";
import UserSession from "./UserSession";
import { links } from "../../utils/links";
import { isAdmin } from "@/utils/helperFunctions";
import { currentUser } from "@clerk/nextjs/server";
import slugify from "slugify";
import { linksLabels, linksRoutes, userLinks } from "@/utils/websiteData/enums";
export default async function Navbar() {
	const user = await currentUser();
	const userIsAdmin = await isAdmin();
	const navLinks = links.map((item) => {
		if (item.label === linksLabels.DASHBOARD && !userIsAdmin) return null;
		const userFullNameSlug = user?.fullName
			? slugify(user.fullName, { lower: true })
			: "";

		const itemUrl =
			item.label === linksLabels.PROFILE
				? `${linksRoutes.PROFILE}/${userFullNameSlug}${userLinks.FAVORITES}`
				: item.url;
		return (
			<NavBarLink
				key={item.url}
				href={itemUrl}
				linkName={item.label}
				user={user}
			/>
		);
	});
	return (
		<header className=' border-b bg-sidebar '>
			<div className='mx-auto max-w-screen-xl px-4 sm:px-6   '>
				<div className='flex h-16 lg:h-20 items-center justify-between '>
					<Logo />
					<div className='hidden md:block'>
						<nav aria-label='Global'>
							<ul className='flex items-center gap-6 text-sm'>{navLinks}</ul>
						</nav>
					</div>

					<div className='flex items-center gap-4'>
						<NavDarkMenu />
						<UserSession />
					</div>
				</div>
			</div>
		</header>
	);
}
