import {
	adminLinksLabels,
	adminLinksRoutes,
	linksLabels,
	linksRoutes,
} from "./websiteData/enums";

type NavLinks = {
	label: string;
	url: string;
};
export const links: NavLinks[] = [
	{ label: linksLabels.HOME, url: linksRoutes.HOME },
	{ label: linksLabels.PROFILE, url: linksRoutes.PROFILE },
	{ label: linksLabels.HOUSES, url: linksRoutes.HOUSES },
	{ label: linksLabels.SERVICES, url: linksRoutes.SERVICES },
	{ label: linksLabels.ABOUT, url: linksRoutes.ABOUT },
	// { label: linksLabels.DASHBOARD, url: linksRoutes.DASHBOARD },
	{ label: linksLabels.DASHBOARD, url: "/admin/dashboard/hamada" },
];

export const adminLinks: NavLinks[] = [
	{ label: adminLinksLabels.HOUSES, url: adminLinksRoutes.HOUSES },
	{
		label: adminLinksLabels.CREATE_HOUSE,
		url: adminLinksRoutes.CREATE_HOUSE,
	},
	{ label: adminLinksLabels.USERS_LIST, url: adminLinksRoutes.USERS_LIST },
	{
		label: adminLinksLabels.IMAGE_SLIDER,
		url: adminLinksRoutes.IMAGE_SLIDER,
	},
	{
		label: adminLinksLabels.TESTIMONIALS,
		url: adminLinksRoutes.TESTIMONIALS,
	},
];
