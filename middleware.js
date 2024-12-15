import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export { auth as middleware } from "./auth";
export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/admin'],
};