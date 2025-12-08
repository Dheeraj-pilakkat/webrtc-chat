export { default } from "next-auth/middleware";

// Only apply the NextAuth middleware to protected routes.
// Adjust the `matcher` list to include the paths you want protected.
// This prevents auth middleware from redirecting public pages like `/signup` or `/sigin`.
export const config = {
	matcher: [
		// protect everything under `/main` (e.g. /main, /main/dashboard)
		'/main/:path*',
	],
};
