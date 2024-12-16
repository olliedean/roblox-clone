"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
    username: z.string().min(2),
    password: z.string().min(6),
});

export default function SignupPage() {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        console.log("Form data:", data); // Add logging to debug
        const { username, password } = data;

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log("Form submitted successfully");
            window.location.href = "/login";
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="mx-auto bg-[#393b3d] w-96 mt-10 p-4">
            <div className="text-center text-2xl font-black">Sign up and start having fun!</div>
            <div className="mt-4">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        {...form.register("username")}
                        className="w-full bg-neutral-900 text-white p-2 rounded-md"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        {...form.register("password")}
                        className="w-full bg-neutral-900 text-white p-2 rounded-md mt-2"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="w-full border border-gray-400 text-white p-1 rounded-md mt-2"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-12">
                    <a href="/login">Already have an account? Sign in.</a>
                </div>
            </div>
        </div>
    );
}