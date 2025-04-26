import { socialMediaData } from "@/utils/websiteData/enums";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import React from "react";

export default function SocialMedia() {
	return (
		<ul className=' flex justify-start gap-6  md:gap-6 '>
			<li className='group p-1 rounded-sm hover:bg-primary '>
				<a target='_blank' href={socialMediaData.FACEBOOK}>
					<Facebook className='text-primary  group-hover:text-white' />
				</a>
			</li>

			<li className='group p-1 rounded-sm hover:bg-primary '>
				<a target='_blank' href={socialMediaData.INSTAGRAM}>
					<Instagram className='text-primary group-hover:text-white' />
				</a>
			</li>

			<li className='group p-1 rounded-sm hover:bg-primary'>
				<a target='_blank' href={socialMediaData.TWITTER}>
					<Twitter className='text-primary group-hover:text-white' />
				</a>
			</li>

			<li className='group p-1 rounded-sm hover:bg-primary '>
				<a href={socialMediaData.EMAIL}>
					<Mail className='text-primary group-hover:text-white' />
				</a>
			</li>
		</ul>
	);
}
