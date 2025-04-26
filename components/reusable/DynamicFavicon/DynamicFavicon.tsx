"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
	url?: string;
};

export default function DynamicFavicon({ url }: Props) {
	const pathname = usePathname(); // Will change on route change

	useEffect(() => {
		if (typeof document === "undefined") return;

		const faviconUrl = url || "/images/favIcons/favicon.ico";

		let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;

		if (!link) {
			link = document.createElement("link");
			link.setAttribute("rel", "icon");
			document.head.appendChild(link);
		}

		link.type = "image/png";
		link.href = faviconUrl;
	}, [pathname, url]);

	return null;
}
