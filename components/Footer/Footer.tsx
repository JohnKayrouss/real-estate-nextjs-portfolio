import FooterHeader from "./FooterHeader";
import FooterSection from "./FooterSection";
import FooterCopyRights from "./FooterCopyRights";
import { Separator } from "../ui/separator";
import {
	footerAboutSection,
	footerContactUsSection,
	footerOurPhilosophySection,
	footerServicesSection,
} from "./FooterData";

export default function Footer() {
	return (
		<footer className='bg-sidebar mt-20'>
			<div className='mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24'>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
					<FooterHeader />

					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
						<FooterSection title='About Us' links={footerAboutSection} />

						<FooterSection title='Our Services' links={footerServicesSection} />

						<FooterSection
							title='Our Philosophy'
							links={footerOurPhilosophySection}
						/>
						<FooterSection title='Contact US' links={footerContactUsSection} />
					</div>
				</div>
				<Separator className='my-10 ' />
				<FooterCopyRights />
			</div>
		</footer>
	);
}
