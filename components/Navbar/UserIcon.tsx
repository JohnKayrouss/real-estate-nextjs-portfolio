import { User } from "lucide-react";

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
			<img
				src={RegisteredUserImage}
				alt=''
				className='h-5 w-5 rounded-full object-cover'
			/>
		);
	}
	if (publicUser) {
		return (
			<User className='rounded-full dark:bg-primary bg-gray-100 hover:bg-gray-200 dark:hover:bg-primary/90  min-h-[20px] min-w-[20px] p-[3px]' />
		);
	}
}
