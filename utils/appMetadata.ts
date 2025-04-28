const PageMainHeader = "Ayman Karam ";

const pageMainDescription =
	"Find your next home with Ayman Karam - premium real estate listings, expert guidance, and a smooth property experience.";

export const appMetadata = {
	defaultTitle: (title: string) => {
		return `${PageMainHeader} | ${title}`;
	},
	defaultDescription: (content?: string) => {
		return content
			? `${content} - ${pageMainDescription}`
			: pageMainDescription;
	},
};
