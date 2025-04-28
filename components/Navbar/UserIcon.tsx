import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type userIconProps = {
	RegisteredUserImage?: string;
	publicUser?: boolean;
};
export default async function UserIcon({
	RegisteredUserImage,
	publicUser,
}: userIconProps) {
	if (RegisteredUserImage) {
		return (
			<Avatar className='h-5 w-5 rounded-full object-cover'>
				<AvatarImage src={RegisteredUserImage} alt='user image' />
				<AvatarFallback />
			</Avatar>
		);
	}
	if (publicUser) {
		return (
			<User className='rounded-full dark:bg-primary bg-gray-100 hover:bg-gray-200 dark:hover:bg-primary/90  min-h-[20px] min-w-[20px] p-[3px]' />
		);
	}
}
