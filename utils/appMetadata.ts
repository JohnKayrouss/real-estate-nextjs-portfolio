import { metadataInfo } from "./websiteData/enums";

export const appMetadata = {
	defaultTitle: (title: string) => {
		return `${metadataInfo.DEFAULT_TITLE} | ${title}`;
	},
	defaultDescription: (content?: string) => {
		return content
			? `${content} - ${metadataInfo.DEFAULT_DESCRIPTION}`
			: metadataInfo.DEFAULT_DESCRIPTION;
	},
};
export const AdminMetadata = {
	defaultTitle: (title: string) => {
		return `${metadataInfo.ADMIN_DEFAULT_TITLE} | ${title}`;
	},
	defaultDescription: (content?: string) => {
		return content
			? `${content} - ${metadataInfo.ADMIN_DEFAULT_DESCRIPTION}`
			: metadataInfo.ADMIN_DEFAULT_DESCRIPTION;
	},
};
