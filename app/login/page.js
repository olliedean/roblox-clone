"use client";

import { useActionState } from "react";
import { authenticate } from "../lib/actions";

export default function LoginPage() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="mx-auto bg-[#393b3d] w-96 mt-10 p-4">
            <div className="text-center text-2xl font-black">Login to Roblox</div>
            <div className="mt-4">
                <form action={formAction}>
                    <input type="text" name="username" className="w-full bg-neutral-900 text-white p-2 rounded-md" placeholder="Username" />

                    <input type="password" name="password" className="w-full bg-neutral-900 text-white p-2 rounded-md mt-2" placeholder="Password" />
                    {errorMessage && (
                        <div className="text-red-500 text-xs mt-1">{errorMessage}</div>
                    )}
                    <button
                        className="w-full border border-gray-400 text-white p-1 rounded-md mt-2"
                        aria-disabled={isPending}
                    >
                        Log In
                    </button>
                </form>
                <div className="text-center mt-2">
                    <a href="#">Forgot password or username?</a>
                </div>
                <hr className="my-4 brightness-50" />

                <div className="text-center">
                    <button className="w-full border border-gray-400 text-white p-1 rounded-md">
                        Email Me a One-Time Code
                    </button>
                    <button className="w-full border border-gray-400 text-white p-1 rounded-md mt-2">
                        Use Another Device
                    </button>
                </div>
                <div className="text-center mt-12">
                    <a href="/signup">Don&apos;t have an account? Sign Up</a>
                </div>
            </div>
        </div>
    )
}