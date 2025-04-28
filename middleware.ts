import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher([
	"/",
	"/about",
	"/services",
	"/houses/(.*)",
	"/houses",
	"/admin/(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
	if (!isPublicRoute(req)) {
		auth.protect();
	}
});

export const config = {
	matcher: ["/((?!_next|.*\\..*).*)"], // matches everything except _next/ and files like .png, .jpg
};
