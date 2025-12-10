import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

// Create a NextAuth handler using the shared authOptions and export it
// as `handlers` so `route.ts` can re-export it as GET/POST for the App Router.
const handlers = NextAuth(authOptions );

export { handlers };