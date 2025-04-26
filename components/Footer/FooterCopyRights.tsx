import { developerData } from "@/utils/websiteData/enums";

export default function FooterCopyRights() {
	return (
		<div>
			<div className='text-center sm:flex sm:justify-between sm:text-left '>
				<div className='md:flex flex-col items-start'>
					<p className='text-sm text-muted-foreground '>
						<span className='block sm:inline'>All rights reserved.</span>
					</p>
					<div className=' items-center justify-center'>
						<a
							href='https://www.privacypolicies.com'
							target='_blank'
							className='inline-block underline cursor-pointer text-primary hover:text-primary/80 text-xs'>
							Terms & Conditions
						</a>
						<span>&middot;</span>
						<a
							href='https://www.privacypolicies.com/'
							target='_blank'
							className='inline-block underline cursor-pointer text-primary hover:text-primary/80 text-xs'>
							Privacy Policy
						</a>
					</div>
				</div>
				<div className='flex items-center gap-2 justify-center'>
					<div className='text-xs text-muted-foreground   sm:text-center flex items-center justify-between  '>
						All design and development rights reserved.{" "}
					</div>
					<p className='text-xs whitespace-nowrap text-muted-foreground'>
						<span className='font-semibold'>&copy;</span> 2025 Eng:
						<a
							href={developerData.WEBSITE}
							target='_blank'
							className='underline text-primary pl-1 '>
							{" "}
							{developerData.NAME}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
