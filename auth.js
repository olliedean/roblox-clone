import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { neon } from "@neondatabase/serverless";
import bcrypt from 'bcryptjs';

export async function getUsers () {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const users = await sql`SELECT * FROM users`;
        return users;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export async function getUserById (id) {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const user = await sql`SELECT * FROM users WHERE id = ${id}`;
        return user[0];
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getUser (email) {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        return user[0];
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
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
    })],
    callbacks: {
        session: async ({session}) => {
            console.log(session.user.email);
            const user = await getUser(session.user.email);
            console.log(user);
            session.userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                is_verfied: user.is_verified,
                robux: user.robux,
            }
            return session;
        }
    },
});