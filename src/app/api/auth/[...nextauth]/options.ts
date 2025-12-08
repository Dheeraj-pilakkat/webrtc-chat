import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
    providers: [
        // Add your authentication providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    events: {
        signIn: async (message) => {
            console.log("User signed in:", message);
        },
        signOut: async (message) => {
            console.log("User signed out:", message);
        }
    }
}