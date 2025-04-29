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
import { clerkClient } from "@clerk/nextjs/server";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { adminPageHeading, user_table } from "@/utils/websiteData/enums";

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
					{users.data.map((user) => {
						return (
							<TableRow key={user.id}>
								<TableCell className=' capitalize'>{user.fullName}</TableCell>
								<TableCell className='hidden md:table-cell capitalize'>
									{user.firstName}
								</TableCell>
								<TableCell className='hidden md:table-cell '>
									{user.lastName}
								</TableCell>
								<TableCell className='hidden sm:table-cell '>
									{user.primaryEmailAddress?.emailAddress}
								</TableCell>
								<TableCell className='flex justify-end'>
									<Avatar>
										<AvatarImage src={user.imageUrl} alt='user' />
										<AvatarFallback className='animate-pulse'></AvatarFallback>
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
							<span className='text-primary font-semibold text-md mx-1'>
								{users.totalCount}
							</span>
							users
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DashboardSectionWrapperWithHeader>
	);
}
