import { currentUser } from "@clerk/nextjs/server";
import NavUserSessionBtns from "./NavUserSessionBtns";
import { RegisteredUserDropdown } from "./RegisteredUserDropdown";
import { PublicUserDropdown } from "./PublicUserDropdown";

export default async function UserSession() {
	const user = await currentUser();

	if (user) {
		return (
			<>
				<RegisteredUserDropdown user={user} />
			</>
		);
	}

	return (
		<>
			<NavUserSessionBtns />
			<div className='lg:hidden'>
				<PublicUserDropdown />
			</div>
		</>
	);
}
