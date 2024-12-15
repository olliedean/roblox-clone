import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { neon } from "@neondatabase/serverless";
import bcrypt from 'bcrypt';

async function getUser (username) {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const user = await sql`SELECT * FROM users WHERE username = ${username}`;
        return user[0];
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z.object({
                username: z.string(),
                password: z.string(),
            }).safeParse(credentials);

            if(parsedCredentials.success) {
                const user = await getUser(parsedCredentials.data.username);
                if(!user) return null;
                const passwordMatch = await bcrypt.compare(parsedCredentials.data.password, user.password);

                if(passwordMatch) return user;

                console.error("Password does not match");
                return null;
            }
        }
    })]
});