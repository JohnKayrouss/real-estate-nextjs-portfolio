import { User } from "@clerk/nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
//max-w-96 md:max-w-3xl lg:max-w-3xl xl:max-w-7xl
export default function UserInfo({ user }: { user: User }) {
	return (
		<>
			<div className=' min-h-40 flex items-center justify-start gap-2  mx-auto '>
				<Avatar className='h-24 w-24 md:h-28 md:w-28 rounded-full'>
					<AvatarImage
						src={user?.imageUrl}
						alt='user image'
						className='object-contain'
					/>
					<AvatarFallback className='animate-pulse'></AvatarFallback>
				</Avatar>
				<div className=''>
					<h1 className='font-semibold text-primary'>
						<span className='text-muted-foreground'>Welcome, </span>
						{user?.fullName}
						<span className='text-muted-foreground'>!</span>
					</h1>
					<p className='text-sm text-muted-foreground'>
						{user?.primaryEmailAddress?.emailAddress}
					</p>
				</div>
			</div>
		</>
	);
}
