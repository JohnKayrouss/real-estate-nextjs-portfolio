"use client";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Share2 } from "lucide-react";
import { LuShare2 } from "react-icons/lu";

import {
	TwitterShareButton,
	EmailShareButton,
	LinkedinShareButton,
	FacebookShareButton,
	TwitterIcon,
	EmailIcon,
	LinkedinIcon,
	FacebookIcon,
} from "react-share";

export default function ShareButton({
	houseId,
	houseImg,
}: {
	houseId: string;
	houseImg: string;
}) {
	const url = process.env.NEXT_PUBLIC_WEBSITE_URL;

	const shareUrl = `${url}/houses/${houseId}`;
	const shareTitle = "Check out this house";
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant={"outline"}>
					<Share2 className='text-primary' />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				side='top'
				align='end'
				sideOffset={10}
				className='bg-secondary flex flex-row justify-center items-center gap-x-2 w-fit'>
				<FacebookShareButton url={shareUrl} title={houseImg}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton url={shareUrl} title={houseImg}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<EmailShareButton url={shareUrl} subject={houseImg}>
					<EmailIcon size={32} round />
				</EmailShareButton>
				<LinkedinShareButton url={shareUrl} title={houseImg}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
			</PopoverContent>
		</Popover>
	);
}
