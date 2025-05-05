"use server";
import { LoginCred, NewUser } from "@/lib/schema/userCredential";

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

        return { success: true, message: "Your account is created !"};
    } catch (error) {
        return { success: false, message: "Email is taken..." };
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
        return {
            succes: true,
            message: "You are logged !"
        };
    } catch (error) {
        return { success: false, message: error };
    }
}
