import Image from "next/image";
import { HomeCarousel } from "./HomeCarousel";
import selfImg from "@/public/images/self.png";
import SectionHeader from "@/components/reusable/SectionHeader";
import { SelfSectionData } from "@/utils/websiteData/enums";

export default function SelfSection() {
	return (
		<section className='px-6 mb-20 overflow-hidden'>
			<SectionHeader heading={SelfSectionData.HEADER} />
			<div className='grid py-10 grid-cols-1 md:grid-cols-2 '>
				<div className=' flex flex-col items-center md:items-start  md:w-[300px] md:pl-10 lg:w-[400px] xl:w-[500px] 2xl:w-[700px] lg:items-center '>
					<div className=' w-[23rem] md:w-52 mt-10 xl:w-72 2xl:w-[23rem]  '>
						<Image
							src={selfImg}
							alt='image'
							priority
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
						/>
					</div>
					<div className='mt-6 '>
						<h1 className='text-center md:text-left text-lg md:text-sm lg:text-base md:pl-4 lg:p-0 xl:pl-4 xl:text-xl xl:font-semibold'>
							{SelfSectionData.CONTENT}
						</h1>
					</div>
				</div>
				<HomeCarousel />
			</div>
		</section>
	);
}
