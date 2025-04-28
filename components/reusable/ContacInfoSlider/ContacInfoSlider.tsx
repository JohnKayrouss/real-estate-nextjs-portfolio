import SocialMedia from "@/components/SocialMedia/SocialMedia";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { btns, ownerInfo } from "@/utils/websiteData/enums";
import {
	Facebook,
	Instagram,
	Mail,
	MailOpen,
	Phone,
	PhoneCall,
	Twitter,
	UserCheck,
} from "lucide-react";
export default function ContacInfoSlider({
	contactBtnName,
}: {
	contactBtnName?: string;
}) {
	return (
		<Sheet>
			{contactBtnName && (
				<SheetTrigger className='group' asChild>
					<Button variant='outline' size={"lg"} className='py-6'>
						<PhoneCall className='animate-pulse group-hover:animate-none dark:text-white text-primary' />
						{btns.CONTACT}
					</Button>
				</SheetTrigger>
			)}
			{!contactBtnName && (
				<SheetTrigger className='group' asChild>
					<Button variant='outline' size={"default"}>
						<PhoneCall className='animate-pulse group-hover:animate-none dark:text-white text-primary' />
					</Button>
				</SheetTrigger>
			)}

			<SheetContent side={"top"} className='pb-5'>
				<SheetHeader>
					<SheetTitle>{ownerInfo.CONTACT_HEADER}</SheetTitle>
				</SheetHeader>
				<div className='flex flex-col gap-y-2 text-muted-foreground pl-2'>
					<h2 className='flex text-lg items-center gap-2 ml-2'>
						<UserCheck className='h-5 w-5 mt-0.5 text-primary' />
						Name: {ownerInfo.NAME}
					</h2>
					<h2 className='flex text-lg items-center gap-2 ml-2'>
						<Phone className='h-5 w-5 mt-0.5 text-primary' /> phone :{" "}
						{ownerInfo.PHONE}
					</h2>

					<h3 className='flex text-sm items-center  gap-2 ml-2'>
						<MailOpen className='h-5 w-5  text-primary' />
						Email:{" "}
						<span className='text-md font-sm md:font-medium'>
							{ownerInfo.EMAIL}
						</span>
					</h3>

					<h1 className='text-lg mt-4 ml-2 '>social media channels:</h1>
					<SheetClose asChild>
						<SocialMedia />
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
}
