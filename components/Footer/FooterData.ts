import { linksRoutes, ownerInfo } from "@/utils/websiteData/enums";

export const footerAboutSection = [
	{ text: "Education", href: linksRoutes.ABOUT },
	{ text: "My achievement", href: linksRoutes.ABOUT },
	{ text: "My passion", href: linksRoutes.ABOUT },
];
export const footerServicesSection = [
	{ text: "Hot Market Advantage", href: linksRoutes.SERVICES },
	{ text: "Client-First Commitment", href: linksRoutes.SERVICES },
	{ text: "Open Door Guidance", href: linksRoutes.SERVICES },
	{ text: "Smart Deals, Real Savings", href: linksRoutes.SERVICES },
];
export const footerOurPhilosophySection = [
	{ text: "Hot Market Boost", href: linksRoutes.HOME },
	{ text: "Client Care & Dedication", href: linksRoutes.HOME },
	{ text: "Open Door to Advice", href: linksRoutes.HOME },
	{ text: "Best deal that suits you", href: linksRoutes.HOME },
];
export const footerContactUsSection = [
	{ text: ownerInfo.EMAIL, href: linksRoutes.HOME },
	{ text: ownerInfo.PHONE, href: linksRoutes.HOME },
	{ text: "Richmond, VA", href: linksRoutes.HOME },
];
