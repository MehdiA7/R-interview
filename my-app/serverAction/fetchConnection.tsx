"use server";
import { LoginCred, NewUser } from "@/lib/schema/userCredential";
import { cookies } from "next/headers";

const Api: string = process.env.API_URL || "NO API";

export async function createANewUser(body: NewUser) {
    try {
        const response = await fetch(`${Api}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.status === 409)
            return { success: false, message: "This email is already used..." };

        const data = await response.json();

        return data;
    } catch (error) {
        return { success: false, message: "Somethin wrong...", error: error };
    }
}

export async function login(body: LoginCred) {
    try {
        const response = await fetch(`${Api}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (response.status === 400)
            return {
                success: false,
                message: "Email or password is incorrect",
            };

        const data = await response.json();

                const cookieStore = await cookies();
        
                cookieStore.set({
                    name: 'Authorization',
                    value: data.token,
                    httpOnly: true,
                    path: '/',
                });

        return data;
    } catch (error) {
        return { success: false, message: error };
    }
}
