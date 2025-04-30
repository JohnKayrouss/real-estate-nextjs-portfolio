import DashboardSectionWrapperWithHeader from "@/components/admin/DashboardSectionWrapperWithHeader";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { clerkClient, type User } from "@clerk/nextjs/server";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { adminPageHeading, user_table } from "@/utils/websiteData/enums";

import { AdminMetadata } from "@/utils/appMetadata";
import { metadataInfo } from "@/utils/websiteData/enums";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: AdminMetadata.defaultTitle(metadataInfo.ADMIN_USERS_LIST),
	description: AdminMetadata.defaultDescription(),
};
export default async function UsersList() {
	const clerk = await clerkClient();
	const users = await clerk.users.getUserList();

	return (
		<DashboardSectionWrapperWithHeader
			heading={adminPageHeading.USERS_LIST}
			classname=' capitalize'>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className='capitalize '>{user_table.FULLNAME}</TableHead>
						<TableHead className='capitalize hidden md:table-cell'>
							{user_table.FIRSTNAME}
						</TableHead>
						<TableHead className='capitalize hidden md:table-cell'>
							{user_table.LASTNAME}
						</TableHead>
						<TableHead className='capitalize hidden sm:table-cell'>
							{user_table.EMAIL}
						</TableHead>
						<TableHead className='text-right capitalize '>
							{user_table.AVATAR}
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.data.map((user: User) => {
						return (
							<TableRow key={user.id}>
								<TableCell className=' capitalize'>Username</TableCell>
								<TableCell className='hidden md:table-cell capitalize'>
									firstname
								</TableCell>
								<TableCell className='hidden md:table-cell '>
									lastname
								</TableCell>
								<TableCell className='hidden sm:table-cell '>
									user@email.com
								</TableCell>
								<TableCell className='flex justify-end'>
									<Avatar>
										<AvatarImage
											src='https://github.com/shadcn.png'
											alt='@shadcn'
										/>
										<AvatarFallback></AvatarFallback>
									</Avatar>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={5} className='text-center text-md'>
							You have
							<span className='text-primary font-semibold text-md mx-1'>X</span>
							number of users
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DashboardSectionWrapperWithHeader>
	);
}
