import ContacInfoSlider from "@/components/reusable/ContacInfoSlider/ContacInfoSlider";
import Image from "next/image";

type ServiceSectionProps = {
	title: string;
	description: string;
	imageUrl: string;
	imageOnLeft: boolean;
	contactMe: boolean;
};
export default function ServiceSection({
	title,
	description,
	imageUrl,
	imageOnLeft = false,
	contactMe = false,
}: ServiceSectionProps) {
	return (
		<section>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 my-10'>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8'>
					<div className={imageOnLeft ? "md:order-2" : "md:order-1"}>
						<div className='max-w-lg md:max-w-none'>
							<h2 className='text-2xl font-semibold  sm:text-3xl'>{title}</h2>
							<p className='mt-4 text-muted-foreground'>{description}</p>
							{contactMe && (
								<div className=' mt-6'>
									<ContacInfoSlider contactBtnName='Contact me' />
								</div>
							)}
						</div>
					</div>
					<div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
						<Image
							src={imageUrl}
							className='rounded'
							alt='service'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
