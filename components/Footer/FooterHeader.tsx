import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/images/footerLogo.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import { footerData } from "@/utils/websiteData/enums";

export default function FooterHeader() {
	return (
		<div>
			<div className='flex justify-center  sm:justify-start '>
				<Link className='block' href='/'>
					<div className='h-28 w-28 relative '>
						<Image
							src={logoImg}
							alt='logo'
							loading='eager'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px'
						/>
					</div>
				</Link>
			</div>
			<div className='flex items-center justify-center md:items-start sm:justify-start'>
				<p className=' max-w-md text-center leading-relaxed text-muted-foreground sm:max-w-xs sm:text-start text-sm'>
					{footerData.FOOTER_HEADER}
				</p>
			</div>

			<div className=' flex justify-center sm:justify-start mt-8 '>
				<SocialMedia />
			</div>
		</div>
	);
}
