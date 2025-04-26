import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroAnimation from "./HeroAnimation";
import ContacInfoSlider from "@/components/reusable/ContacInfoSlider/ContacInfoSlider";
import { btns, heroData } from "@/utils/websiteData/enums";

export default function Hero() {
	return (
		<header className='bg-white lg:grid lg:h-[800px] lg:place-content-center dark:bg-background  '>
			<div className='mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center  md:gap-4 lg:px-4 '>
				<div className='max-w-prose text-left '>
					<h1 className='text-2xl font-bold sm:text-2xl dark:text-white capitalize'>
						{heroData.HEADING}
						<strong className='text-primary'> {heroData.HEADING_BADGE} </strong>
					</h1>

					<p className='mt-4 text-base text-pretty text-muted-foreground sm:text-lg/relaxed dark:text-white '>
						{heroData.FIRST_CONTENT} <span className='text-primary'> — </span>{" "}
						{heroData.SECOND_CONTENT}
						<strong className='text-primary'>
							{" "}
							{heroData.SECOND_CONTENT_BADGE}
						</strong>
					</p>
					<p className='text-muted-foreground '>{heroData.THIRD_CONTENT}</p>
					<p className='text-muted-foreground'>{heroData.FORTH_CONTENT}</p>

					<div className='mt-4 flex gap-4 sm:mt-6 items-center'>
						<Button asChild variant='default'>
							<Link href='/houses' className='text-white px-8 py-6'>
								{btns.GET_STARTED}
							</Link>
						</Button>

						<ContacInfoSlider contactBtnName='Contact me' />
					</div>
				</div>

				<div className='hidden md:flex  justify-end items-center '>
					<HeroAnimation />
				</div>
			</div>
		</header>
	);
}
