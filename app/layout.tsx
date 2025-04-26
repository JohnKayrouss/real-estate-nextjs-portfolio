import type { Metadata } from "next";
import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import DynamicFavicon from "@/components/reusable/DynamicFavicon/DynamicFavicon";
import { appMetadata } from "@/utils/appMetadata";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
	title: appMetadata.defaultTitle("Home"),
	description: appMetadata.defaultDescription(),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={`${inter.className} `} suppressHydrationWarning>
					<DynamicFavicon />
					<Providers>
						<Navbar />
						<div
							className={cn(
								" lg:w-[90%]  mx-auto max-w-screen-2xl min-h-[calc(100vh-81px)] "
							)}>
							{children}
						</div>
						<Footer />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
