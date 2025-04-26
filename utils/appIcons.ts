import { Metadata } from "next";

const appIcons: Metadata["icons"] = {
	icon: [
		{
			url: "/images/favIcons/favicon-32x32.png",
			sizes: "32x32",
			type: "image/png",
		},
		{
			url: "/images/favIcons/favicon-16x16.png",
			sizes: "16x16",
			type: "image/png",
		},
		{ url: "/images/favIcons/favicon.ico", sizes: "any", type: "image/x-icon" },
	],
	apple: [
		{
			url: "/images/favIcons/apple-touch-icon.png",
			sizes: "180x180",
			type: "image/png",
		},
	],
	other: [
		{
			url: "/images/favIcons/android-chrome-192x192.png",
			sizes: "192x192",
			type: "image/png",
		},
		{
			url: "/images/favIcons/android-chrome-512x512.png",
			sizes: "512x512",
			type: "image/png",
		},
	],
};

export default appIcons;
