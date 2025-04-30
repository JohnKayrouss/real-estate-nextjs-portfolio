import { type NextConfig } from "next";

// /** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	devIndicators: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
	experimental: { forceSwcTransforms: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "ibbdetibjuzwrprbiayt.supabase.co",
			},
			{
				protocol: "https",
				hostname: "rrnsexreppbddjwjgfjy.supabase.co",
			},
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
