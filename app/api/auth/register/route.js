import { neon } from "@neondatabase/serverless";
import { hash } from "bcryptjs";

export async function POST(request) {
    try {
        const sql = neon(process.env.DATABASE_URL);
        const { username, password } = await request.json();

        const user = await sql`SELECT * FROM users WHERE username = ${username}`;
        if (user.length > 0) {
            return new Response(JSON.stringify({ error: 'Username already exists' }), { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        const genEmail = `${username}@test-roblox.com`;
        const resp = await sql`INSERT INTO users (username, password, email) VALUES (${username}, ${hashedPassword}, ${genEmail}) RETURNING *`;

        return new Response(JSON.stringify(resp), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500 });
    }
}